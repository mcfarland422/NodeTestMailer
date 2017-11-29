var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: 'hayescapers45583@gmail.com',
    pass: 'hambone45583'
  }
}

var transporter = nodemailer.createTransport(transprt)

transporter.verify((error, success) => {
  if (error) {
    console.lgo(error)
  } else  {
    console.log('server is ready to take messages');
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
