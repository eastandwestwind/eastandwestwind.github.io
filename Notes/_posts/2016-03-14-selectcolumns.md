---
title: How to select columns from data frame
---

Say I have a data frame df with columns df$A, df$B, df$C. . .  df$Z. I only want df$C and df$M.

I can simply concatenate the column names like this:

	df.sub<-df[,c("C","M")]