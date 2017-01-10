---
layout: post
date: 2017-01-04
title: "The Protocol Stack and Data Encapsulation"
description:
category:
- how it works
tags:
- protocol
- stack
- router
- network
---

I've talked about TCP and IP, both core protocols of the internet. These are typically referenced together, and, along with 2 other main layers, make up a protocol stack. A TCP/IP stack consists of 4 layers, detailed below.  

Here we follow what happens during transmission of a message from one computer to another.

1. Application Protocols Layer - protocols like HTTP, SMTP. Data is broken down into chunks of data called packets.
2. Transport Layer - UDP, TCP. With TCP, packets are assigned a port number. TCP guarantees all packets will arrive at the destination and in the correct order.
3. Internet/IP Layer - Packets are assigned a destination IP address.
4. Hardware Layer - closest layer to "internet", converting binary packet data to network signals and vice versa.

In layers 2 and 3, each packet is wrapped like an onion, with a header from each layer. This is often referred to as data encapsulation. The TCP header and IP header are both 20 bytes, though the content and structure between them are different. 

Next, routers examine the destination address of each packet and determines where to send it. This process can span across many routers before arriving at the final destination. Read about [network infrastructure and routing](http://catherine.work/notes/post/networkinfrastructure) to learn more about this step.

Finally, as the packets ascend the destination computer's protocol stack, they are stripped of the respective headers and eventually the packets are reassembled into the original message from the origin application layer.
