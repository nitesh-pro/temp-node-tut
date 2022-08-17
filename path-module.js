const path = require("path")
console.log(path.sep)

const pathFile = path.join('/2-modules.js')
console.log(pathFile)

const base = path.basename(pathFile)
console.log(base)

const absolute = path.resolve(__dirname,'2-modules.js')
console.log(absolute)