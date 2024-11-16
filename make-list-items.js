// write a js function that increments <li>'s to 1000 as html
const fs = require('fs');

function generateListItems() {
  const writeStream = fs.createWriteStream('list-items.html');
  for (let i = 1; i <= 480000; i++) {
    writeStream.write(`<li>Item ${i}</li>\n`);
  }
  writeStream.end();
  console.log('List items written successfully to listItems.txt');
}

generateListItems();