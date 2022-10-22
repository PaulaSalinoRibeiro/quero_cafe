const express = require('express');
require('dotenv').config();

const port = process.env.PORT || 800

app = express();

app.listen(process.env.PORT, () => `server is listening on port ${port}`)