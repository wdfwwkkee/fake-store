import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../../../../Slices/cart.slice';
import Price from '../../../../UI/Price';
import { Link } from 'react-router-dom';

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

const Item = ({ item }) => {

    const [snackPack, setSnackPack] = useState([]);
    const [open, setOpen] = useState(false);
    const [messageInfo, setMessageInfo] = useState(undefined);
    useEffect(() => {
        if (snackPack.length && !messageInfo) {
            setMessageInfo({ ...snackPack[0] });
            setSnackPack((prev) => prev.slice(1));
            setOpen(true);
        } else if (snackPack.length && messageInfo && open) {
            setOpen(false);
        }
    }, [snackPack, messageInfo, open]);

    const handleClick = (message, item) => () => {
        dispatch(actions.addToCart(item))
        setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {

            setOpen(false);
        }
        setOpen(false);

    };

    const handleExited = () => {
        setMessageInfo(undefined);
    };

    const dispatch = useDispatch();
    const { cart } = useSelector(state => state)

    const existingCartItemIndex = cart.findIndex((indexCart) => indexCart.id === item.id)
    const isExist = cart.some((itemCart) => itemCart.id === item.id)

    function toggleDecrement(item) {
        const index = cart.findIndex((product) => product.id === item.id);
        if (cart[index].quantity > 1) {
            dispatch(actions.decrementQuantity(item))
        } else {
            dispatch(actions.deleteFromCart(item))
        }
    }

    return (
        <div className='Item'>
            <div className="item-img">
                <img src={item.image} alt="" />
            </div>
            <div className="item-name">
                {item.name}
            </div>
            <div className="item-price">
                <Price price={item.price} />
            </div>
            <div className="item-readMore">
                <Link to={`/fake-store/product/${item.id}`} style={{ fontSize: 20, color: 'rgb(26, 123, 208)' }}>Read More</Link>
            </div>
            {isExist ?
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <button style={{ margin: 0 }} onClick={() => dispatch(actions.incrementQuantity(item))}>+
                    </button>
                    <div>{cart[existingCartItemIndex].quantity}</div>
                    <button style={{ margin: 0 }} onClick={() => toggleDecrement(item)} >-
                    </button>
                </div>
                : <button onClick={handleClick(`The ${item.name} add to Cart`, item)}>Add to Cart</button>
            }
            <Snackbar
                key={messageInfo ? messageInfo.key : undefined}
                open={open}
                autoHideDuration={1500}
                sx={{width : 550, "div" :{fontSize : "30px!important"}}}
                onClose={handleClose}
                TransitionProps={{ onExited: handleExited }}
                message={messageInfo ? messageInfo.message : undefined}
                action={
                    <React.Fragment>
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            sx={{p : 0}}
                            onClick={handleClose}
                        >
                            <CloseIcon sx={{ width : 30, "button" : {margin : 0}}} />
                        </IconButton> 
                    </React.Fragment>
                }
            />
        </div>
    )
}

export default Item