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
  const regexp = new RegExp(`^${moment().format('MMMM Do YYYY')}`);
  Request.find({ dateCreated: regexp }, (err, requests) => {
    console.log(requests);
    // const newToday = requests.length;
    // res.render('admin/dashboard', { newToday, now: moment().format('MMMM Do YYYY, h:mm:ss a') });
  });
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

      const now = moment().format('MMMM Do YYYY, h:mm:ss a');
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

router.put('/requests/:id/updatestatus', (req, res) => {
  Request.findByIdAndUpdate(
    req.params.id,
    { $set: { status: req.body.status } },
    (err, request) => {
      if (err) console.log(err);
      req.flash('success', `${request.id} status updated to '${req.body.status}'`);
      res.redirect('back');
    }
  );
});

router.put('/requests/:id/updatenote', (req, res) => {
  Request.findByIdAndUpdate(
    req.params.id,
    { $set: { note: req.body.note } },
    { noteTime: moment().format('MMMM Do YYYY, h:mm:ss a') },
    (err, request) => {
      if (err) console.log(err);
      req.flash('success', `${request.id} updated note'`);
      res.redirect(`/tvp-admin/requests/${req.params.id}`);
    }
  );
});

router.put('/requests/:id/updateswitch', (req, res) => {
  Request.findByIdAndUpdate(
    req.params.id,
    { $set: { activeSwitch: req.body.switch } },
    (err, request) => {
      if (err) console.log(err);
      req.flash(
        'success',
        req.body.switch === true ? `${request.id} closed` : `${request.id} opened`
      );
      res.redirect(`/tvp-admin/requests/${req.params.id}`);
    }
  );
});

// search routes
router.get('/requests/search/results', (req, res) => {
  res.send(req.body);
  // res.render('admin/results');
});

router.get('/requests/search/today', (req, res) => {
  const regexp = new RegExp(`^${moment().format('MMMM Do YYYY')}`);

  Request.find({ dateCreated: regexp })
    .sort({ dateCreated: 'desc' })
    .exec((err, requests) => {
      const now = moment().format('MMMM Do YYYY, h:mm:ss a');
      res.render('admin/results', { requests, now });
    });
});

// report routes
router.get('/requests/report/all', (req, res) => {
  Request.find({})
    .sort({ dateCreated: 'desc' })
    .exec((err, requests) => {
      if (err) console.log(err);
      else {
        const data = requests.map(request => ({
          ID: request.id,
          Active: request.activeSwitch,
          Status: request.status,
          DateCreated: request.dateCreated,
          DueDate: request.dateBy,
          Name: request.nameContact,
          Email: request.emailContact,
          Phone: request.phoneContact,
          Production: request.production,
          ProductionEmail: request.productionEmail,
          ProductionPhone: request.productionPhone,
          Department: request.department,
          BusinessDivision: request.businessDivision,
          Building: request.building,
          Location: request.location,
          Equipment: request.equipment,
          Detail: request.detail
        }));
        console.log(data);
        res.xls(`${moment().format('MMMM Do YYYY')}-tvp-report-all.xlsx`, data);
      }
    });

  // Request.find({}, (err, requests) => {
  //   if (err) console.log(err);
  //   else {
  //     const data = requests.map(request => ({
  //       ID: request.id,
  //       Active: request.activeSwitch,
  //       Status: request.status,
  //       DateCreated: request.dateCreated,
  //       DueDate: request.dateBy,
  //       Name: request.nameContact,
  //       Email: request.emailContact,
  //       Phone: request.phoneContact,
  //       Production: request.production,
  //       ProductionEmail: request.productionEmail,
  //       ProductionPhone: request.productionPhone,
  //       Department: request.department,
  //       BusinessDivision: request.businessDivision,
  //       Building: request.building,
  //       Location: request.location,
  //       Equipment: request.equipment,
  //       Detail: request.detail
  //     }));
  //     console.log(data);
  //     res.xls(`${moment().format('MMMM Do YYYY')}-tvp-report-all.xlsx`, data);
  //   }
  // });
});

module.exports = router;
