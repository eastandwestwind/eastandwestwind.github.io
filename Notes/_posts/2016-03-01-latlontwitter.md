---
title: How to extract lat/lon from twitter users
---

Most tweets don't have an inherent lat/lon associated with it, even though it is available through the API. To get around this, I can extract location info from each user's profile, then parse it against gdata to match with a lat/lon.

First load libraries and oauth twitter:

    library("twitteR")
    library('base64enc') #to correctly authenticate
    library("httpuv")
    library(tm)
    library(RColorBrewer)
    library(maps)
    library(geosphere)
    library(gdata)
    setup_twitter_oauth('xxxxx','xxxxxxx')

Search twitter, in this case I'm stripping retweets out of my data set.

    catTweets<-searchTwitter('cats',n=150)
    catTweets<-strip_retweets(catTweets)

To convert to data frame, either of these will work:

    df<-twListToDF(catTweets)

or

    df<-do.call("rbind",lapply(catTweets,as.data.frame))

This function gets the location of each user:

    getLocation<-function(x){
  	 y<-getUser(x)
       return(y$location)
    }

This function takes the location and finds the lat/lon assiciated with it:

    findLatLon <- function(loc){
      latlon = NA
      # Get the first element of the location
      firstElement = strsplit(loc,",")[[1]][1]
      if(is.na(firstElement)){firstElement="zzzzzzzzz"}
      # See if it is a city
      tmp = grep(firstElement,world.cities[,1],fixed=TRUE)
      tmp2 = grep(firstElement,state.name,fixed=TRUE)
      tmp3 = grep(firstElement,world.cities[,2],fixed=TRUE)
      if(length(tmp) == 1){
        latlon = world.cities[tmp,c(5,4)]
      }else if(length(tmp) > 1){
        tmpCities = world.cities[tmp,]
        latlon = tmpCities[which.max(tmpCities$pop),c(5,4)]
      }else if(length(tmp2) == 1){
        latlon = c(state.center$x[tmp2],state.center$y[tmp2])
      }else if(length(tmp3) > 0){
        tmpCities = world.cities[tmp3,]
        latlon = tmpCities[which.max(tmpCities$pop),c(5,4)]
      }  
      return(latlon=latlon)
    }

Apply the getLocation function to each screenName:

    locations <- lapply(df$screenName, function(x) getLocation(x))
    locations<-as.character(locations)

Apply the findLatLon function to each location:

    latlon <- lapply(locations, function(x) findLatLon(x))
    # add lat lon as new column
    df$latlon<-latlon
    # split lat and lon
    library(tidyr)
    df <- separate(df, latlon, into = c("lon","lat"), sep = ",", extra = "merge")

Now just clean up and write as csv:

    # remove space and before in lon
    df$lon<-gsub(".* ", "", df$lon)
    # remove ( and before in lon
    df$lon<-gsub(".*\\(", "", df$lon)
    # remove space and before in lat
    df$lat<-gsub(".* ", "", df$lat)
    # remove )) and after in lat
    df$lat<-gsub( "\\).*$", "", df$lat)
    write.csv(df,"rarediseaseday.csv")


