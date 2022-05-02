const http = require('http');
var crypto = require('crypto');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
});

// Defining algorithm
const algorithm = 'aes-256-gcm';
// Defining key
const key = crypto.randomBytes(32);
// Defining iv
const iv = crypto.randomBytes(16);

function encrypt(text) {
    // Creating Cipheriv with its parameter
    let cipher = crypto.createCipheriv(
         'aes-256-gcm', Buffer.from(key), iv);
    
    // Updating text
    let encrypted = cipher.update(text);
    
    // Using concatenation
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    
    // Returning iv and encrypted data
    return  { iv: iv.toString('hex'),
       encryptedData: encrypted.toString('hex') };    
}

// Displays output
var output = encrypt("asdasdasdqwdqwdqwdd");
console.log(output);
decrypt(output)

function decrypt(output){
    // console.log(output.iv)
    // console.log(output.encryptedData)
    // let encryptedData =;

    let cipher = crypto.createCipheriv(
        'aes-256-gcm', Buffer.from(key), iv);
    
    let decrypted = cipher.update(output.encryptedData, 'hex', 'utf8');
    console.log(decrypted)

}




















// var mystr = mykey.update('abc', 'utf8', 'hex')
// mystr += mykey.final('hex');

// console.log(mystr); //34feb914c099df25794bf9ccb85bea72

// var mykey = crypto.createDecipher('aes-256-gcm', 'mypassword');
// var mystr = mykey.update('34feb914c099df25794bf9ccb85bea72', 'hex', 'utf8')
// mystr += mykey.final('utf8');

// console.log(mystr); //abc