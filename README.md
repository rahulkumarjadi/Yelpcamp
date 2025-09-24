# YelpCamp

elpCamp is a full-stack web application I created that is inspired by Yelp, but specifically for campsites. Users can browse, create, and review campgrounds from around the world, complete with images, ratings.

## Live Demo
[https://yelpcamp-app-velf.onrender.com]

## Screenshots
Click to expand screenshots:
[![Screenshot 1](images/Screenshot%20%2836%29.png)](images/Screenshot%20%2836%29.png)
[![Screenshot 2](images/Screenshot%20%2837%29.png)](images/Screenshot%20%2837%29.png)
[![Screenshot 3](images/Screenshot%20%2842%29.png)](images/Screenshot%20%2842%29.png)


## Features

- **User Authentication:** Secure user registration and login using Passport.js.
- **CRUD Functionality:** Users can Create, Read, Update, and Delete campgrounds.
- **Authorization:** Users can only edit or delete the campgrounds and reviews they have created.
- **Image Uploads:** Image uploads are handled using Multer and stored on the Cloudinary cloud service.
- **Reviews & Ratings:** Authenticated users can add and delete reviews for campgrounds, including a star rating.
- **Dynamic UI & Feedback:** Flash messages provide feedback to the user after actions (e.g., "Successfully created campground!").
- **Responsive Design:** The application is fully responsive and built with the Bootstrap framework.

## Tech Stack

**Frontend:**
- EJS (Embedded JavaScript templates)
- Bootstrap 5
- MapTiler SDK JS

**Backend:**
- Node.js
- Express.js
- Mongoose (ODM for MongoDB)
- Passport.js (for authentication)
- Multer (for image uploads)
- Cloudinary API (for image storage)

**Database:**
- MongoDB (hosted on MongoDB Atlas)

**Deployment:**
- Rnder

## Getting Started

### Prerequisites
- Node.js and npm installed
- A local or cloud-based MongoDB instance (e.g., from MongoDB Atlas)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rahulkumarjadi/Yelpcamp
cd YelpCamp
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
# MongoDB Atlas Connection String
DB_URL=mongodb+srv://<user>:<password>@cluster.../yelp-camp?retryWrites=true&w=majority

# Cloudinary Credentials
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret


# A secret for Express Session
SECRET=useyourownsecretsessionkey

```

## Running the Application

## Development with Automatic Restarts

To run the application in development mode with automatic restarts (requires `nodemon`):

```bash
npm install -g nodemon
nodemon app.js
```

## Environment Variables Setup

You'll need to set up accounts and get API keys for the following services:

1. **MongoDB Atlas** - For database hosting
2. **Cloudinary** - For image storage and management
4. **Unsplash** (Optional) - For seeding sample campground images

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

