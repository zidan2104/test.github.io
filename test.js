import express from 'express'
import fs from 'fs'

const app = express()
app.get('/',(req,res)=>{
res.send('lita')

})
app.listen(3200, ()=> {
console.log('server run')

})


const getdata =()=>{

    const data = fs.readFileSync('')
}