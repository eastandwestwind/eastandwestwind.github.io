---
layout: post
date: 2017-01-02
title: "The 'How It Works' Series"
description: "How to teach yourself web development from the ground up"
category:
- how it works
tags:
- education
- web dev
- resources
---

With an understanding of web development using very high level languages and little hardware knowledge, I thought it was about time to dive in and really learn how the web works, from the bottom up. This plan is not intended to be static, rather continuously edited and updated with additional content that makes sense as I move along. 

It is also anticipated that I do my due diligence and research freely topics I don't understand, using resources I find that I may or may not document here. I plan to write blog posts along the way, to help assimilate new knowledge and note important things I want to have for reference in the future. That said, stay tuned for posts [here](https://catherine.work/)!

So let's get started.

Overview
--------
1. I will begin with what we can all connect with - [What does it take to get a web page?](http://www.cs.bu.edu/~best/courses/cs109/modules/getwebpage/), a brief tutorial of what really happens on a high level when we type in a web page.
2. Then I cast a wider net, into [How does the Internet work?](https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm), which details the infrastructure of the internet, from protocol stacks as a structure, to routing, to common application protocols.

TCP
----
1. The TCP [3-way handshake](http://www.inetdaemon.com/tutorials/internet/tcp/3-way_handshake.shtml)
2. [TCP multiplexing](http://www.inetdaemon.com/tutorials/internet/tcp/multiplexing.shtml)
3. [TCP synchronization](http://www.omnisecu.com/tcpip/tcp-three-way-handshake.php)

Sockets
--------
1. [What is the difference between a port and a socket?](http://stackoverflow.com/questions/152457/what-is-the-difference-between-a-port-and-a-socket)
2. [Internet Sockets](http://beej.us/guide/bgnet/output/html/singlepage/bgnet.html) (only through section 3), which also details data encapsulation, more detail on IP addresses, and connecting that to writing actual code in C

Websockets 
----------
1. A brief intro to [Websockets](https://www.fullstackpython.com/websockets.html), making comparisons to AJAX in web development. 
2. The Introduction section of [The Websocket Protocol](https://tools.ietf.org/html/rfc6455)
3. [different communication techniques on the web](http://stackoverflow.com/questions/10028770/in-what-situations-would-ajax-long-short-polling-be-preferred-over-html5-websock?rq=1)
4. Optional - [Intro to AJAX](https://www.udacity.com/course/intro-to-ajax--ud110), 2 weeks-long, gives a breather from networking and computer infrastructure, but would take my knowledge of javascript to the next level. In the course, I will be building a web app using Ajax best practices through various APIs.

Number Systems and C
------------------
1. Intro to [Hex, Decimal, Binary, Bits, and Bytes](http://jennyshobbyfarm.com/webelfindesign/hdbbb.html)
2. How [Base64](http://codesnipers.com/?q=how-i-invented-base64) came about
3. Then I will begin to learn basic C, using [Introduction to C](http://www.cprogramming.com/tutorial/c/lesson1.html), aiming to write a program that opens a web socket, while of course learning the basics of the language. I'll write a program with a seg fault, and learn what a stack overflow is.

Hardware and Operating Systems
---------------------------
1. [Computer Science from the Bottom Up](http://feederio.com/files/book/14825303521699_27b3feca45ef47b0b77c9aa0a1565b0a.pdf), etailing the fundamentals of operating systems through to how applications are compiled and executed. I don't intend to read this front-to-back, rather gaining a thorough understanding of a couple main points: understand VM, CPU, binary, and C.
2. Taking more of an electrical engineering approach, connecting hardware to software on a granular level, [Code: The Hidden Language of Computer Hardware and Software](https://bobcarp.files.wordpress.com/2014/07/code-charles-petzold.pdf)

Networking and Security
-----------------------
1. [Networking for web developers](https://www.udacity.com/course/networking-for-web-developers--ud256), 2 weeks-long Udacity course, gives a practical introduction of tools that would allow me to explore under the hood of the web. This should strengthen my understanding of how the internet works by using real tools.
2. [Configuring Linux Web Servers](https://www.udacity.com/course/configuring-linux-web-servers--ud299), 1 week-long, will expand on my knowledge of http and networking with some hands-on experience, and also covers a topic of interest: web security, and how this works in a Linux server.
3. Lastly, [Client-server communication](https://www.udacity.com/course/client-server-communication--ud897), 5 weeks-long, fills in the missing gap with some practical insights into the differences between HTTP1 HTTPS, and HTTP2, as well as instruction on how to resolve some common security issues in applications.







