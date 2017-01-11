---
layout: post
date: 2016-03-08
title: "Subset vector using split"
description:
category:
- r
tags:
- subset
- split
- dataframe
- vector
---

Suppose you had tabular data that was concatenated into one large vector, and you had to find a way to convert this vector into a dataframe. You could certainly do this manually, but there is a better way.

So suppose you had this raw vector:

	v<-c(sample(100:200,36,replace=TRUE))

You could do this manually- subset into rows, then rbind into df:

	a<-v[1:6]
	b<-v[7:12]
	c<-v[13:18]
	d<-v[19:24]
	e<-v[25:30]
	f<-v[31:36]
	df<-as.data.frame(rbind(a,b,c,d,e,f))

But there's an easier way to subset.

	sub<-split(v, ceiling(seq_along(v)/6))

So now each row x I need in the data frame can be referenced by sub[x].

	df<-as.data.frame(list(sub[1:length(sub)]))
