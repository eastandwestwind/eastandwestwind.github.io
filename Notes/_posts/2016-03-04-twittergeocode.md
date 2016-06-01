---
title: How to search tweets based on geocode
---

Geocode means latitude and longitude with a radius given in mi or km. Check out [this](http://www.latlong.net/) site to get lat and lon from location name.

	tweets<-searchTwitter('term',n=150, geocode='lat,lon,radius')

So for cat tweets around Boston:

	catTweets<-searchTwitter('cat',n=150,geocode='42.360082,-71.058880,5mi')