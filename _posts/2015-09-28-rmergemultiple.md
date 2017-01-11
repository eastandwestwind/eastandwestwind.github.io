---
layout: post
date: 2015-09-28
title: "Merging using reduce"
description:
category:
- r
tags:
- merge
- reduce
- dataframe
---

Use the reduce function to merge together multiple files. I've got email marketing data in 6 separate files, one for each email campaign. I need to merge these together to find general stats.

	>setwd("/Users/csmith/Dropbox/emails")
	>df1<-read.csv("email1.csv",header=TRUE,row.names=NULL)
	>df2<-read.csv("email2.csv",header=TRUE,row.names=NULL)
	>df3<-read.csv("email3.csv",header=TRUE,row.names=NULL)
	>df4<-read.csv("email4.csv",header=TRUE,row.names=NULL)
	>df5<-read.csv("email5.csv",header=TRUE,row.names=NULL)
	>df6<-read.csv("email6.csv",header=TRUE,row.names=NULL)

Now that I've read in all 6 files, I merge the data frames together.

	>dfmerge<-Reduce(function(x, y) merge(x, y, all=TRUE), list(df1, df2, df3,df4,df5,df6))
	>write.csv(dfmerge,file="merge.csv",row.names=FALSE)

For other merging, check out cbind and rbind.
