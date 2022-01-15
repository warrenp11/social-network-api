# Social Network API

![](https://img.shields.io/badge/Created%20by-Peter%20Warren-yellow?style=for-the-badge)</br>
![](https://img.shields.io/badge/Database-MongoDB-green?style=flat-square&logo=mongoDB)  ![](https://img.shields.io/badge/npm%20package-express-blue?style=flat-square&logo=npm) ![](https://img.shields.io/badge/npm%20package-mongoose-red?style=flat-square&logo=npm)

## Table of Contents
* [Description](#description)
* [Walkthrough Videos](#walkthrough-videos)
* [Installation](#installation)
* [Tests](#tests)
* [Credits](#credits)
* [Project Insight](#project-insight)
* [Questions](#questions)
* [License](#license)

## Description
This project was designed as a homework assignment for Rutgers Coding Boot Camp. We were challenged to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list using Express.js for routing, a MongoDB database, and the Mongoose ODM.

No starter code was provided for this assignment.

        User Story
        AS A social media startup
        I WANT an API for my social network that uses a NoSQL database
        SO THAT my website can handle large amounts of unstructured data

        Acceptance Criteria
        GIVEN a social network API
        WHEN I enter the command to invoke the application
        THEN my server is started and the Mongoose models are synced to the MongoDB database
        WHEN I open API GET routes in Insomnia for users and thoughts
        THEN the data for each of these routes is displayed in a formatted JSON
        WHEN I test API POST, PUT, and DELETE routes in Insomnia
        THEN I am able to successfully create, update, and delete users and thoughts in my database
        WHEN I test API POST and DELETE routes in Insomnia
        THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Walkthrough Videos
[User Routes](https://watch.screencastify.com/v/3CCsrEpltoGwEdov9H3j)  
[Friend Routes](https://watch.screencastify.com/v/srtCyjRh5zRqgvOmCOX2)  
[Thought Routes](https://watch.screencastify.com/v/MK5q4S2EGtMIyulhrMii)  
[Reaction Routes](https://watch.screencastify.com/v/4AVuDEeSaYCTb6QOYwcg)  

## Installation
**NOTE: You must have mongoDB installed locally before installing this repo.** </br>

1. Download ZIP or clone repo using terminal

2. From the root directory of the application run the following at the command line
```
    npm install
```
4. Start the server
```
    npm start
```
5. Open Insomnia Core to test API routes

## Tests
Testing the restful API calls was done with Insomnia Core. The following tests use a URL beginning with `localhost:3001/` followed by the corresponding API call. </br></br>

(You can also view to the walkthrough videos for reference) 

---
**`/api/users`**
* `GET` all users
* `POST` a new user:
    ```json
    // example data
    {
        "username": "lernantino",
        "email": "lernantino@gmail.com"
    }
    ```
---
**`/api/users/:userid`**
* `GET` a single user by its `_id` 
* `PUT` to update a user by its `_id`
* `DELETE` to remove user by its `_id`
---
**`/api/users/:userId/friends/:friendId`**
* `POST` to add a new friend to a user's friend list
* `DELETE` to remove a friend from a user's friend list
---
**`/api/thoughts`** 
* `GET` to get all thoughts
* `POST` to create a new thought
    ```json
    // example data
    {
    "thoughtText": "Here's a cool thought...",
    "username": "lernantino",
    "userId": "5edff358a0fcb779aa7b118b"
    }
    ```
---
**`/api/thoughts/:thoughtId`**
* `GET` to get a single thought by its `_id`
* `PUT` to update a thought by its `_id`
* `DELETE` to remove a thought by its `_id`
---
**`/api/thoughts/:thoughtId/reactions`**
* `POST` to create a reaction 
    ```json
    // example data
    {
    "reactionBody":"What a reaction!",
    "username":"lernantino"
    }
    ```
---
**`/api/thoughts/:thoughtId/reactions/:reactionId`**
* `DELETE` remove a reaction by the `reactionId` 

## Credits
[Express.js](https://expressjs.com/)

[MonogDB](https://www.mongodb.com/)

[Mongoose](https://mongoosejs.com/)

## Project Insight

## Questions
If you have any questions about this project contact me directly at warrenp11@gmail.com. 
  
Visit this project's repository at https://www.github.com/warrenp11/social-network-api

View more of my projects at https://www.github.com/warrenp11

## License
Licensed under the [MIT](./LICENSE.txt) license.