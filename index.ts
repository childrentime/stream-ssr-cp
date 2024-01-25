import http from 'http';
import fs from 'fs';

http.get('http://localhost:8787/webapp/vacations/custom/annualMemory?slide=5', (res) => {
  let chunkCount = 0;
  res.on('data', (chunk) => {
    console.log('Received a chunk of data:');
    chunkCount++;
    fs.writeFile(`chunk${chunkCount}.html`, chunk, (err) => {
      if (err) throw err;
      console.log(`The chunk ${chunkCount} was saved!`);
    });
  });

  res.on('end', () => {
    console.log('No more data.');
  });
});
