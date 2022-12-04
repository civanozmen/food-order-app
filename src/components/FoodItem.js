import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

export default function FoodItem({ food, basket, setBasket }) {
    function addToBasket() {
        setBasket([...basket, food]);
    }

    return (
        <ListItem>
            <ListItemIcon>
                <RestaurantMenuIcon />
            </ListItemIcon>

            <ListItemText primary={food.name} />

            <Button onClick={addToBasket} color="inherit" size="large" endIcon={<AddCircleIcon />}>
                ${food.price}
            </Button>
        </ListItem>
    );
}