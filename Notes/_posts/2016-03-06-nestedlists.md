---
title: How to remove null obs from nested lists
---

To access the 25th item in the first list, we can do:

	sample[[1]][25]

Remove null obs from nested lists:

	is.NullOb <- function(x) is.null(x) | all(sapply(x, is.null))
	rmNullObs <- function(x) {
   		x <- Filter(Negate(is.NullOb), x)
   		lapply(x, function(x) if (is.list(x)) rmNullObs(x) else x)
	}

	sample<-rmNullObs(sample)

