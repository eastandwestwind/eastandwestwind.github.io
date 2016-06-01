---
title: How to lapply a function over a vector
---

Basic structure of function. This meow function lapplys a function over a vector and outputs 2 objects per i in vector.

	meow<-function(){
		vector<-sample(1:100,30)
		fun<-function(x){
  			a<-x/4
  			b<-x/5
  			return(c(a,b))
		}
		l<-lapply(vector,fun)
		return(l)
	}

Call the function:

	meow()