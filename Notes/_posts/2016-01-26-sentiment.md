---
title: Sentiment Analysis Functions
---

Grab the [DL opinion lexicon](https://www.cs.uic.edu/~liub/FBS/sentiment-analysis.html) pos and neg words list. Add additional words as per industry or use.

	setwd("/Users/Catherine/Dropbox/learn")
	library(plyr)
	pos.words<-scan('positive-words.txt',what='character',comment.char=';')
	neg.words<-scan('negative-words.txt',what='character',comment.char=';')

To allow handing of characters in tolower, [thanks](http://gastonsanchez.com/blog/how-to/2012/05/29/Catching-errors-when-using-tolower.html).

	tryTolower = function(x){
		#create missing value. this is where the returned value will be
   		y = NA
		#tryCatch error
   		try_error = tryCatch(tolower(x), error = function(e) e)
		# if not an error
   		if (!inherits(try_error, "error"))
      		y = tolower(x)
   		return(y)
	}

Allow handling of NA

	score.sentiment = function(sentences, pos.words, neg.words, .progress='none')
	{
    	require(plyr)
    	require(stringr)
     
    	# we got a vector of sentences. plyr will handle a list
    	# or a vector as an "l" for us
    	# we want a simple array ("a") of scores back, so we use 
    	# "l" + "a" + "ply" = "laply":

    	scores = laply(sentences, function(sentence, pos.words, neg.words) {
         
       		# clean up sentences with R's regex-driven global substitute, gsub():
       	 	sentence = gsub('[[:punct:]]', '', sentence)
        	sentence = gsub('[[:cntrl:]]', '', sentence)
        	sentence = gsub('\\d+', '', sentence)
        	# and convert to lower case:
        	sentence = sapply(sentence, function(x) tryTolower(x))
 
        	# split into words. str_split is in the stringr package
        	word.list = str_split(sentence, '\\s+')
        	# sometimes a list() is one level of hierarchy too much
        	words = unlist(word.list)
 
        	# compare our words to the dictionaries of positive & negative terms
        	pos.matches = match(words, pos.words)
        	neg.matches = match(words, neg.words)
     
        	# match() returns the position of the matched term or NA
        	# we just want a TRUE/FALSE:
        	pos.matches = !is.na(pos.matches)
        	neg.matches = !is.na(neg.matches)
 
        	# and conveniently enough, TRUE/FALSE will be treated as 1/0 by sum():
        	score = sum(pos.matches) - sum(neg.matches)
 
        	return(score)
    	}, pos.words, neg.words, .progress=.progress )
 
    	scores.df = data.frame(score=scores, text=sentences)
    	return(scores.df)
	}

Input vector and analyze sentiment, then plot.

	sentiment<-score.sentiment(vector,pos.words,neg.words,.progress='text')
	qplot(sentiment$score)