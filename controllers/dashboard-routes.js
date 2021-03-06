const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote } = require('../models');
const withAuth = require('../utils/auth');

// show dashboard for logged in users
router.get('/', withAuth,(req, res) => {
  res.render('dashboard');
});

module.exports = router;
