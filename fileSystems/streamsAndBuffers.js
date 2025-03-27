// streams and buffers to work with larger files
const fs = require("fs");

// read stream
const readStream = fs.createReadStream("./fileSystems/testfile1.txt", {
  encoding: "utf-8",
});
// write stream
const writeStream = fs.createWriteStream("./fileSystems/newStream1.txt");

readStream.on("data", (chunk) => {
  // chunks will be shown continuously
  console.log(chunk);
  // write some stream
  writeStream.write(`\nNEW CHUNK\n`);
  writeStream.write(chunk);
});

// Piping
// allows piping of write streams to the readstream with less code
const writeStream2 = fs.createWriteStream("./fileSystems/newStream2.txt");
// uses the existing read stream and piping the writeStream for convenience
readStream.pipe(writeStream2);
