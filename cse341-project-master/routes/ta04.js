//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();

router.get('/', (req, resp, next) => {
  //init style and counter vars
  
  
  if( req.session.counter === undefined)
  {
    req.session.counter = 0;
    req.session.style = "light_mode";
  }

  resp.render('pages/ta04', {
    title: 'Team Activity 04',
    path: '/ta04', // For pug, EJS
    activeTA04: true, // For HBS
    contentCSS: true, // For HBS
    cur_count: req.session.counter,
    cur_style: req.session.style
  });
});

router.post('/change-style', (req, resp, next) => {
  //check radio selected
  let option = req.body.style;
  console.log("option: " + option)

  if(option === 'dark')
  {
    req.session.style = 'dark_mode';
  }
  else if(option === 'light')
  {
    req.session.style = 'light_mode';
    
  }
  else
  {
    req.session.style = req.body.bg_color;
  }

  resp.redirect('/ta04');
});

router.post('/counter', (req, resp, next) => {
  //check radio selected
  let option = req.body.count;
  console.log("option: " + option)

  if(option === 'up')
  {
    req.session.counter++;
  }
  else if(option === 'down')
  {
    req.session.counter--;
    
  }

  resp.redirect('/ta04');
});

router.get('/reset', (req, resp, next) => {
  req.session.destroy(err => {
    console.log(err);
    resp.redirect('/ta04');
  });//END DESTORY SESS
})

module.exports = router;
