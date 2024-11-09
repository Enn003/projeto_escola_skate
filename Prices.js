import React from 'react';

function Prices({ prices }) {
    return (
        <div>
            <h2>Preços</h2>
            <ul>
                {prices.map(price => (
                    <li key={price.id}>
                        <p>{price.lesson_type}: {price.amount}€</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Prices;
