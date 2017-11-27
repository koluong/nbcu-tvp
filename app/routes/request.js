const router = require('express').Router();
const geocoder = require('geocoder');
const nodemailer = require('nodemailer');
const Request = require('../models/order');

// get new form route
router.get('/new', (req, res) => {
  res.render('orders/form');
});

// post new request route
router.post('/', (req, res) => {
  geocoder.geocode(req.body.request.location, (err, data) => {
    if (err) console.log(err);
    else {
      req.body.request.lat = data.results[0].geometry.location.lat;
      req.body.request.lng = data.results[0].geometry.location.lng;
      req.body.request.location = data.results[0].formatted_address;
      Request.create(req.body.request, (err, request) => {
        if (err) console.log(err);
        else {
          console.log(`New Request Created : \n ${request}`);
          // create reusable transporter object using the default SMTP transport
          const transporter = nodemailer.createTransport({
            host: 'smtp-mail.outlook.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: 'kennyk94@live.com', // generated ethereal user
              pass: 'Jojo102294...' // generated ethereal password
            }
          });

          // setup email data with unicode symbols
          const mailOptions = {
            from: '"Kenny Luong" <kennyk94@live.com>', // sender address
            to: 'koluong@cpp.edu', // list of receivers
            subject: 'NBCUniversal TVP Request Confirmation', // Subject line
            text: 'We have recevied your request, hang tight.', // plain text body
            html: require('../templates/email')(request) // html body
          };

          // send mail with defined transport object
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
          });
        }
      });
    }
  });
});

module.exports = router;
