import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
    },
    reducers: {
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;

        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        noteUpdated: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map(note => {
                if (note.id !== action.payload.id) { return note; }
                return action.payload;
            });

            state.messageSaved = `${ action.payload.title }, actualizada correctamente`;
        },
        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        },
        deleteNoteById: (state, action) => {
            state.notes = state.notes.filter((note) => note.id !== action.payload);
            state.active = null;
        },
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        setImagesToActiveNote: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls , ...action.payload];
            state.isSaving = false;
        }
    },
})

export const {
    addNewEmptyNote, setActiveNote,
    setNotes, setSaving, noteUpdated,
    deleteNoteById, savingNewNote,
    setImagesToActiveNote, clearNotesLogout
} = journalSlice.actions