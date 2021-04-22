const { readdirSync } = require('fs')
const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
const dbDirs=getDirectories('./lib/db')
const DbFolders=dbDirs.reduce((acc,dir)=>{
  let value=require('./'+dir).default
  if(typeof value ==='function'){
    value=value();
  }
  acc[dir]= value
  return acc;
},{})
export default {
  ...DbFolders
}
