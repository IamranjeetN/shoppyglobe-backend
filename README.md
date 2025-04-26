📚 ShoppyGlobe - Backend API
Welcome to the ShoppyGlobe backend!
This is a simple e-commerce API built with Node.js, Express.js, and MongoDB.

📋 Features
User Registration and Login with JWT Authentication

Products CRUD (Create, Read, Update, Delete)

Cart Management (Add, Update, Remove items)

API testing using Thunder Client

MongoDB database integration

Error handling middleware

Secure API with protected routes

⚙️ Technologies Used
Node.js

Express.js

MongoDB + Mongoose

JWT (JSON Web Tokens)

bcryptjs for password encryption

Thunder Client (for API Testing)

🚀 Getting Started
1. Clone the repository

git clone https://github.com/IamranjeetN/shoppyglobe-backend.git
cd your-repo-name

2. Install dependencies
npm install

3. Setup Environment Variables
Create a .env file in the root folder:
PORT=5000
MONGO_URI=mongodb://localhost:27017/shoppyglobe
JWT_SECRET=ranjeet123

4. Start the Server
npm run dev
✅ Server will start at http://localhost:5000

📚 API Endpoints

Method	Endpoint	Description	Access
POST	/api/auth/register	Register new user	Public
POST	/api/auth/login	Login user & get token	Public
GET	/api/products	Get all products	Public
GET	/api/products/:id	Get product by ID	Public
PUT	/api/products/:id	Update a product	Private
DELETE	/api/products/:id	Delete a product	Private
POST	/api/cart	Add product to cart	Private
GET	/api/cart	Get user's cart	Private
DELETE	/api/cart/:productId	Remove product from cart	Private
📸 API Testing Screenshots
All API testings were done using Thunder Client inside VS Code.
Screenshots are available in the /screenshots folder.

User Registration ✅

User Login ✅

Get All Products ✅

Get Single Product ✅

Update Product ✅

Delete Product ✅

Add To Cart ✅

Get Cart ✅

Remove from Cart ✅

🤝 Contributing
Feel free to fork this project and make improvements!
Pull requests are warmly welcome.

📜 License
This project is open-source and available under the MIT License.

✨ Thank you for checking out ShoppyGlobe! ✨
