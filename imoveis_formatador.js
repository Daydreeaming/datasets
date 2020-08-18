const fs = require("fs");

const csvParser = require('csv-parser');

const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const stream = fs.createReadStream("house.csv")