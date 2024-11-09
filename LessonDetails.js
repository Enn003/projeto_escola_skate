import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function LessonDetails() {
    const { id } = useParams();
    const [lesson, setLesson] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/lessons/${id}`)
            .then(response => setLesson(response.data))
            .catch(error => console.error("Erro ao carregar detalhes da aula:", error));
    }, [id]);

    if (!lesson) return <p>Carregando...</p>;

    return (
        <div className="details">
            <h2>{lesson.title}</h2>
            <p>{lesson.description}</p>
            <p>Duração: {lesson.duration} minutos</p>
        </div>
    );
}

export default LessonDetails;
