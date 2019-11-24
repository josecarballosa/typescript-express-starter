import dotenv from 'dotenv';
import http from 'http';

import app from './app';

dotenv.config();

const port = process.env.port || 3000;

const server = http.createServer(app);

server.on('listening', () => {
  console.log(`Server listening on port ${port} ...`);
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
server.on('error', (error: any) => {
  if (error.syscall === 'listen') {
    switch (error.code) {
      case 'EADDRINUSE':
        console.error(`Port ${port} is already in use`);
        process.exit(1);
      case 'EACCES':
        console.error(`Port ${port} requires elevated privileges`);
        process.exit(1);
    }
  }
  throw error;
});

server.listen(port);
