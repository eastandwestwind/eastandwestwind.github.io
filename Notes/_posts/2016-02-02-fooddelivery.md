---
title: How to perform Twitter Sentiment Analysis
---

Load libraries

    library(twitteR)
    library(plyr)
    library(ggplot2)
    library(doBy)

Startup twitteR

    setup_twitter_oauth("xxxxx","xxxxxxxx") 

Load [Sentiment Functions and pos/neg word lists](http://catherine.work/post/sentiment)

Run multiple twitteR queries, extract text, run over score sentiment function, plot, and add identifying column to df.

Foodler 
  
    df<-searchTwitter('foodler',n=1500)
    df<-laply(df,function(t) t$getText())
    foodler<-score.sentiment(df,pos.words,neg.words,.progress='text')
    qplot(foodler$score)
    foodler$company<-'Foodler'

Grubhub

    df<-searchTwitter('grubhub',n=1500)
    df<-laply(df,function(t) t$getText())
    grubhub<-score.sentiment(df,pos.words,neg.words,.progress='text')
    qplot(grubhub$score)
    grubhub$company<-'Grubhub'

HelloFresh

    df<-searchTwitter('hellofresh',n=1500)
    df<-laply(df,function(t) t$getText())
    hellofresh<-score.sentiment(df,pos.words,neg.words,.progress='text')
    qplot(hellofresh$score)
    hellofresh$company<-'HelloFresh'

DoorDash

    df<-searchTwitter('doordash',n=1500)
    df<-laply(df,function(t) t$getText())
    doordash<-score.sentiment(df,pos.words,neg.words,.progress='text')
    qplot(doordash$score)
    doordash$company<-'DoorDash'

Merge data frames, plot, score ratio of pos to neg sentiment

    all.scores<-rbind(foodler,grubhub,hellofresh,doordash)
    ggplot(data=all.scores)+geom_bar(mapping=aes(x=score,fill=company),binwidth=.5)+facet_grid(company~.,scales="free_y")+theme_bw()+scale_fill_brewer()

![Bar Chart](/images/Food_delivery_sentiment.png)

    all.scores$very.pos<-as.numeric(all.scores$score>=1.5)
    all.scores$very.neg=as.numeric(all.scores$score<=-1.5)
    twitter.df<-ddply(all.scores,'company',summarise,pos.count=sum(very.pos),neg.count=sum(very.neg))
    twitter.df$all.count<-twitter.df$pos.count+twitter.df$neg.count
    twitter.df$score<-round(100*twitter.df$pos.count/twitter.df$all.count)
    orderBy(~-score,twitter.df)


         company pos.count neg.count all.count score
    2    Foodler        42         3        45    93
    4 HelloFresh       115        22       137    84
    1   DoorDash        87        22       109    80
    3    Grubhub        93        64       157    59

Foodler has the highest score, at 93, while Grubhub takes the bottom, at 59.




