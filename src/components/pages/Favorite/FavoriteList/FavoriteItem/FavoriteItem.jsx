import React, {useState} from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardActions from '@mui/material/CardActions';
import Price from '../../../../UI/Price';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import { actions } from '../../../../../Slices/favortie.slice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const FavoriteItem = ({ item }) => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const dispatch = useDispatch()

    const [checked, setChecked] = useState(false)

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };


    return (
        <Card className='FavoriteItem' >
            <div className="toggleFavorite">
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    onClick={() => dispatch(actions.toggleFavorites(item))}
                    sx={{
                        color: pink[800],
                        '&.Mui-checked': {
                            color: pink[600],
                        },
                        '& .MuiSvgIcon-root': {
                            fontSize: 35
                        }
                    }}
                    icon={<Favorite />}
                    checkedIcon={<FavoriteBorderIcon />}
                />
            </div>
            <img className='FavoriteItem-img' src={item.image} alt="" />
            <div className="FavoriteItem-name">
                {item.name}
            </div>
            <div className="FavoriteItem-price">
                <Price price={item.price} />
            </div>
            <div className="FavoriteItem-readmore">
                <Link to={`/fake-store/product/${item.id}`} style={{color : 'rgb(26, 123, 208)', textDecoration : 'underline', fontSize : 25}}>ReadMore</Link>
            </div>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography className='FavoriteItem-desc' paragraph>
                        {item.desc}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default FavoriteItem