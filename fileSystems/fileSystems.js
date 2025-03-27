// access to directory and file name the current script is in
console.log(__dirname);
console.log(__filename);

const fs = require("fs");

// read files asynchronously
const read1 = fs.readFile(
  "./fileSystems/testFile.txt",
  "utf-8",
  (err, data) => {
    if (err) {
      console.error(err);
    }
    // will be executed once the async operation is complete
  }
);

// would return undefined due to async behavior
console.log(`read1: ${read1}`);

// can readfile synchronously
const read2 = fs.readFileSync("./fileSystems/testFile.txt", "utf-8");
console.log(`read2: ${read2}`);

// write files asynchronously
const write1 = fs.writeFile(
  "./fileSystems/testFile.txt",
  "\nFirst Added content",
  { flag: "a" },
  (err) => {
    if (err) {
      console.error(err);
    }
  }
);

console.log(`async write: ${write1}`);

// writes files synchronously
const write2 = fs.writeFileSync(
  "./fileSystems/testFile.txt",
  "\nSecond Added content",
  {
    flag: "a",
  }
);

console.log(`sync write: ${write2}`);

// directories files
// create directory asynchronously
fs.mkdir("./filesystems/async_dir", (err) => {
  if (err) {
    console.error(err);
  }
  // will executed asynchronously
});

// create directory synchronously
fs.mkdirSync("./filesystems/synchronous_dir");

// check if directory exists
if (
  fs.existsSync("./fileSystems/synchronous_dir") ||
  fs.existsSync("./fileSystems/async_dir")
) {
  console.log("file already exists!");

  fs.rmdirSync("./fileSystems/synchronous_dir");
  fs.rmdirSync("./fileSystems/async_dir");
  console.log("deleted directories");
}

// delete files
fs.unlink("./fileSystems/testFile.txt", (err) => {
  if (err) {
    return err;
  }
  // will execute asynchronously
});
