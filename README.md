# E-commerce Website

## Description

The e-commerce backend service uses an ORM Sequelize and Express server, to manage a MySQL database. The ORM models include, categories, products, and tags. Each model allows the user to perform CRUD operations on each of the tables.

## Demo Video

- [Video Link](https://drive.google.com/file/d/1EWDV9LevvO7TDtsSoDf-sq-AL7cVU6E3/view?usp=sharing)

## Install

```sh
npm i
```

## Testing

Use `./db/schema.sql` to create `ecommerce_db` in MySQL.

Seed database with test data

```sh
npm run seed
```

Run nodemon server

```sh
npm run watch
```

## Usage

Start the app

```sh
npm start
```
