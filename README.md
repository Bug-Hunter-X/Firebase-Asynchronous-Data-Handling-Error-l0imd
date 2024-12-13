# Firebase Asynchronous Data Handling Bug

This repository demonstrates a common error when working with Firebase's asynchronous data retrieval methods.  The bug arises from attempting to access data before it's been fetched from the database.

## Bug Description

The `bug.js` file contains code that attempts to access Firebase data synchronously, leading to undefined behavior.  The `bugSolution.js` file provides a corrected version.

## How to Reproduce

1.  Ensure you have a Firebase project set up and configured.
2.  Clone this repository.
3.  Run `bug.js`. Observe the error.
4.  Run `bugSolution.js`. Observe the correct behavior.

## Solution

The solution involves properly handling the asynchronous nature of Firebase data retrieval using promises or async/await.