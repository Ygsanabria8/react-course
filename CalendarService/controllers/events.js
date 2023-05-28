const { response } = require("express");

const Event = require('../models/Event');

const getEvents = async(req, res = response) => {

    const events = await Event.find().populate('user','name');

    res.status(200).json({
        ok: true,
        events
    });
    
};

const createEvent = async(req, res = response) => {

    const event = new Event(req.body);

    try {
        event.user = req.uid;
        const response = await event.save();
        res.status(200).json({
            ok: true,
            event: response,
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Please contact an administrator'
        });
    }
    
};

const updateEvent = async(req, res = response) => {

    const eventId = req.params.id;

    try {
        const eventDB = await Event.findById(eventId);

        if (!eventDB) {
            return res.status(404).json({
                ok: false,
                msg: 'EventNotFound'
            });
        }

        if (eventDB.user.toString() !== req.uid) {
            return res.status(401).json({
                ok: false,
                msg: 'UnauthorizedAction'
            });
        }

        const newEvent = {
            ...req.body,
            user: req.uid,
        }

        const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, { new: true });
        res.status(200).json({
            ok: true,
            event: updatedEvent,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Please contact an administrator'
        });
    }
    
};

const deleteEvent = async(req, res = response) => {

    const eventId = req.params.id;

    try {
        const eventDB = await Event.findById(eventId);

        if (!eventDB) {
            return res.status(404).json({
                ok: false,
                msg: 'EventNotFound'
            });
        }

        if (eventDB.user.toString() !== req.uid) {
            return res.status(401).json({
                ok: false,
                msg: 'UnauthorizedAction'
            });
        }

        await Event.findByIdAndRemove(eventId);
        res.status(200).json({
            ok: true,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Please contact an administrator'
        });
    }
    
};

module.exports = {
    getEvents, createEvent,
    updateEvent, deleteEvent
}