---
title: How to delay outputs of function
---

Use Sys.sleep. Numbers correspond to seconds.

When in a function, just enclose each item in a print statement:

	func<-function(name,hobby){
		print(paste("I know what",name,"likes."))
		Sys.sleep(1.5)
		print(". . .")
		Sys.sleep(1.5)
		print(paste(name," likes ",hobby))
	}
