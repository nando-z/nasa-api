# nasa-api

This project is an API built using Deno 2, Express.js 5, and gRPC to assist NASA in providing access to various data endpoints.

## Project Structure

```
nasa-api
├── src
│   ├── app.ts               # Entry point of the application
│   ├── controllers
│   │   └── index.ts        # Controller for handling API requests
│   ├── routes
│   │   └── index.ts        # Route definitions for the application
│   ├── grpc
│   │   └── server.ts       # gRPC server implementation
│   └── types
│       └── index.ts        # Type definitions for API requests and responses
├── deps.ts                 # Dependency imports and exports
├── deno.json               # Deno configuration file
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd nasa-api
   ```

2. **Install dependencies:**
   Ensure you have Deno installed. You can install dependencies by running:
   ```
   deno run --allow-net deps.ts
   ```

3. **Run the application:**
   Start the server with:
   ```
   deno run --allow-net src/app.ts
   ```

4. **Run the gRPC server:**
   Start the gRPC server with:
   ```
   deno run --allow-net src/grpc/server.ts
   ```

## Usage Guidelines

- The API provides various endpoints to access NASA data.
- Refer to the `src/routes/index.ts` for available routes and their corresponding functionalities.
- Use the defined types in `src/types/index.ts` for request and response structures.
- The gRPC server provides additional endpoints for accessing NASA data using gRPC protocol. Refer to `src/grpc/server.ts` for available services and methods.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.