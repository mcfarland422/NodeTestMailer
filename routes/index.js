var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

const creds = require('../config/config');

var transport = {
	host: 'smtp.gmail.com',
	auth: {
		user: creds.USER,
		pass: creds.PASS
	}
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
	if (error) {
		console.log(error);
	} else {
		console.log('Server is ready to take messages');
	}
});

/* GET home page. */
router.get('/', function(req, res, next) {
	var message = '';

	if (req.query.msg != undefined) {
		message = req.query.msg
	}

  	res.render('index', { title: 'Express', message: message });
});

router.post('/send', (req, res) => {
	var email = req.body.email
	var content = req.body.content,
		name = req.body.name,
		phone = req.body.phone,
		finalMessage = `${content} \n\n phone: ${phone} \n email: ${email}`

	var mail = {
		from: 'Bugs Bunny',
		to: 'hayescapers5@gmail.com',
		subject: 'test',
		text: finalMessage
	}

	transporter.sendMail(mail, (err, data) => {
		if (err) {
			console.log(err)
			res.redirect('/?msg=Fail')
		} else {
			console.log('SUCCESSSSSSSSSSS!')
			res.redirect('/?msg=SUCCESSSSSSSSSS')
		}
	})
})

module.exports = router;





















