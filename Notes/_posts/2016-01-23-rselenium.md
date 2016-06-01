---
title: How I got RSelenium to work
---

RSelenium was throwing a couple errors I had to bypass through some research.

Using RSelenium is more flexible than rvest for web scraping, because rvest can't grab elements loaded with javascript. The default browser is Firefox, though other drivers can be installed to work with more browsers, including headless.

	library(RSelenium)

Download java 6

Download selenium server standalone

Move to /Library/Java

CD into /Library/Java, then run

	java -jar selenium-server-standalone-2.49.1.jar

Now I can:

	startServer()
	session <- remoteDriver()
	session$open()
	session$navigate("http://catherine.work")