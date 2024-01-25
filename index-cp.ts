import http from 'http';
import fs from 'fs';
import { AsyncLocalStorage } from "node:async_hooks";

const asyncLocalStorage = new AsyncLocalStorage();

http.get('http://localhost:3000/', (res) => {
  let chunkCount = 0;
  res.on('data', (chunk) => {
    console.log('Received a chunk of data:');
    chunkCount++;

    asyncLocalStorage.run(chunkCount, () => {
      fs.writeFile(`stream-chunk${asyncLocalStorage.getStore()}.html`, chunk, (err) => {
        if (err) throw err;
        console.log(`The chunk ${asyncLocalStorage.getStore()} was saved!`);
      });
    });
  });

  res.on('end', () => {
    console.log('No more data.');
  });
});
