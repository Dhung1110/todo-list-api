# Todo List API

A simple Todo List REST API built with Node.js, Express, and MongoDB. It provides CRUD endpoints for managing todo items.

## Example Requests

- **Create Todo**
```bash
curl -X POST http://localhost:3000/todos \
  -H "Content-Type: application/json" \
  -d '{"title":"Buy milk","description":"2 liters"}'
```

- **Get All Todos**
```bash
curl http://localhost:3000/todos
```

- **Get Todo by ID**
```bash
curl http://localhost:3000/todos/<id>
```

- **Update Todo**
```bash
curl -X PUT http://localhost:3000/todos/<id> \
  -H "Content-Type: application/json" \
  -d '{"completed":true}'
```

- **Delete Todo**
```bash
curl -X DELETE http://localhost:3000/todos/<id>
```
