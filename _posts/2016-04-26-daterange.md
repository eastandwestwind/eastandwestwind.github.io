---
title: How to select data between range of dates
---

df$Date<-as.Date(df$Date , "%m/%d/%y")
date1=as.Date("2016-03-21")
date2=as.Date("2016-03-27")
library(sqldf)
s <- paste("select * from df where Date between ', as.numeric(date1),' and ',as.numeric(date2)'")
sqldf(s, verbose = TRUE)

