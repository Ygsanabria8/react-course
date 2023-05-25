import { createSlice } from "@reduxjs/toolkit";

import { addHours } from 'date-fns'

const tempEvent = {
    _id: new Date().getTime(),
    title: 'Cumpleaños',
    notes: 'Comprar torta',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'Yesid'
    }
  }

export const calendaSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [tempEvent],
        activeEvent: null,
    },
    reducers: {
      onSetActiveEvent: (state, { payload }) => {
        state.activeEvent = payload;
      },
      onAddNewEvent: (state, { payload }) => {
        state.events.push(payload);
        state.activeEvent = null;
      },
      onUpdateEvent: (state, { payload }) => {
        state.events = state.events.map(event => {
          return event._id === payload._id 
            ? payload
            : event;
        });
      },
      onDeleteEvent: (state) => {
        if (state.activeEvent) {
          state.events = state.events.filter(event => event._id !== state.activeEvent._id);
          state.activeEvent = null;
        }
      }
    }
});

export const { 
  onSetActiveEvent, onAddNewEvent,
  onUpdateEvent, onDeleteEvent
} = calendaSlice.actions;