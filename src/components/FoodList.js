import { v4 as uuid } from 'uuid';

import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';

import FoodItem from './FoodItem';

export default function FoodList({ basket, setBasket }) {
    function createFood(name, price) {
        return ({
            id: uuid(),
            name: name,
            price: price
        });
    }

    const pizzas = ["Pizzas", [
        createFood("Pepporoni Pizza", 4),
        createFood("Bacon & Sausage Pizza", 4.5),
        createFood("Veggie Pizza", 3.5),
        createFood("Margarita Pizza", 3),
        createFood("Mexico Pizza", 4.5),
        createFood("Deluxe Pizza", 6),
    ]];

    const burgers = ["Burgers", [
        createFood("Fat Mac Burger", 3),
        createFood("Cheeseburger", 2),
        createFood("Mushroom Burger", 3.5),
        createFood("Special Burger", 4.5),
        createFood("Double Meat Burger", 5),
    ]];

    const hotDogs = ["Hot Dogs", [
        createFood("Classic Hot Dog", 1),
        createFood("Cheddar Hot Dog", 2.5),
        createFood("Italian Hot Dog", 3),
        createFood("New York Hot Dog", 4),
        createFood("Seattle Hot Dog", 3.5),
    ]];

    const fries = ["Fries", [
        createFood("French Fries", .5),
        createFood("Cheddar Fries", 1),
        createFood("Curly Fries", 1),
    ]];

    const salads = ["Salads", [
        createFood("Green Salad", 1),
        createFood("Coleslaw Salad", 1.5),
        createFood("Pasta Salad", 2),
    ]];

    const drinks = ["Drinks", [
        createFood("Water", .5),
        createFood("Coke", 1),
        createFood("Sprite", 1),
        createFood("Homemade Lemonade", 1.5),
    ]];

    const menus = [pizzas, burgers, hotDogs, fries, salads, drinks];

    return (
        <>
            {
                menus.map((menu) => {
                    return (
                        <List sx={{ width: '90%', m: 8, mx: "auto" }} subheader={<ListSubheader>{menu[0]}</ListSubheader>}>
                            {
                                menu[1].map((food) => {
                                    return <FoodItem key={food.id} food={food} basket={basket} setBasket={setBasket} />
                                })
                            }
                        </List>
                    )
                })
            }
        </>
    );
}