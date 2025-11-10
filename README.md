# Zerodha Clone

A full-stack trading platform clone inspired by Zerodha, built with React, Node.js, Express, and MongoDB.

## Project Structure

This project consists of three main parts:

- **Backend** - Express.js API server with MongoDB
- **Frontend** - React landing/marketing website
- **Dashboard** - React trading dashboard application

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Setup Instructions

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
PORT=3002
MONGO_URL=mongodb://localhost:27017/zerodha-clone
```

Or use MongoDB Atlas:
```env
PORT=3002
MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/zerodha-clone
```

Start the backend server:
```bash
npm start
```

The backend will run on `http://localhost:3002`

### 2. Frontend Setup

```bash
cd frontend
npm install
npm start
```

The frontend will run on `http://localhost:3000`

### 3. Dashboard Setup

```bash
cd dashboard
npm install
npm start
```

The dashboard will run on `http://localhost:3001`

## Features

- **Holdings Management** - View and manage stock holdings
- **Positions Tracking** - Track current positions
- **Order Placement** - Place buy/sell orders
- **Real-time Updates** - Live portfolio updates
- **Responsive Design** - Works on desktop and mobile

## API Endpoints

### GET Endpoints
- `GET /allHoldings` - Fetch all holdings
- `GET /allPositions` - Fetch all positions

### POST Endpoints
- `POST /newOrder` - Create a new order

## Technologies Used

### Backend
- Express.js
- MongoDB & Mongoose
- CORS
- dotenv
- body-parser

### Frontend & Dashboard
- React 19
- React Router DOM
- Material-UI (Dashboard)
- Bootstrap (Frontend)
- Chart.js (Dashboard)
- Axios

## Development

To run all services concurrently, open three terminal windows:

Terminal 1 (Backend):
```bash
cd backend && npm start
```

Terminal 2 (Frontend):
```bash
cd frontend && npm start
```

Terminal 3 (Dashboard):
```bash
cd dashboard && npm start
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is for educational purposes only.

## Author

Saif Sanadi
