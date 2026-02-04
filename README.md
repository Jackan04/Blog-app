# Blog App

Full-stack blog application built with Node.js, Express and MongoDB. Users can create, read, edit, and delete blog posts.

## Features

- Create and publish blog posts
- View all posts or individual post details
- Edit and delete posts
- Simple, unobtrusive and responsive UI

## Tech Stack & Tools

- **Backend:** Node.js with Express
- **Database:** MongoDB with Mongoose
- **Frontend:** EJS templates
- **Logging:** Morgan
- **Utilities:** Lodash, Dotenv

## Prerequisites

Before you begin, you'll need a MongoDB database:

1. **Create a MongoDB Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for a free account
2. **Create a Cluster**
   - Click "Create a Deployment" and select the free tier
   - Choose your preferred cloud provider and region
   - Wait for the cluster to be deployed (around 5-10 minutes)

3. **Get Your Connection String**
   - Click "Connect" on your cluster
   - Choose "Drivers"
   - _Copy_ and _save_ the connection string (replace `<db_password>` with your actual password)

4. **Add Your IP Address**
   - In MongoDB Atlas, go to "Network Access"
   - Click "Add IP Address" and add your current adress. Should appear a button at the top of the page.

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with your MongoDB URI:
   ```
   MONGODB_URI=
   ```
4. Start the server:
   ```
   node app.js
   ```
5. Visit `http://localhost:3000` in your browser

## Project Structure

- `controllers/` - Routing
- `models/` - MongoDB schema
- `routes/` - Endpoints
- `views/` - EJS templates
- `services/` - Database connection
- `public/` - Static assets
