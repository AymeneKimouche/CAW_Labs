const fs = require('fs');

const fileName = process.argv[2];
const textToAdd = process.argv[3];

fs.writeFile(fileName, textToAdd, (err) => {
  if (err) throw err;
  console.log('The file has been saved');
  
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File contents:');
    console.log(data);
  });
});
