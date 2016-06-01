---
title: How to get TwitteR User data
---

Within the R TwitteR package is the ability to getUser() or lookupUsers(). This returns an object of class user, and requires certain calls to return information about that user. Here's how to extract followers and location from a list of users. 

Note the [API rate limit](https://dev.twitter.com/rest/reference/get/users/lookup).

	y<-lookupUsers(c('eastandwestwind', 'stephenleesmith'))

Or if you have a data frame of tweets and usernames

	y<-lookupUsers(r$screenName)

This function gets number of followers

	followers<-function(i){
		return(length(i$getFollowerIDs()))
	}

Lapply the function over the users

	lapply(y,followers)

You can do the same for extracting location data from the users.

	getLocation<-function(x){
		y<-getUser(x)
	    return(y$location)
	}

	locations <- lapply(df$screenName, function(x) getLocation(x))

To get Tweets from specific user

	m<-userTimeline("eastandwestwind",n=50,includeRts=TRUE,excludeReplies=FALSE)
	m<-do.call("rbind",lapply(m,as.data.frame))

Keep tweets containing "data"

	m<-m[grep("data",m$text),]




