'use strict';

const express = require('express');
const apiRouter = express.Router();

const User = require('./model/user.js');
const Article = require('./model/article.js');
const auth = require('./middleware/auth.js');
const oauth = require('./oauth/google.js');


/**
 * route accessible for anyone
 */
apiRouter.get('/users', (req, res, next) => {
  console.log('some public information');
});

//route for a signed up user
/**
 * route accessible only by user
 */
apiRouter.get('/secret', auth('read'), (req, res, next) => {
  console.log('some secret info');
});



/**
 * route accessible only by the admin
 */
apiRouter.get('/superSecret', auth('delete'), (req, res, next) => {
  console.log('some secret secret info');
});

module.exports = apiRouter;