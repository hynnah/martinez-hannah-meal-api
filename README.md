# Campus Food Menu API

Just a simple REST API for a campus food menu, built with Express.js for our Integrative Programming class.

## Features
- Get all meals
- Get a single meal by ID
- Simple frontend (`index.html`) to view and search meals

## Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/meals` | Returns all meals |
| GET | `/api/meals/:id` | Returns a single meal by ID |

## Getting Started
```bash
npm init -y
npm install express
node server.js
