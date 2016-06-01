---
title: Neural Network key terms
---

**Neural network terms:**

training- train by forward-propagating through the network, and then backpropagating to determine the contribution to the gradient, with the goal of reducing the cost function

hidden neurons- more is usually more accurate/powerful

epochs- rounds of training. Longer is usually more accurate, Running too long can result in overfitting.

mini-batch size- linear to gradient computation time. 10-500 is standard

alpha/learning rate- determines how quickly gradient descent occurs. Between 0 and 1( .3, .03, .003 are good tests)

normalization- prep data for training so gradient descent is efficient and more accurate

cross-entropy cost function- addresses learning slowdown in cost function

Convolutional network

**Tree ensembles:**

Random forests- random

Gradient Boosted Decision Trees- like random forests, but with more hyperparameters to tune, thus more difficult to get right, and more prone to overfitting. Tends to perform better than random forests

**Other methods:**

SVM (Support vector machine)- classification method outputting an optimal hyperplane. Good benchmarking tool for neural network performance

kNN- approximates underlying dist of data non-parametrically. Sensitive to bad features and outliers. good for lots of points in low dimensional space.