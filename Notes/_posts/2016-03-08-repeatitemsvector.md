---
title: How to repeat items in vector
---

My vector:

	n<-c(362.156,260.475,883.575,326.012,249.444,796.299)

I want to repeat each item in vector 3 times.

	list<-1:length(n)
	f<-function(x){rep(n[x],3)}
	n<-unlist(lapply(list,f))

Now my vector looks like this

n
 [1] 362.156 362.156 362.156 260.475 260.475 260.475 883.575 883.575 883.575
[10] 326.012 326.012 326.012 249.444 249.444 249.444 796.299 796.299 796.299