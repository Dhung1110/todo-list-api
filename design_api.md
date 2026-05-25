# Todo List API Design

## Overview
- **Tech stack**: Node.js (v20), Express, MongoDB (via Mongoose)
- **Authentication**: None (public API for now, can be extended later)

## Data Model
```json
{
  "title": "string",       // required, short description
  "description": "string", // optional, longer details
  "completed": "boolean", // default false
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

## Endpoints
| Method | Path | Description |
|--------|------|-------------|
| `POST`   | `/todos`            | Create a new todo item |
| `GET`    | `/todos`            | List all todo items (optional pagination) |
| `GET`    | `/todos/:id`        | Get a single todo by ID |
| `PUT`    | `/todos/:id`        | Update a todo (title/description/completed) |
| `DELETE` | `/todos/:id`        | Delete a todo |

## Error Handling
- Return **400** for validation errors
- Return **404** if todo not found
- Return **500** for unexpected server errors

## Future Extensions
- Add JWT authentication
- Add user ownership of todos
- Add filtering/sorting
