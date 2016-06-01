---
title: How to create a wordcloud from tweets
---

Takes a vector and creates a fun wordcloud visualization based on most frequently used words in vector.

	library(wordcloud)
	library(tm)
	library(RColorBrewer)

If you're running tweets into the wordcloud, get tweets, extract text, then grep out http, which can be annoying
	
	mach_tweets <- searchTwitter("@Spotify", n=1500, lang="en")
	mach_text <- sapply(mach_tweets, function(x) x$getText())
	mach_text <- mach_text[-grep("\\http",mach_text)]

Then

	mach_text <- iconv(mach_text,to="utf-8-mac")
	mach_corpus <- Corpus(VectorSource(mach_text))
	tdm <- TermDocumentMatrix(mach_corpus,control = list(removePunctuation = TRUE,stopwords = c("", "", stopwords("english")),removeNumbers = TRUE, tolower = TRUE))
	m <- as.matrix(tdm)
	word_freqs <- sort(rowSums(m), decreasing=TRUE) 
	dm <- data.frame(word=names(word_freqs), freq=word_freqs)
	dm<-dm[1:100,]
	wordcloud(dm$word, dm$freq, random.order=FALSE, colors=brewer.pal(8, "Dark2"))