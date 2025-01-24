import express from 'express';
import { setRoutes } from './routes/index.ts';
import { startGrpcServer } from './grpc/server.ts';

const app = express();
const PORT = Deno.env.get('PORT') || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setRoutes(app);

// Start the gRPC server
startGrpcServer();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});