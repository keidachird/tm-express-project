# Express project

This project contains a simple server application "Book and review of the books". It was made as a homework for [Techmagic Academy](https://www.techmagic.co/techmagic-academy).

## Overview

The API endpoints are named using REST naming conventions and it provides the ability to perform the following actions:

1. Create a new book: `POST http://localhost:3000/books`
2. Get list of the books: `GET http://localhost:3000/books`
3. Get a book by ID: `GET http://localhost:3000/books/1`
4. Edit a book title: `PATCH http://localhost:3000/books/1`
5. Add a review for a book: `POST http://localhost:3000/books/1/reviews`
6. Delete a review by ID: `DELETE http://localhost:3000/books/1/reviews/1`
7. Receive a list of reviews by book ID: `GET http://localhost:3000/books/1/reviews`

## Installation

- Clone this repository with `git clone https://github.com/keidachird/tm-express-project.git`.
- Open the cloned folder with `cd tm-express-project`.
- Run `npm i` to install all dependencies.
- Run `npm start` to launch a server.
