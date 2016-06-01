---
title: How to test speed
---

	testspeed <- function()
	{
	    p1 <- proc.time()
	    
	    *insert thing to test

	    proc.time() - p1
	}
	
	testspeed()