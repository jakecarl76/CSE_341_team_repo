//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const user_arr = ['Peter', 'Joe', 'Glen'];


router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    user_arr: user_arr,
    msg: ''
  });
});

router.post('/addUser', (req, resp, next) => {
  const new_user = req.body.user_name;
  user_arr.push(new_user);
  resp.redirect('/ta02/');
});

router.post('/removeUser', (req, resp, next) => {
  const del_user = req.body.user_name_del;
  let msg = '';
  let index = user_arr.indexOf(del_user);
  if(index >= 0)
  {
    //
    user_arr.splice(index, 1);
  }
  else
  {
    msg = '<h2>Sorry, User not found</h2>';
  }
  console.log(msg);
  resp.render('pages/ta02',
               { title: 'Add User',
                 path: '/ta02/add_user',
                 user_arr: user_arr,
                 msg: msg
               });
});



module.exports = router;
