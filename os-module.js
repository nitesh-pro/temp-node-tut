// const os = require('os')

// // info about current user
// // const user = os.userInfo()
// // console.log(user)
// // console.log(os.cpus())

// const currentOS = {
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem()
// }
// console.log(currentOS);

var a = {},
b ={key:'b'},
c={key:'c'}

a[b]=123;
a[c]=456
console.log(a[b])