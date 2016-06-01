---
title: How to source a script
---

My script.R contains a function:
	
	func<-function(apples,people){
		return(apples/people)
	}

Now setwd() and:

	source("script.R")
	func(100,45)