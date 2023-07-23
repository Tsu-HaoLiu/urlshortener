# URL Shortener
URL shortener

This is a simple URL shortener app built with Node.js, Express and MongoDB.

## Features

- Shorten long URLs
- View shortened URL links
- Redirect shortened URLs to original URLs
- View click counts for shortened URLs


## Usage

```
npm install
npm start
```

The app will be running on `http://localhost:3333`

## Shorten a URL

Send a POST request to /api/v1/short with a JSON body containing the long URL:
```
{
  "origUrl": "http://www.example.com/very/long/url" 
}
```
The API will return a JSON response containing the shortened URL:
```
{
  "shortUrl": "http://localhost:3333/abc123"
}
```

## Redirect Short URL

Accessing a short URL like http://localhost:3333/abc123 will redirect to the original long URL.

The click count for that shortened URL will also be incremented in the database.

## Built With

- Node.js - JavaScript runtime
- Express - Web framework for Node.js
- MongoDB - NoSQL database

