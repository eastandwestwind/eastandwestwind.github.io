---
title: How to construct confidence intervals for A/B test
---

This is an A, B, C test against a control, where p=proportion and n=observations. The resulting intervals are at 80% confidence.

	control <- c(p, n) 
	a <- c(p, n) 
	b <- c(p, n) 
	c <- c(p, n) 

	abtestfunc <- function(ad1, ad2){
      	sterror1 <- sqrt( ad1[1] * (1-ad1[1]) / ad1[2] )
      	sterror2 <- sqrt( ad2[1] * (1-ad2[1]) / ad2[2] )
      	minmax1 <- c((ad1[1] - 1.28*sterror1) * 100, (ad1[1] + 1.28*sterror1) * 100)
      	minmax2 <- c((ad2[1] - 1.28*sterror2) * 100, (ad2[1] + 1.28*sterror2) * 100)
      	print( round(minmax1,2) )
      	print( round(minmax2,2) )
	}

	abtestfunc(control, a)
	abtestfunc(control, b)
	abtestfunc(control, c)