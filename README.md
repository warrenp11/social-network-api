# social-network-api


TODO LIST: 
- [x] Install Express, Mongoose

- [x] Connect to server

- [x] User Model
- [x] User Controllers
- [x] User Routes

- [] Thought Model
- [] Thought Controllers
- [] Thought Routes

- [] Models
    - [] User model { username, email, thoughts, friends }
        - [] Schema settings: Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
    - [] Thought model { thoughtText, createdAt, username (user that created this thought), reactions }
        - [] Schema settings: Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
    - [] Reaction (SCHEMA ONLY) { reactionId, reactionBody, username, createdAt }
        - [] Schema settings: This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

- [] Controllers

- [] Routes
