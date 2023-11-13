
# Web Service & RESTful API for ToDoList Application With Express & MongoDB

Project ini dibuat untuk memenuhi tugas BACK END WEB DEV STAGE

## Authors

- [@nayasuna](https://github.com/nayasuna/todolistExpressMongoose)


## Installation

Installation in my project

```bash
  npm i express
  npm i -D nodemon
  npm install mongoose
  npm install cors
  npm install dotenv
  npm install jsonwebtoken
  npm install bcrypt
```
    
## API Reference

#### Get all users

```http
  GET localhost:3000/users
```

#### Get userById

```http
  GET localhost:3000/users/verifyToken/${id}
```

#### Get All Todos

```http
  GET localhost:3000/todos
```

#### auth regis

```http
  POST localhost:3000/auth/regis
 ``` 
#### auth login

```http
  POST localhost:3000/auth/login
 ``` 

 #### update user by id

```http
 PUT localhost:3000/users/6551490be29f6a1e33c33bce
 ``` 


Diatas beberapa contoh endpoint yang dapat digunakan.


## Deployment

https://jade-weary-foal.cyclic.app/
