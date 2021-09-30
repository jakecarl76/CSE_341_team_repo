//TA03 PLACEHOLDER
const express = require('express');
const http = require('https');
const router = express.Router();

//url to use:
let url = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';

//create an obj to handel outbound http requests
let data_fetcher = {
  fetch_json: (url, cb_func) => {
    http.get(url, resp => {
      let body = '';

      //when data rx'ed, add to the body var
      resp.on('data',
        function (data_chunk) {
          body += data_chunk;
        });//end resp.on('data')
      
      //what to do when all data loaded
      resp.on('end', function() {
        let json_resp = JSON.parse(body);
        let data_obj = {data: json_resp};

        cb_func(data_obj.data);

      }).on('error', err => {console.log("Error: ", err);});//end on data loaded

    });//end http.get
  },//end fetch_json Func
};


router.get('/', (req, resp, next) => {
  data_fetcher.fetch_json( url, products => {
    resp.render('pages/ta03', {
      prods: products,
      title: 'week3',
      path: '/ta03'
    })
  });
});//END router.get()

router.post('/', (req, resp, next) => {
  data_fetcher.fetch_json( url, products => {
    //get search info from body
    let search_str = req.body.search_bar;
    let search_tags = search_str.toLowerCase().split(/\W/);
    let found_objs = products.filter(item => {
      let tag_match = false;
      for(tag of search_tags)
      {
        if(item.tags.find(item_tag => item_tag.toLowerCase() === tag))
        {
          tag_match = true;
        }
      }
      return tag_match;
    });//End filter products
    console.log(found_objs)
    console.log(search_tags);
    resp.render('pages/ta03', {
      prods: found_objs,
      title: 'week3',
      path: '/ta03'
    })
  });
});

module.exports = router;
