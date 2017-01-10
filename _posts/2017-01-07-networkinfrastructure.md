---
layout: post
date: 2017-01-07
title: "Network Infrastructure and Routing"
description:
category:
- how it works
tags:
- networks
- routers
- internet
- packets
---

The large networks that make up the internet backbone are called Network Service Providers, or NSPs. These networks exchange packet traffic via 2 different kinds of Internet Exchange (IX) points: Network Access Points (NAPs) and Metropolitan Area Exchanges (MAEs). 

MAEs are privately owned, while NAPs are not. The major NSPs can sell bandwidth to regional and local ISPs. As a result, this creates multiple layers of networks on top of one another. 

In this heirarchy, packets are moved in the proper direction via routers, which are placed between networks. Each router only knows the IP addresses of its sub-networks, so the routers act as a switch: if the IP address is within its sub-network, the packet is routed down to that network, and if the IP address is not, the packet is moved up the backbone to the next router.