# social-network-api


TODO LIST: 
- [x] Install Express, Mongoose

- [x] Connect to server

- [x] User Model
- [x] User Controllers
- [] User Routes 
    -[x] (/api/users)
        - [x] GET all users
        - [x] GET single user by _id
        - [x] POST new user
            // example data
                {
                "username": "lernantino",
                "email": "lernantino@gmail.com"
                }
        - [x] PUT update a user by _id
        - [x] DELETE user by _id
        - [] BONUS: remove user's associated thoughts when deleted
    -[] (/api/users/:userId/friends/:friendId)
        - [] POST add new friend to user's friend list
        - [] DELETE remove friend from user's friend list

- [x] Thought Model
- [x] Reaction (Schema Only)
- [x] dateFormat
- [x] Thought Controllers
- [] Thought Routes
    - [] (/api/thoughts)
        - [] GET all thoughts
        - [] GET single thought by _id
        - [] POST create new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
            // example data
                {
                "thoughtText": "Here's a cool thought...",
                "username": "lernantino",
                "userId": "5edff358a0fcb779aa7b118b"
                }
        - [] PUT update thought by _id
        - [] DELETE remove thought by _id
    - [] (/api/thoughts/:thoughtId/reactions)
        - [] POST create reaction stored in single thought's reaction array field
        - [] DELETE pull and remove a reaction by the reaction's reactionId value