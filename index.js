const { log, dir } = require('console');
const path = require ('path');
function getCurrentFile(){
     console.log({
    File: __filename,
    Dir: __dirname,
  });
}
getCurrentFile();

//------------------------------------------------------

function getFileName(filepath){
    console.log( path.basename(filepath));
     //path.basename(filepath);
}
getFileName('/user/files/report.pdf');
//------------------------------------------------------

function buildPath(obj) {
    return path.join(obj.dir,obj.name + obj.ext);
}
console.log(buildPath({
    dir:"/folder",
    name:"app",
    ext:".js",
   })
);


function getFileExt(filepath){
  console.log(path.extname(filepath));
  
}
getFileExt('/docs/readme.md');

//------------------------------------------------------

function parsePath(filepath) {
    //console.log(path.parse(filepath));
    const parsed = path.parse(filepath);
    return{
        Name: parsed.name,
        Ext: parsed.ext
    }
}
console.log(parsePath('/home/app/main.js'));

//------------------------------------------------------
 
function isAbsolute(pathName) {
   return path.isAbsolute(pathName);  
}
console.log(isAbsolute('/home/user/file.txt'));
//------------------------------------------------------

function joinSegments(...segments) {
  return path.join(...segments);
}
console.log(
  joinSegments("src", "components", "App.js")
);
//------------------------------------------------------

function resolvePath(relativePath) {
  return path.resolve(relativePath);
}

console.log(resolvePath("./index.js"));

//------------------------------------------------------

function joinTwoPaths(path1, path2) {
  return path.join(path1, path2);
}

console.log(joinTwoPaths("/folder1", "folder2/file.txt")
);
//------------------------------------------------------
const fs = require('fs');

// function deleteFile(filepath) {
//      fs.unlink(filepath,(err)=>{
//         if (err) {
//             console.log(err.message);
//             return ;
//         } 
//         console.log(`${filepath}: is deleted.`);
        
//     });
// } 
// deleteFile('./esraa.txt');

//------------------------------------------------------
// function createFolder(foldername) {
//     fs.mkdirSync(foldername);
//     console.log("Success!");
    
// }
// createFolder('New');

//------------------------------------------------------
const EventEmitter = require('events');
const { start } = require('repl');
const emitter = new EventEmitter();
emitter.on('start',()=>{
   console.log("Welcome event triggered!");
   
});
emitter.emit('start');
//------------------------------------------------------
emitter.on("login", (username) => {
  console.log(`User logged in: ${username}`);
});

emitter.emit('login','Asmaa');
//------------------------------------------------------

function readFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  return content;
  
}
console.log(`the file content =>`,readFile("notes.txt"));
//------------------------------------------------------
// function writeFile(filePath, content) {
//   fs.writeFile(filePath, content, (err) => {
//     if (err) {
//       console.log(err.message);
//       return;
//     }

//     console.log("File saved successfully!");
//   });
// }

// writeFile("./async.txt", "Async save");

//------------------------------------------------------

function exists(pathName) {
  return fs.existsSync(pathName);
}

console.log(exists("./notes.txt"));
//------------------------------------------------------
const os = require("os");

function getOSInfo() {
  return {
    Platform: os.platform(),
    Arch: os.arch(),
  };
}

console.log(getOSInfo());
//------------------------------------------------------
const stream = fs.createReadStream("big.txt", {
  encoding: "utf8",
});

stream.on("data", (chunk) => {
  console.log(chunk);
});
//------------------------------------------------------
const readStream = fs.createReadStream("big.txt");

const writeStream = fs.createWriteStream("dest.txt");

readStream.pipe(writeStream);

writeStream.on("finish", () => {
  console.log("File copied using streams");
});
//------------------------------------------------------
const zlib = require("zlib");
const { pipeline } = require("stream");

pipeline(
  fs.createReadStream("big.txt"),
  zlib.createGzip(),
  fs.createWriteStream("data.txt.gz"),
  (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("File compressed successfully");
  }
);

//------------------------------------------------------

