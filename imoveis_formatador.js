const csvParser = require('csv-parser');

const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: 'house_out.csv',
    header: [
        {}
        {}
    ]
})
