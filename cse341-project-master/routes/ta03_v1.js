//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

const P = require('../model/data');

router.get('/', (req, resp, nest) => {
  P.fetchAll( products => {
    resp.render('pages/ta03', {
      prods: products,
      title: 'week3',
      path: '/ta03'
    })
  });
});//END router.post()

router.get('/', (req, res, next) => {
  res.render('pages/ta03', {
    title: 'W03: The Tech Store',
    path: '/ta03', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    prods: []
  });
});

module.exports = router;
