# Flash Sale System

A high-performance backend system for managing flash sale events with real-time inventory tracking.

## Features

- Real-time inventory management
- Time-based flash sale activation
- Purchase validation and tracking
- Chronological leaderboard
- Concurrency control to prevent overselling

# Key Technical Features

# 1. Concurrency Control & Race Condition Handling

The most critical part of this system is handling multiple purchase attempts simultaneously without overselling. I've implemented this using:

MongoDB transactions - To ensure all related database operations (inventory decrease + purchase record) succeed or fail together
Optimistic concurrency control - Using findOneAndUpdate with a condition for available inventory
Atomic operations - Using $inc operator to decrease inventory in an atomic operation

# 2. Performance Considerations

To ensure the system handles high loads efficiently:

Database indexes - Created specific indexes on critical fields for fast queries
Minimized database operations - Reduced round trips to the database
Proper MongoDB connection options - Used write concerns appropriate for data consistency
Rate limiting - Added basic protection against API abuse

# 3. Time-Based Sale Activation

Sales have a startTime field that's checked before allowing purchases
The checkActive() method validates both timing and inventory constraints
Sale automatically deactivates when inventory reaches zero

# 4. Security Implementation

JWT Authentication - Secures routes that require user identity
Purchase validation - Prevents users from purchasing multiple times from the same sale
Input validation - Checks for valid quantities and other parameters

# 5. Leaderboard Implementation

Purchases are stored with timestamps and sorted chronologically
Efficient querying through proper indexing
Data populated with minimal user information for privacy

# Testing The System

To test this implementation:

1. Start by registering a few test users
2. Create a product to be sold in the flash sale
3. Create a sale event with a start time
4. Activate the sale when it's time
5. Make purchase attempts from different users
6. Check the leaderboard to see the purchase order

# How to Run This Project

1. Clone the repository
2. Install dependencies with `bash npm install`
3. Create a .env file with:

```bash
touch .env

# Add the following environment variables to your .env file
echo "PORT=5000" >> .env
echo "MONGO_URI=mongodb://localhost:27017/flash-sale" >> .env
echo "JWT_SECRET=your_secret_key" >> .env
echo "NODE_ENV=development" >> .env
```

4. Start MongoDB (locally or use MongoDB Atlas)
5. Run with `bash npm start` or `bash npm run start:dev` for development mode

# ⚠️ IMPORTANT NOTE:

For the purpose of this development/assessment, sales must be activated manually via the API.

In a real-world production environment, sales would be activated automatically based on the configured start time. This could be implemented using node-cron or a similar task scheduler to periodically check for pending sales and update their status accordingly.

# API Documentation

1. Enter `bash http://localhost:5000/api-doc` this will download a json file.
2. Go to add postman or insomnia api client
3. Click on import
4. select file and choose the downloaded file.
   This will add the documentation on your workspace
