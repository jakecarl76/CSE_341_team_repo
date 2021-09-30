const request = require('request');
const url = "https://byui-cse.github.io/cse341-course/lesson03/items.json";

const fetchAll = cb_func => { 
  console.log('fetching');
  request({url: url,
           json: true},
           function(err, resp, body) {
             if(!err && resp.statusCode === 200)
             {
               cb_func(body);
             }
             else
             {
               console.log(err);
             }
           });
};

exports.fetchAll = fetchAll;