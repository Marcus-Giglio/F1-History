const express = require ('express')
const app = express()
const helmet = require ('helmet')
const cookieParser = require('cookie-parser')

const cors = require ('cors')


const dataDrivers = require('./data-drivers')

const PORT = 3000

app.use(helmet())
app.use(cors())
app.use(cookieParser())

app.get('/', (req, res)=>{
    res.status(201).send('server in funzione')
})

app.get('/data-drivers', (req, res)=>{
    res.status(200).send(dataDrivers())
})


// cookies test
function validateCookie(req, res, next){
    const { cookies } = req
    if ('session_id' in cookies){
        console.log('Session ID exists');
        if (cookies.session_id === '1234') next()    
        else res.status(403).send({ msg: 'Not authenticated'})
    }   else res.status(403).send({ msg: 'Not authenticated'})    
}

app.get('/protected', validateCookie, (req, res)=>{
    res.status(200).json({msg: 'You are authorized'})
})

app.get('/signin', (req, res)=>{
    res.cookie('session_id', '1234')
    res.status(200).json({msg: 'logged'})
})
//

app.listen(PORT, ()=>{
    console.log('in ascolto su ' + PORT);
})