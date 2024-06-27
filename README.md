- Built with Node.js and Express
- Javascript
- Mongoose ODM

## Setup and running

- Clone this repository and run `npm install` in the terminal
- After that run `npm run dev`
- The server will be up and running

## Express Router and Routes

| Route               | HTTP Verb | Description                          |
| --------------------| --------- | ------------------------------------ |
| /api/users          | POST      | To create a new user                 |
| /api/users          | GET       | To List all users                    |
| /api/users/:id      | GET       | Get detials of a user                |
| /api/users/:id      | PUT       | Update details of a single user      |
| /api/users/:id      | DELETE    | Deletes a user                       |

## Usage
The use of endpoints is very simple, previously you could see a table of endpoints that you can call, if you need to create a note or log in, here we have some examples.

### Registration **user** - `POST` `/api/users`:
Request Body:
```json
    {
      "id": 2,
      "first_name": "Josephine",
      "last_name": "Darakjy",
      "company_name": "Chanay, Jeffrey A Esq",
      "city": "Brighton",
      "state": "MI",
      "zip": 48116,
      "email": "josephine_darakjy@darakjy.org",
      "web": "http://www.chanayjeffreyaesq.com",
      "age": 48
    }
```
Response: 
`Status Code: 201`
```json
       {}
```

### Fetch **users** - `GET` `/api/users`:
Response:
`Status Code: 200`
```json
    [
      {
        "id": 1,
        "first_name": "James",
        "last_name": "Butt",
        "company_name": "Benton, John B Jr",
        "city": "New Orleans",
        "state": "LA",
        "zip": 70116,
        "email": "jbutt@gmail.com",
        "web": "http://www.bentonjohnbjr.com",
        "age": 70
      },
      {
        "id": 2,
        "first_name": "Josephine",
        "last_name": "Darakjy",
        "company_name": "Chanay, Jeffrey A Esq",
        "city": "Brighton",
        "state": "MI",
        "zip": 48116,
        "email": "josephine_darakjy@darakjy.org",
        "web": "http://www.chanayjeffreyaesq.com",
        "age": 48
      }
    ]
```

Sample Query: `/api/users?page=1&limit=10&search=James&sort=-age` <br>
This endpoint should return list of 10 users whose first name or last name contains substring given name and sort the users by age in descending order of page 1.

### Fetch **user** - `GET` `/api/users/:id`:
Here `{id}` would be the user ID in path parameter
Response:
`Status Code: 200`
```json
    {
      "id": 1,
      "first_name": "James",
      "last_name": "Butt",
      "company_name": "Benton, John B Jr",
      "city": "New Orleans",
      "state": "LA",
      "zip": 70116,
      "email": "jbutt@gmail.com",
      "web": "http://www.bentonjohnbjr.com",
      "age": 70
    }
```

### Update **user** - `PUT` `/api/users/:id`:
Here `{id}` would be the user ID in path parameter
Request Body:
 ```json
       {
         "first_name": "Josephine",
         "last_name": "Darakjy",
         "age": 48
       }
 ```
Response:
`Status Code: 200`
```json
  {}
```

### Delete **user** - `DELETE` `/api/users/:id`:
Here `{id}` would be the user ID in path parameter
Response:
`Status Code: 204`

## Questions

1. How long did it take you to complete this assignment? - Approximately 2 Hours

2. What about this assignment did you find most challenging? - Nothing

3. What about this assignment did you find unclear? - Nothing

4. What challenges did you face that you did not expect? - None

5. Do you feel like this assignment has an appropriate level of difficulty? - Yes

6. Briefly explain your decisions to use tools, frameworks and libraries like fastapi, DRF etc. - None used

7. Did you make certain assumptions and decisions around the application? Please elaborate on your reasonings. - I assumed that not every user would have a company name and web id so I kept those fields as optional in the user schema
