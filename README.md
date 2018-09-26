# SilverStripe 4.x Boilerplate

The setup is an (opioniated) example in docker (compose), to orchestrate the LAMP stack on whatever OS you're working with.

Featured services are:

  * PHP 7.2
  * Apache 2
  * MariaDB (latest)
  * NodeJS for compiling theme assets
  * mailhog for catching mails (latest)

## Docker Services

### Initial Setup

```sh
  $ git clone https://github.com/pstaender/silverstripe-boilerplate.git myproject
  $ cd myproject
  $ rm -rf ./.git # if you want to use your own git project
```

Have a look at `docker-compose.yml`, `php/apache.conf` and `php/php.ini` and optionally modify the configuration to your needs.

### Project Setup

```sh
  $ cd myproject # if you're not alerady in the project folder
  $ mkdir www
  $ docker-compose build
  $ docker-compose run php composer create-project silverstripe/installer . ^4.2
  $ cp .env.template www/.env
  $ docker-compose run php sake /dev/build flush=all
```

Finally start your docker service:

```sh
  $ docker-compose up
```

## Compiling Theme Assets

A (newer) NodeJS, NPM, yarn and grunt are required.

It compiles:

  * sass, scss ans less (with autoprefixer) to css
  * coffee and/or es6 to js

### Setup

Only required initially if a node-module has changed / needs to be updated:

```sh
  $ docker-compose run nodejs npm install .
```

### Compiling

To compile once:

```sh
  $ docker-compose run nodejs grunt
```

or watch for change and compile:

```sh
  $ docker-compose run nodejs grunt watch
```

An example folder structure for a theme for the given grunt file:

```
www/themes/mytheme
├── coffee
├── css
├── fonts
├── images
├── javascript
│   └── dist
└── scss
```