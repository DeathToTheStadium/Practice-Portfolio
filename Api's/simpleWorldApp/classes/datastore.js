const { Console } = require('console')
const fs = require('fs')
const path = require('path')
const newPath  = path.resolve(__dirname,'../datastore')
class DataStore {
    constructor(){
        this.Data = {}
    }
    constructData(){
        fs.promises.readdir(newPath).then(dir=>{
            console.log('this did load ')
            for (var i=0;i < dir.length;i++){
                this.Data[dir[i].replace('.js','')] = require(`../datastore/${dir[i]}`)
            }
            // this.Data[dir] = require(`./datastore/${dir}`)
        }).catch((err)=>{
            console.log(err)
            err ? "oops something went wrong?": "it is working"
        })
        return this.Data
    }
}

const data = new DataStore()
data.constructData()
module.exports = data