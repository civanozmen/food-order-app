import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

export default function BasketItem({ food, basket, setBasket }) {
    function removeFromBasket() {
        setBasket([...basket.filter((f) => f.id !== food.id)]);
    }

    return (
        <ListItem>
            <ListItemIcon>
                <RestaurantMenuIcon />
            </ListItemIcon>

            <ListItemText primary={food.name} />

            <Button onClick={removeFromBasket} color="inherit" size="large" endIcon={<RemoveCircleIcon />}>
                ${food.price}
            </Button>
        </ListItem>
    );
}