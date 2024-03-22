# api-rest
express js api rest

|**HTTP Method**|**CRUD** |**Collection Resource (e.g. /users)**|**Single Resouce (e.g. /users/123)**|
|--|--|--|--|
|**POST**|**C**reate|201 (Created), ‘Location’ header with link to /users/{id} containing new ID | Avoid using POST on a single resource |
|**GET**|**R**ead| 200 (OK), list of users. Use pagination, sorting, and filtering to navigate big lists | 200 (OK), single user. 404 (Not Found), if ID not found or invalid |
|**PUT**|**U**pdate/Replace|405 (Method not allowed), unless you want to update every resource in the entire collection of resource | 200 (OK) or 204 (No Content). Use 404 (Not Found), if ID is not found or invalid |
|**PATCH**|Partial Update/Modify| 405 (Method not allowed), unless you want to modify the collection itself | 200 (OK) or 204 (No Content). Use 404 (Not Found), if ID is not found or invalid
|**DELETE**|**D**elete| 405 (Method not allowed), unless you want to delete the whole collection — use with caution | 200 (OK). 404 (Not Found), if ID not found or invalid|


- HTTP POST http://localhost:3000/api
- HTTP GET http://localhost:3000/api
- HTTP GET http://localhost:3000/api/1
- HTTP PUT http://localhost:3000/api/1
- HTTP PATCH http://localhost:3000/api/1
- HTTP DELETE http://localhost:3000/api
- HTTP DELETE http://localhost:3000/api/1
