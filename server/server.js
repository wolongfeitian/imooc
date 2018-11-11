const express = require('express')
const mongoose = require('mongoose')

//连接mongodb，并且使用mytest这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/mytest'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongodb连接成功')
})

// 类似于mysql的表，mongodb有文档\字段概念
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))
//新增数据
/*User.create({
    user:'xiaohua',
    age:12
},function(err, doc){
    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }
})*/


//删除
/*User.remove({age:18},function(err,doc){
    console.log(doc)
})*/

//更新
/*User.update({'name':'xiaoming'},{'$set':{age:26}},function(err, doc){
    console.log(doc)
})*/

const app = express()

app.get('/',function(req,res){
    res.send('<h1>Hello World211</h1>')
})

app.get('/data',function(req,res){
    console.log(22222)
  /*User.find({},function(err, doc){
      return res.json(doc)
  })*/

  User.find({user:'xiaohua'},function(err, doc){
        return res.json(doc)
  })
})

app.listen(9091,function(){
    console.log('Node start port 9093')
})
