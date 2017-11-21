const requireLogin = require('../middlewares/requireLogin');
const requireLogin = require('../middlewares/requireCredits');

module.exports = app => {
  app.post('/api/survey', requireLogin, requireCredits, (req, res) => {});
};
