# Disney Club
## User based content - REST API

We are going to create a user based platform where a user shall be able to register, log in create, read, update and delete posts and also be able to log out from the platform. You can read all posts but you should not be able to update or delete someone elses post. 

You can only create or read the users :) 

You can read all posts even if you are not logged in.

The user data will be based on its own resource, each users password has to be encrypted. All created, updated or deleted posts will be connected to MONGODB. 

Use server and client side code. (Back and Front end)

We decided to build a Disney clud fanpedia, where you can read, create, update and delete characters that you like or dislike. 

We have been using plain javascript, because we wanted to learn backend more. We use mongodb (database), nodemon to automaticlly get changes on save, bcrypt and cookie-session for the userpart (encrypt password and get which user is logged in and can put and delete posts.) Mongoose models, schemas and routes is used to make the backend easier to work with. Express is also used.

## What you need:
!! npm install !! usally works to install all listed below !! 

npm install express
npm install nodemon
npm install mongodb mongoose
npm install bcrypt or bcryptjs - you might need to install Pyhton if you get errors (windows)
npm install cookie-session

run npm run dev or nodemon server.js to start the application, then visit localhost:3000.

requirement G: 
Git & Github - yes
ReadME file - yes
In time - I guess yes
Two resources with CRUD - yes
Content is saved to MONGODB - yes.

GITHUB REPO: https://github.com/LouiseBackstrom/disney-club