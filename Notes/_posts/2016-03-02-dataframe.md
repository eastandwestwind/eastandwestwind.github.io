---
title: How to create a data frame from scratch
---

Useful for testing purposes.

This creates a data frame of 2 rows, both with 1000 randomly sampled values from 1-100.

	df<-data.frame(c(sample(1:100,1000,replace=TRUE)),c(sample(1:100,1000,replace=TRUE)))