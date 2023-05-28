const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

const { tokenValidator } = require('../middlewares/tokenValidator');
const { fieldsValidator } = require('../middlewares/fieldsValidator');
const {
  createUser,
  loginUser,
  revalidateToken,
} = require('../controllers/auth');

router.post('/', [
  check('email', 'InvalidUserEmail').isEmail(),
  check('password', 'InvalidUserPassword').isLength({ min: 6 }),
  fieldsValidator
], loginUser);

router.post('/new', [
  check('name', 'InvalidUserName').not().isEmpty(),
  check('email', 'InvalidUserEmail').isEmail(),
  check('password', 'InvalidUserPassword').isLength({ min: 6 }),
  fieldsValidator
], createUser);

router.get('/renew', [
  tokenValidator
], revalidateToken);

module.exports = router;
