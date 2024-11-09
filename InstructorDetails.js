import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function InstructorDetails() {
    const { id } = useParams();
    const [instructor, setInstructor] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/instructors/${id}`)
            .then(response => setInstructor(response.data))
            .catch(error => console.error("Erro ao carregar detalhes do instrutor:", error));
    }, [id]);

    if (!instructor) return <p>Carregando...</p>;

    return (
        <div className="details">
            <h2>{instructor.name}</h2>
            <img src={instructor.image} alt={instructor.name} />
            <p>{instructor.bio}</p>
            <p>Experiência: {instructor.experience} anos</p>
        </div>
    );
}

export default InstructorDetails;
