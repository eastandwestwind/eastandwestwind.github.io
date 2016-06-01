---
title: How to extract data from TwitteR
---

Add app to twitter account.
Set callback url to http://127.0.0.1:1410
Grab api key and api secret.

	library("twitteR")
	library('base64enc') #to correctly authenticate
	library("httpuv")
	setup_twitter_oauth("xxxxx","xxxxxxxx") 


Send DM to users
	
	dmSend("hihihi","user") 

View available locations

	availableTrendLocations() 

View trends in boston

	getTrends(2367105,exclude=NULL)

View worldwide trends

	getTrends(1,exclude=NULL)

Search twitter

	tweets<-searchTwitter("cats", n=500, lang="en")

To extract the text:
	
	text<-sapply(mach_tweets, function(x) x$getText())

To extract entire data to data frame:
	
	df<-twListToDF(text)

To order data by highest retweets
	
	test<-sqldf("select text,screenName,favoriteCount,retweetCount from df order by retweetCount desc, favoriteCount desc")

Basic Wordcloud from tweets:
	
	library(wordcloud)
	library(tm)
	library(RColorBrewer)

	# Search twitter
	mach_tweets = searchTwitter("#Hacktrafficking4good", n=1500, lang="en")
	# Extract text
	mach_text = sapply(mach_tweets, function(x) x$getText())
	# Fixes error
	mach_text <- iconv(mach_text,to="utf-8-mac")
	# Create corpus
	mach_corpus = Corpus(VectorSource(mach_text))
	# Create tdm, using appropriate stopwords
	tdm = TermDocumentMatrix(mach_corpus,control = list(removePunctuation = TRUE,stopwords = c("hack", "trafficking", stopwords("english")),removeNumbers = TRUE, tolower = TRUE))
	# Define tdm as matrix
	m = as.matrix(tdm)
	# Get word counts in decreasing order
	word_freqs = sort(rowSums(m), decreasing=TRUE) 
	# Create a data frame with words and their frequencies
	dm = data.frame(word=names(word_freqs), freq=word_freqs)
 	# Keep 50 top words
	dm<-dm[1:50,]
	# Plot wordcloud
	wordcloud(dm$word, dm$freq, random.order=FALSE, colors=brewer.pal(8, "Dark2"))

