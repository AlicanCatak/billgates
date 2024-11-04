import React, { useState } from 'react';
import './SpendBillGatesMoney.css';

const items = [
    { name: 'Big Mac', price: 2, image: '/img/big-mac.jpg' },
    { name: 'Flip Flops', price: 3, image: '/img/flip-flops.jpg' },
    { name: 'Coca-Cola Pack', price: 5, image: '/img/coca-cola-pack.jpg' },
    { name: 'Movie Ticket', price: 12, image: '/img/movie-ticket.jpg' },
    { name: 'Book', price: 15, image: '/img/book.jpg' },
    { name: 'Video Game', price: 60, image: '/img/video-game.jpg' },
    { name: 'Lobster Dinner', price: 45, image: '/img/lobster-dinner.jpg' },
    { name: 'Year of Netflix', price: 100, image: '/img/year-of-netflix.jpg' },
    { name: 'Amazon Echo', price: 99, image: '/img/amazon-echo.jpg' },
    { name: 'Air Jordans', price: 125, image: '/img/air-jordans.jpg' },
];

function SpendBillGatesMoney() {
    const [money, setMoney] = useState(100000000000);
    const [purchases, setPurchases] = useState({});
  
    const handleBuy = (item) => {
        if (money >= item.price) {
            setMoney(money - item.price);
            setPurchases((prevPurchases) => ({
                ...prevPurchases,
                [item.name]: {
                    ...item,
                    quantity: (prevPurchases[item.name]?.quantity || 0) + 1,
                },
            }));
        }
    };

    const handleSell = (item) => {
        if (purchases[item.name]?.quantity > 0) {
            setMoney(money + item.price);
            setPurchases((prevPurchases) => ({
                ...prevPurchases,
                [item.name]: {
                    ...item,
                    quantity: prevPurchases[item.name].quantity - 1,
                },
            }));
        }
    };

    return (
        <div className="container">
            <h1>Spend Bill Gates' Money</h1>
            <h2>${money.toLocaleString()}</h2>
            <div className="items">
                {items.map((item, index) => (
                    <div key={index} className="item">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <button
                            onClick={() => handleBuy(item)}
                            disabled={item.price > money}
                        >
                            Buy
                        </button>
                        <button
                            onClick={() => handleSell(item)}
                            disabled={!purchases[item.name]?.quantity}
                        >
                            Sell
                        </button>
                    </div>
                ))}
            </div>
            <div className="purchases">
                <h2>Purchased Items</h2>
                {Object.keys(purchases).length > 0 ? (
                    <ul>
                        {Object.values(purchases).map(
                            (purchase) =>
                                purchase.quantity > 0 && (
                                    <li key={purchase.name}>
                                        {purchase.name} x {purchase.quantity} = $
                                        {(purchase.price * purchase.quantity).toLocaleString()}
                                    </li>
                                )
                        )}
                    </ul>
                ) : (
                    <p>No items purchased yet.</p>
                )}
            </div>
        </div>
    );
}

export default SpendBillGatesMoney;

