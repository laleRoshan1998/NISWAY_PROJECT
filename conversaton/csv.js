const CSVToJSON = require('csvtojson');
const fs = require('fs')

CSVToJSON().fromFile('salary_data.csv')
    .then(users => {
        fs.writeFile('users.json', JSON.stringify(users, null, 4), (err) => {
            if (err) {
                throw err;
            }
        });
    }).catch(err => {
        // log error if any
        // console.log(err);
    });
module.exports=CSVToJSON