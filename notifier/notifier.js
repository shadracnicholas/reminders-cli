const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 9000;

// parse application/json
app.use(bodyParser.json())

app.get('/health', (req, res) => res.status(200).send());

app.listen(port, () => console.log(`Server is running on port: ${port}`));
