---
layout: post
date: 2017-01-11
title: "Bits, Bytes, Binary, and other number systems"
description: 
category:
- how it works
tags:
- bits
- bytes
- binary
- base64
- hex
---

### Overview
Binary is a method of representing states, as either `0` or `1`. These binary digits are called bits. With one bit, we can represent 2 states, which is why binary can also be called Base 2. 

To represent more than 2 states, we use groupings of bits called bytes. A byte is a grouping of 8 bits. With 1 bit, we can represent 2 states (`0`, `1`), and with 2 bits, 4 states (`00`, `01`, `10`, `11`). With 3 bits: 8 states, and 4 bits: 16 states. 

### Binary Permutation Equation
So in Binary, we have an exponential relationship between the number of bits we have (b) to how many states we can represent (s). 

s = 2<sup>b</sup>

Using this equation, we now know that a byte can represent 2<sup>8</sup>, or 256 states. Since binary includes the number 0, this means we can count up to the number 255 using 1 byte.

The number 255 in binary looks like `1111 1111`.

### General Permutation Equation
For different Base systems, this general equation applies, relating the number of bits we have (b) to how many states we can represent (s), to the Base number system (n):

s = n<sup>b</sup>

### Hex
Hex is a Base 16 system, so one bit, or character in this case, goes from 0 - 9, then A - F, representing 16 total possibilities. Each character in Hex can represent 4 bits in binary, since 16<sup>1</sup> == 2<sup>4</sup>. With only 2 slots in Hex, we can represent 16<sup>2</sup>, or 256 states. Sound familiar? 

The number 255 in Hex looks like `FF`.

### Base64
Base64 is a method of representing binary in ASCII string format, which allows for reliably transmitting data across systems designed to handle only 7 bit data. Each character can represent 64 possible states, which is the equivalent of 6 bits in binary (2<sup>6</sup> == 64). 

The number 255 in Base64 looks like `MjU1`.


