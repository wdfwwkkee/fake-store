import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'


import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteItem from './FavoriteItem/FavoriteItem'
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import { actions } from '../../../../Slices/favortie.slice';



const FavoriteList = () => {

    const [open, setOpen] = useState(false);


    const dispatch = useDispatch()

    const handleClickOpen = () => {
        if (favorite.length === 0) return alert("favorite is empty")
        setOpen(true);
    };

    const clearFavorites = () => {
        dispatch(actions.clearFavorites())
        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { favorite } = useSelector(state => state)

    return (
        <div className='FavoriteList'>
            <main>
                <div className="clearFavorite">
                    <IconButton onClick={handleClickOpen} aria-label="delete">
                        <DeleteForeverIcon sx={{ color: "white" }} />
                    </IconButton>
                </div>
                <div className="title" style={{ textAlign: 'center' }}>
                    Ваш список избранного:
                </div>
                <div className="FavList">
                    {favorite.map(favItem => <FavoriteItem key={favItem.id} item={favItem} />)}
                </div>
                <div className="dialog">
                    {favorite.length !== 0 ?
                        <React.Fragment>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Уверены что хотите очистить корзину ?
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Disagree</Button>
                                    <Button onClick={clearFavorites} autoFocus>
                                        Agree
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </React.Fragment>
                        : null
                    }
                </div>
            </main>
        </div>
    )
}

export default FavoriteList