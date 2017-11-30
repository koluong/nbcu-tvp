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

Formed May 12, 2004 after the merger of National Broadcasting Company and
Universal Entertainment, NBCUniversal (NBCU) remains one of the largest
multinational media and entertainment companies. The NBCU campus in Universal
City, California deals heavily with the production and development its studio
entertainment, interactive products and its amusement park. The Television
Production IT (TVP) team within NBCUniversal serves as the primary IT support
for television entertainment production teams including NBC TV Network,
Universal Television, Universal Cable Productions and other peripheral
television groups. The TVP team is responsible for configuring computer systems
and networks for these television groups as well as providing technology support
for their clients.

Most of the work the TVP team does is managing and tracking equipment requests,
inventory and support requests. A lot of this is done through email, Google
forms, Excel and ServiceNow. This represents problems for the TVP admin,
particularly in transferring data from emails and forms onto an Excel sheet and
onto ServiceNow. Currently, there is no database infrastructure set up to hold
preliminary request data, and the onus falls onto the TVP admin to structure and
maintain the data on an Excel sheet. Because of this, there are many pain points
prone human errors.\
Also, currently there is no efficient way to track equipment, especially those that
are outside Universal City. There is no efficient way to search for equipment grouped
by location or request. Due to this, there exists no quick way to run a comprehensive
management report.

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

![Alt text](https://raw.githubusercontent.com/koluong/nbcu-tvp/master/public/photo/tvp-app.png "TVP Application Architecture")

## Technical Documentation

### [React](https://reactjs.org)

React is a JavaScript library used for building front end user interfaces. React
manages our application state and views.

### [Create-React-App](https://github.com/facebookincubator/create-react-app)

This project is bootstraped with create-react-app.

### [Node](https://nodejs.org/en/)

Node.js is a Javascript runtime environment that enables JavaScript to be run on
a server. Dependencies are managed through Node Package Manager.

### [Express](https://expressjs.com)

Express is a web application framework for Node.js. Middleware and API endpoints
are written with Express.

### [MongoDB](https://www.mongodb.com)

MongoDB is a NoSQL database. Data is stored in JSON documents.

### [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

Our MongoDB cluster is hosted on MongoDB Atlas as a service. Atlas runs our
instances on multiple AWS servers for redundancy. Atlas offers security and
scalability.

* _MongoDB Atlas offers a free tier entailing 500mb of M2 storage_
