import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RestaurantIcon from '@mui/icons-material/Restaurant';

export default function TopBar({ basket, basketToggle, basketSetToggle }) {
    function handleToggle() {
        basketSetToggle(!basketToggle);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <RestaurantIcon />
                    &nbsp;
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Food Order App with React.JS
                    </Typography>
                    <Button onClick={handleToggle} color="inherit" size="large" startIcon={<ShoppingCartIcon />}>
                        Basket ${basket.reduce((accumulator, food) => accumulator + food.price, 0)}
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}