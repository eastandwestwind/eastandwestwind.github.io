---
title: Getting Started Part 2
---

I want to investigate "The Effect of Vitamin C on Tooth Growth in Guinea Pigs," a study with data that comes default with R.  

Dose levels of Vitamin C are 0.5, 1, and 2 mg.  

The two delivery methods are orange juice (OJ) and ascorbic acid (VC).  


	> data()	#view default data that comes with R. I will use ToothGrowth    
	> summary(ToothGrowth)	#nice overview of data to get an idea of what needs to be done  
 	      len        supp         dose      
		Min.   : 4.20   OJ:30   Min.   :0.500  
 	1st Qu.:13.07   VC:30   1st Qu.:0.500  
 	Median :19.25           Median :1.000  
 	Mean   :18.81           Mean   :1.167  
 	3rd Qu.:25.27           3rd Qu.:2.000  
 	Max.   :33.90           Max.   :2.000 
	> sapply(ToothGrowth,class) #see the classes of columns  
          len      supp      dose 
	"numeric"  "factor" "numeric" 
	#Now I can see that we have varying dosage amounts, 2 different ways of supplying the dose, and of course resulting tooth growth.
	> library(reshape2)  
	> library(ggplot2)  
	> ggplot(ToothGrowth,aes(factor(dose),len,fill=factor(supp))) + geom_boxplot() + scale_fill_manual(values=c("#56B4E9","#0072B2"))    

![Boxplot](/images/toothgrowth.png)

As we can see, the highest dose produces the most significant results, with OJ being more effective except or the highest dose of 2 mg, when both delivery methods are equally effective.