module.exports = {
  mongooseUri: process.env.MONGODB_URI,
  expressSessionSecret: process.env.EXPRESS_SESSION_SECRET,
  adminSecret: process.env.ADMIN_SECRET,
  emailPassword: process.env.EMAIL_PASSWORD,
  url: process.env.URL
};
