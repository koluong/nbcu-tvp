const router = require('express').Router();
const moment = require('moment');
const config = require('../../config');
const Request = require('../models/order');

router.get('/', (req, res) => {
  res.render('admin/login');
});

router.post('/', (req, res) => {
  if (req.body.adminSecret == config.adminSecret) {
    res.redirect('/tvp-admin/dashboard');
  } else res.redirect('/tvp-admin');
});

router.get('/dashboard', (req, res) => {
  res.render('admin/dashboard');
});

router.get('/map', (req, res) => {
  Request.find({ activeSwitch: true }, (err, activeRequest) => {
    if (err) console.log(err);
    else {
      const requestsLocation = activeRequest.map(request => ({
        lat: request.lat,
        lng: request.lng
      }));
      res.render('admin/map', { requestsLocation });
    }
  });
});

router.get('/requests', (req, res) => {
  Request.find({}, (err, requests) => {
    if (err) console.log(err);
    else {
      requests.forEach((request) => {
        request.detail = request.detail.replace('', '');
      });

      const now = moment().format('MMM Do YY, h:mm:ss a');
      res.render('admin/requests', { requests, now });
    }
  });
});

router.get('/requests/:id', (req, res) => {
  Request.findById(req.params.id, (err, request) => {
    if (err) console.log(err);
    else {
      // else console.log(request);
      res.render('admin/request', { request });
    }
  });
});

router.post('/requests/search', (req, res) => {
  res.redirect(`/tvp-admin/requests/${req.body.requestId}`);
});

module.exports = router;
