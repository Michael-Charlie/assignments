Intro to REST API architecture

- REST - Representational State Transfer

- Resource - Single item (object) in a database
  /user

- Collection - A collection of similar items in a database
  /users

- Base (root) URL - http://amazon.com/ for example

- API Endpoint - http://amazon.com/movies for example (movies being the endpoint)

- Parameters - /movies/:movieId

- Query (query string) - /movies?genre=action&year=1999 (query string starts with ? then gives key value pair, can filter more by separating the query by &)

- Client - Frontend

- Server - Intermediary - receives the request from the client and then performs the action. Passing to an API (talk to database) or other serverside rendering

- Request Method - CRUD - GET POST PUT DELETE

- UUID - creates unique IDs
  - npm install uuid
