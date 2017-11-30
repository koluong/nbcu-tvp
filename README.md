# NBCUniversal TVP Application

This project was created for NBCUniversal's Televsion Production IT team.

Below you will find some information on its technical design and documentation.
This project is currently ongoing and a live beta build will be deployed
[here](https://nbcu-tvp-beta.herokuapp.com).

## Contents

1. [Understanding the Business](#understanding-the-business)
2. [Application Features](#application-features)
3. [System Analysis and Design](#system-analysis-and-design)
4. [Technical Documentation](#technical-documentation)

## Understanding the Business

## Application Features

### User Interface

* **Form**

  This is the online form that users use to request equipment from TVP.

* **Search bar**

  Users/Admin can search for a specific request from the database.

* **Map**

  This is the instance of Google Maps that will be generated every time the user
  searches for an request. The user/admin is able to see a marker or cluster of
  the request(s) location.

* **Admin Console**

  This is the password protected admin console. From here, an admin can view,
  update, and close requests. There is mapping and reporting functionality.

## System Analysis and Design

## Technical Documentation

### [React](https://angular.io)

We utilize Angular to create a Single Page Application (SPA) by using front-end
routing. We also make use of Angular's data binding to get user input and event
and property binding to control the HTML DOM. Angular allows for a responsive
and reactive application.

* _Project created and compiled with Angular CLI_

### [Create-React-App](https://console.developers.google.com/apis/library)

Google Maps and Google Places provides web services in generating the map and
retrieving locations for our restaurant and places components.

* _Google Maps JavaScript and Google Places API and web services are free for
  the first 1000 calls per day; by having billing information free calls are
  increased to 150,000 per day_

### [Node](https://www.zillow.com/howto/api/APIOverview.htm)

Zillow API provides an extensive web service to get real estate, property
details and valuation, and neighborhood data returned in XML.

* _Using Zillow API is free for the first 1000 requests per day_

### [Express](https://darksky.net/dev/)

We needed a weather API that handles request for the current and future weather.
Dark Sky fulfills both of these while providing minute-by-minute weather
forecast in JSON format.

* _Using Dark Sky API is free for the first 1000 requests per day_

### [MongoDB](https://www.mediawiki.org/wiki/API:Main_page)

Wikipedia is built on top of MediaWiki API. This provides a convenient way to
access wiki features, data, and meta-data returned in JSON format.

* _MediaWiki is open source software and free to use_

### [MongoDB Atlas](https://aws.amazon.com/s3/)

The S3 bucket allows us the host our single page application with ease on AWS.
It is a convenient way to store cloud-native applications like websites with a
simple interface to configure CORS and bucket policy.

* _Amazon S3 offers a free tier entailing 5GB of S3 storage, 20,000 GET and
  2,000 PUT requests per month_
