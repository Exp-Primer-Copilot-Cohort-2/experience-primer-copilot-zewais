// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const moment = require('moment');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
