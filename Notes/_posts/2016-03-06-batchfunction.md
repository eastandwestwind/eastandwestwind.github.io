---
title: How to feed batches of data into function 
---

Starting off with sample data of 1250 rows:

	df<-data.frame(c(sample(2:100,1250,replace=TRUE)),c(sample(2:100,1250,replace=TRUE)))

Initialize a list and a sequence by groups of 100, aside from the last, and loop through the data frame to create the sample:

	sample<-list()
	div<-seq(100,(nrow(df)+99),100)
	for(i in 1:length(div))
	{
	    sample[[i]]<-df[(100*(i-1)+1):div[i],1]
	}

If you have a list instead of a data frame:
	
	sample<-list()
	div<-seq(100,(length(list)+99),100)
	for(i in 1:length(div))
	{
	    sample[[i]]<-list[(100*(i-1)+1):div[i]]
	}

Lapply over sample to remove NAs

	sample<-lapply(sample, function(x) x[!is.na(x)])

Feed into simple function like this:

	lapply(1:length(sample),function(x) sample[[x]]/14)

Or if I need to feed each batch into a more complex function such as this funtimes function

	funtimes<-function(i){
		return(length(i$getmorefun()))
	}

you need to lapply again:

	lapply(1:length(sample),function(i) lapply(sample[[i]],funtimes))



