---
layout: post
date: 2017-01-04
title: "Sockets and WebSockets"
description: 
category:
- how it works
tags:
- protocol
- sockets
- websockets
- http
---

A socket, or endpoint, is the combination of an IP address and a port. Two sockets define a connection. There are 2 main types of sockets: Stream and Datagram. Stream sockets are guaranteed error-free and packets sent using stream sockets arrive in the order they are sent, FIFO. They are error-free because they are layered on top of TCP. Telnet uses stream sockets, as well as HTTP.

Datagram sockets are connectionless, run on UDP instead of TCP, so they allow for dropped packets. The use cases for datagram sockets over UDP are when speed is important and not every single piece of data is necessary, such as streaming music or multi-player games.

WebSockets, on the other hand, aren't actual sockets, so this can be confusing at first. Rather, they work on top of stream sockets, due to the fact that they require HTTP. 

The WebSocket protocol is designed to keep the browser-server connection open so that updates can be sent back and forth without abusing the capabilities of HTTP. 

First, you need to initialize the connection using HTTP, then the websocket handshake is simply an HTTP upgrade request. This handshake occurs after the initial TCP handshake when the client first connects to the server.