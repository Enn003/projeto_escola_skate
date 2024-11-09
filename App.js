import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import InstructorDetails from './components/InstructorDetails';
import LessonDetails from './components/LessonDetails';
import PriceDetails from './components/PriceDetails';
import axios from 'axios';
import './App.css';

function App() {
    const [instructors, setInstructors] = useState([]);
    const [lessons, setLessons] = useState([]);
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/instructors/")
            .then(response => setInstructors(response.data))
            .catch(error => console.error("Erro ao carregar instrutores:", error));

        axios.get("http://localhost:8000/api/lessons/")
            .then(response => setLessons(response.data))
            .catch(error => console.error("Erro ao carregar aulas:", error));

        axios.get("http://localhost:8000/api/prices/")
            .then(response => setPrices(response.data))
            .catch(error => console.error("Erro ao carregar preços:", error));
    }, []);

    return (
        <Router>
            <div className="App">
                <header>
                    <h1>Escola de Skate</h1>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/instructors">Instrutores</Link>
                        <Link to="/lessons">Aulas</Link>
                        <Link to="/prices">Preços</Link>
                        <Link to="/login">Login</Link>
                    </nav>
                </header>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/instructors" element={<Instructors instructors={instructors} />} />
                    <Route path="/instructors/:id" element={<InstructorDetails />} />
                    <Route path="/lessons" element={<Lessons lessons={lessons} />} />
                    <Route path="/lessons/:id" element={<LessonDetails />} />
                    <Route path="/prices" element={<Prices prices={prices} />} />
                    <Route path="/prices/:id" element={<PriceDetails />} />
                    <Route path="/login" element={<Login />} />
                </Routes>

                <footer>
                    <p>&copy; {new Date().getFullYear()} Escola de Skate. Todos os direitos reservados.</p>
                </footer>
            </div>
        </Router>
    );
}



function Home() {
    return (
        <div className="hero">
            <div className="hero-content">
                <h2>Bem-vindo à Escola de Skate</h2>
                <p>Aprenda com os melhores instrutores em aulas personalizadas e treine em nosso espaço com total segurança.</p>
                <Link to="/instructors">
                    <button>Conheça os Instrutores</button>
                </Link>
                <Link to="/lessons">
                    <button>Veja as Aulas</button>
                </Link>
                <Link to="/prices">
                    <button>Consulte os Preços</button>
                </Link>
            </div>
        </div>
    );
}

function Instructors({ instructors }) {
    return (
        <section id="instructors">
            <h2>Instrutores</h2>
            <div className="grid">
                {instructors.map(inst => (
                    <div className="card" key={inst.id}>
                        <img src={inst.image} alt={inst.name} />
                        <div className="card-content">
                            <Link to={`/instructors/${inst.id}`}>
                                <h3>{inst.name}</h3>
                            </Link>
                            <p>{inst.bio}</p>
                            <p className="experience">Experiência: {inst.experience} anos</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Lessons({ lessons }) {
    return (
        <section id="lessons">
            <h2>Aulas</h2>
            <div className="grid">
                {lessons.map(lesson => (
                    <div className="card" key={lesson.id}>
                        <div className="card-content">
                            <Link to={`/lessons/${lesson.id}`}>
                                <h3>{lesson.title}</h3>
                            </Link>
                            <p>{lesson.description}</p>
                            <p>Duração: {lesson.duration} minutos</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Prices({ prices }) {
    return (
        <section id="prices">
            <h2>Preços</h2>
            <div className="grid">
                {prices.map(price => (
                    <div className="card" key={price.id}>
                        <div className="card-content">
                            <Link to={`/prices/${price.id}`}>
                                <p>{price.lesson_type}: <strong>{price.amount}€</strong></p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}


function Login() {
    return (
        <div className="login-form">
            <h2>Login</h2>
            <form>
                <div>
                    <label>Usuário:</label>
                    <input type="text" name="username" required />
                </div>
                <div>
                    <label>Senha:</label>
                    <input type="password" name="password" required />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default App;

