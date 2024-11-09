import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PriceDetails() {
    const { id } = useParams();
    const [price, setPrice] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/prices/${id}`)
            .then(response => setPrice(response.data))
            .catch(error => console.error("Erro ao carregar detalhes do preço:", error));
    }, [id]);

    if (!price) return <p>Carregando...</p>;

    return (
        <div className="details">
            <h2>Tipo de Aula: {price.lesson_type}</h2>
            <p>Preço: <strong>{price.amount}€</strong></p>
        </div>
    );
}

export default PriceDetails;
