//os, module that holds the os data of the user
 //regardless of platform
 const os = require('os');

 //info about current user
 const user = os.userInfo();

 //method returns the system uptime in seconds
 console.log(user);
 console.log(`the system uptime is ${os.uptime()} seconds`);

 const currentOS = {
     name: os.type(),
     release: os.release(),
     totalMem: os.totalmem(),
     freeMem: os.freemem()
 }
console.log(currentOS);