import { Server, ServerCredentials } from 'grpc';
import { loadSync } from '@grpc/proto-loader';
import { resolve } from 'path';

const PROTO_PATH = resolve('src/grpc/nasa.proto');
const packageDefinition = loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const grpcObject = grpc.loadPackageDefinition(packageDefinition);
const nasaPackage = grpcObject.nasa;

function getNasaData(call, callback) {
  // Implement your logic to fetch NASA data
  callback(null, { data: 'NASA data' });
}

export function startGrpcServer() {
  const server = new Server();
  server.addService(nasaPackage.NasaService.service, { getNasaData });
  server.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), () => {
    console.log('gRPC server running at http://0.0.0.0:50051');
    server.start();
  });
}
