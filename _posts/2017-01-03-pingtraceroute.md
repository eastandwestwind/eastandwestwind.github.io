---
layout: post
date: 2017-01-03
title: "Using ping and traceroute"
description:
category:
- how it works
tags:
- ping
- traceroute
- path
- packet
---

The ping command is a simple way to test whether a destination server is reachable. Ping uses the ICMP, or Internet Control Message Protocol, which is always coupled with the IP protocol. The two operation codes of ICMP used for ping are echo request and echo response. 

Ping reveals how many responses are returned as well as how long it takes. By default, ping waits 4 seconds between each request before displaying a timeout message for the request. The syntax is `ping` + IP address.

For a more detailed view of the path each packet takes over TCP, use traceroute. A packet moving from one router to another is called a "hop". Traceroute follows the sequence of hops from client to server, as well as round-trip time it takes to reach each router. To use this, the syntax is `traceroute` + remote IP address.

On Windows, tracert uses ICMP, but on Linux and Mac, traceroute uses UDP, or User Datagram Protocol.