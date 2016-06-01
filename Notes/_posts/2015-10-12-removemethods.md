---
title: How to remove rows or columns from data frame
---


Data frames are referenced like [row,column].

So if you have dataframe df, df[3:5,] will print out rows 3 through 5.

Skip 10 rows when reading in file
	
	df<-read.csv("name.csv",skip=10,header=TRUE,row.names=NULL)

Remove last row of data
	
	df<-df[-nrow(df),]

Remove row 5
	
	df<-df[-5,]

Remove row if column matches i
	
	df <- df[-grep("\\i",df$column),] #allows for flexible regex
	df<-df[!(df$column=="i"),] #less flexible, but easy

Remove row if column does not match i. See how df[,1] references the first column instead of calling out by name?
	
	df<-df[df[,1]!="i",] 

Remove row if column matches values in a list

	df<-df[!df$column %in% c(1,2,3,4),]

Or use grepl!

	excludeid<-c(200,201,342,908,22,57,83,445)
	dfmerge<-lapply(excludeid,function(i){
		dfmerge[!grepl(i,dfmerge$ID),]
	})

Or use sqldf!! This basically says select everything from the dataframe where values in a certain column don't match other values.
	
	#method 1
	exclude<-data.frame(c(1,2,3,4,5,6,7))
	df<-sqldf("select * from df where column not in (select * from 'exclude')") 
	#method 2
	df<-sqldf("select * from df where column not in (1,2,3,4,5,6,7)")

Remove column by name
	
	df$column<-NULL 

Remove columns 3-5
	
	df<-df[,-(3:5)]
