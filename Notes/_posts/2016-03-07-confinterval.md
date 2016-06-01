---
title: How to estimate confidence interval
---

n<-sample size
p<-population proportion

Estimate standard error

	se<-sqrt(p*(1-p)/n)

Estimate margin of error

	e<-qnorm(.975)*se

Estimate confidence interval
	
	p + c(-e, e)


Now, in practice, we have a function in which we can feed in a p list and n list.

First turn off scientific notion

	options(scipen=999)

Confidence interval function:

	conf<-function(p,n){
		se<-sqrt(p*(1-p)/n)
		e<-qnorm(.975)*se	
		return(p + c(-e, e))
	}

Feed in list of n's and p's:

	nlist<-c(sample(100:200,36,replace=TRUE))
	plist<-c(sample(.25:.75,36,replace=TRUE))

mapply lists over function

	mat<-mapply(conf,plist,nlist)