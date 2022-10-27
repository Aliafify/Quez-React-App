const express = require('express')
const bodyParser = require('body-parser');
const questionRoute = require('./questions.js')
// const cors = require('cors')
const app =express();

// const cors = require("cors");
// app.use(cors());

app.use(bodyParser.json());
app.use('/api',questionRoute);

// app.use('/', proxy(
//     'http://localhost:3000', // replace this with 'http://127.0.0.1:3000'
//     { proxyReqPathResolver: (req) => `http://localhost:3000${req.url}` }
// ));

const PORT =process.env.PORT||8080; 
app.listen(8088,()=>{ 
    console.log('server runing on port'+PORT);
}) 
   