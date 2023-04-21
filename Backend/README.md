# Click Counter Backend

This is a simple backend server for a click counter application. It uses Express.js and MongoDB to store and retrieve the number of clicks.

## Getting Started

1. Make sure you have Node.js and MongoDB installed on your system.
2. Clone this repository and navigate to the `Backend` directory.
3. Run `npm install` to install the dependencies.
4. Create a `.env` file in the `Backend` directory with the following content:
MONGO_URI=<your_mongodb_connection_string> PORT=<your_desired_port_number>

5. Run `npm start` to start the server.

## API Endpoints

- `GET /clicks`: Returns the current number of clicks.
- `POST /clicks`: Increments the click count by 1.

## License

This project is licensed under the MIT License.