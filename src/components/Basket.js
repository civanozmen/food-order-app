import { useState } from 'react';
import { TransitionGroup } from 'react-transition-group';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

import BasketItem from './BasketItem';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    borderRadius: 4,
    boxShadow: 24,
    p: 4,
    m: 2,
};

export default function Basket({ basket, setBasket, basketToggle, basketSetToggle }) {
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState([]);

    function handleOrder() {
        if (basket.length > 0) {
            setBasket([]);
            setSeverity(["success", "All foods ordered!"]);
        }
        else {
            setSeverity(["error", "Basket is empty!"]);
        }

        setOpen(true);
    }

    return (
        <Modal open={basketToggle} onClose={() => {
            basketSetToggle(false);
            setOpen(false);
        }}>
            <Box sx={style}>
                <Typography variant="h4" sx={{ m: 2 }}>
                    Basket Info
                </Typography>

                <Divider variant="middle" />

                <Typography variant="h3" sx={{ m: 2, mt: 6 }}>
                    {(basket.length <= 0 ? "Empty basket! Lets order some food." : "")}
                </Typography>

                <List sx={{ overflow: 'auto', maxHeight: 300, m: 2 }} >
                    {
                        basket.map((food) => {
                            return <BasketItem key={food.id} food={food} basket={basket} setBasket={setBasket} />
                        })
                    }
                </List>
                
                <Divider variant="middle" />

                <Typography variant="h5" sx={{ m: 2 }}>
                    Total Price: ${basket.reduce((accumulator, food) => accumulator + food.price, 0)}
                </Typography>

                <Button onClick={handleOrder} sx={{ m: 2, mx: 'auto', mb: 0, width: '100%', height: 50 }} variant="contained" size="large">
                    Order
                </Button>

                <Box sx={{ width: '100%' }}>
                    <Collapse in={open}>
                        <Alert
                            severity={severity[0]}
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            } sx={{ mb: 2 }}
                        >
                            {severity[1]}
                        </Alert>
                    </Collapse>
                </Box>
            </Box>
        </Modal>
    )
}