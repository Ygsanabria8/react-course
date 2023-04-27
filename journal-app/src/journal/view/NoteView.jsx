import { useMemo, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

import { ImageGalery } from "../components";
import { useForm } from "../../hooks/useForm";
import { setActiveNote, startSaveNote, startUpdaloadingFiles, startDeleteNote } from "../../store/journal";

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active:note, messageSaved, isSaving } = useSelector(state => state.journal);

    const { formState, onInputChange } = useForm(note);
    
    const dateString = useMemo(() => {
        const newDate = new Date(note.date);
        return newDate.toUTCString();
    }, [note.date])

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState])

    useEffect(() => {
        if ( messageSaved.length > 0 ) { 
            Swal.fire('Nota actualizada', messageSaved, 'success');
         }
    }, [messageSaved])
    
    const fileInputRef = useRef();

    const onSaveNote = () => {
        dispatch(startSaveNote());
    };

    const onFileInputChange = ({ target }) => {
        if( target.files === 0) { return; }

        dispatch(startUpdaloadingFiles(target.files));
    };

    const onDelete = () => {
        dispatch(startDeleteNote());
    }
    
    return (
        <Grid
            container
            className="animate__animated animate__fadeIn animate__faster"
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{
                mb: 1
            }}
        >
            <Grid item>
                <Typography
                    fontSize={39}
                    fontWeight='light'
                >
                    { dateString }
                </Typography>
            </Grid>
            <Grid item>

                <input
                    type="file"
                    multiple
                    ref={ fileInputRef }
                    onChange={ onFileInputChange }
                    style={{ display: 'none' }}
                />

                <IconButton
                    color='primary'
                    disabled={ isSaving }
                    onClick={ () => fileInputRef.current.click() }
                >
                    <UploadOutlined/>
                </IconButton>
                <Button
                    color='primary'
                    sx={{
                        p: 2
                    }}
                    disabled={ isSaving }
                    onClick={ onSaveNote }
                >
                    <SaveOutlined
                        sx={{
                            fontSize: 30,
                            mr: 1
                        }}
                    />
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    placeholder='Ingrese un titulo'
                    label='Titulo'
                    sx={{
                        border: 'none',
                        mb: 1
                    }}
                    name='title'
                    value={formState.title}
                    onChange={ onInputChange }
                />
            </Grid>
            <Grid container>
                <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder='Que sucedió en el día de hoy?'
                    minRows={ 5 }
                    name='body'
                    value={formState.body}
                    onChange={ onInputChange }
                />
            </Grid>
            <Grid
                container
                justifyContent='end'
            >
                <Button
                    onClick={ onDelete }
                    sx={{  mt: 2}}
                    color='error'
                >
                    <DeleteOutline/>
                    Borrar
                </Button>
            </Grid>
            <ImageGalery images={ note.imageUrls } />
        </Grid>
    );
};
