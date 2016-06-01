---
title: How to determine sample size needed
---

zstar- z score based on percentile normal dist at upper tail based on confidence level. 95% confidence correlates with 97.5% of dist at upper tail 1-((1-.95)/2)=.975.
p- estimate or actual proportion
E- margin of error


	zstar<-qnorm(.975) 
	p<-0.025 
	E<-0.005
	m<-zstar^2*p*(1-p)/(E^2)