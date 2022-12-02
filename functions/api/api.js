const express =  require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const app = express();
const router = express.Router();
const fs = require('fs');
app.use(cors())

router.get('/', cors(), (req, res) => {
    res.json(JSON.parse(fs.readFileSync("data.json")));
})

app.use('/', router);
module.exports.handler = serverless(app);