# AngularX 🏆
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/6825a5f1db8f4856aa48f38121f2f993)](https://app.codacy.com/app/Mosh-Media/AngularX?utm_source=github.com&utm_medium=referral&utm_content=Mosh-Media/AngularX&utm_campaign=Badge_Grade_Dashboard)
[![Build Status](https://travis-ci.com/Mosh-Media/AngularX.svg?branch=master)](https://travis-ci.com/Mosh-Media/AngularX)

Angular 7 + Ant Design + NGRX + Firebase = AngularX 🏆

Boilerplate to get you started quickly on your next Full-stack Serverless web app!
The Goal is to build an application that builds other Angular applications without any previous coding experience. We can achieve this by using the many cool features firebase and angular can deliver.

## Get Started

```
git clone https://github.com/Mosh-Media/AngularX.git
npm install
ng serve -o
```
## Resources

[Angular auth ngrx guide](https://angularfirebase.com/lessons/ngrx-with-firebase-auth-google-oauth-login/)
[Ant Design Components](https://ng.ant.design/docs/introduce/en)


## Basic File Structure

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


## Fun stuff

- [x] Initiate project with basic responsive layout
- [x] Setup lazy loading for containers
- [x] Setup Advanced file structure with Ngrx
- [x] Build firebase auth services and effects
- [x] Travis CI and Firebase deploy
- [ ] Setup Lazy loading for Effects

- [ ] Enhance UX/UI especially on mobile 
- [ ] Setup login via email and text msg
- [ ] Setup Schematics with Ant Design and Ngrx
