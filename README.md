# MoshX 🏆

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/6825a5f1db8f4856aa48f38121f2f993)](https://app.codacy.com/app/Mosh-Media/AngularX?utm_source=github.com&utm_medium=referral&utm_content=Mosh-Media/AngularX&utm_campaign=Badge_Grade_Dashboard)
[![Build Status](https://travis-ci.com/Mosh-Media/AngularX.svg?branch=master)](https://travis-ci.com/Mosh-Media/AngularX)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)


## Tools maker and components playground 

Wouldn't it be nice to build web apps without any code knowledge? I am talking drag n drop beautiful components without any headaches.

Imagine a collection of layouts such as tables, forms, charts, and calendars ready to be used for any purpose. These components are ready to handle and request API data to achieve any desirable results.

The idea is to build a very robust and modular front end application, and give developers the ability to build amazing interfaces in just minutes. We can achieve that level of complexity by using ngrx as our state management solution and firebase as our serverless backend.


## Top Features

- Firebase auth for easy register and login 
- Firebase collections and querying data in realtime
- NGRX for UI state management and async side Effects
- Ant Design UI components
- Module Lazy loading
- Auth guards
- Travis CI


## Features coming soon

- Firebase cloud functions for notifications
- PWA and offline support
- SEO elements and assets
- Playground components and tools maker


## Contribute 💙

Let's get this up and running! any help is highly appreciated

## Get Started

```
Signup for firebase https://console.firebase.google.com
Find your firbase configs and plug them in environments configs
git clone https://github.com/Mosh-Media/AngularX.git
npm install
ng serve -o
```


## Resources

[Angular auth ngrx guide](https://angularfirebase.com/lessons/ngrx-with-firebase-auth-google-oauth-login/)

[Ant Design Components](https://ng.ant.design/docs/introduce/en)


## Starting File Structure

```
app
│
└───components
│   │   posts
│   │   shared
│   │   users
│   └───user-details
│
└───containers
│   │   post
│   │   posts
│   │   user
│   │   users
│   └───auth
|
└───material
│   │
│   └───material.module
│
└───models
│   │   http-models
│   │   config.interface
│   │   post.interface
│   |   user.interface
│   └───auth.interface
|
└───services
│   │   config.service
│   │   post.service
│   │   user.service
│   └───auth.service
|
└───store
│   │   actions
│   │   |   config.actions
│   │   |   user.actions
│   │   |   post.actions
│   │   └───auth.actions
│   │
│   │   effects
│   │   |   config.effects
│   │   |   user.effects
│   │   |   post.effects
│   │   └───auth.effects
│   │
│   │   reducers
│   │   |   app.reducers
│   │   |   config.reducers
│   │   |   user.reducers
│   │   |   post.reducers
│   │   └───auth.reducers
│   │
│   │   selectors
│   │   |   config.selectors
│   │   |   user.selectors
│   │   |   post.selectors
│   │   └───auth.selectors
│   │
│   └───state
│   │   |   app.state
│   │   |   config.state
│   │   |   user.state
│   │   |   post.state
│   │   └───auth.state
│   |
|   app-routing.module
│   app.component.css
│   app.component.html
│   app.component.spec
│   app.component.ts
└───app.module
```
## Dev WorkFlow

### Components -> Presentation only
- These components don't alter app state in any way
- State and props are passed down to them
- Presentational only

### Containers -> Functionality and Presentation
- These components can alter app state and receive state and props from other components
- They are like pages contain smaller components

### Effects -> Logic and Functionality
- Handle async actions between components
- App logic and functionality can exist in them

### Services -> API Logic
- Handles communications with backend and cloud


## Upcoming tasks

- [ ] Finish Firebase integrations (Auth, database and rules)
- [ ] Finish Playground workflow
- [ ] Write tests
