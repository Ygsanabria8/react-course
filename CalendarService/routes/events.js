const express = require('express');
const { check } = require('express-validator');

const router = express.Router();

const { tokenValidator } = require('../middlewares/tokenValidator');
const { fieldsValidator } = require('../middlewares/fieldsValidator');
const { isDate } = require('../helpers/isDate');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');

router.get('/', [
    tokenValidator,
], getEvents);

router.post('/', [
    tokenValidator,
    check('title', 'InvalidTitle').not().isEmpty(),
    check('start', 'InvalidStartDate').custom(isDate),
    check('end', 'InvalidEndDate').custom(isDate),
    fieldsValidator
], createEvent);

router.put('/:id', [
    tokenValidator,
], updateEvent);

router.delete('/:id', [
    tokenValidator,
], deleteEvent);

module.exports = router;