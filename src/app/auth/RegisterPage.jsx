// RegisterPage.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Link } from '@mui/material';
import { register } from '../../api/auth.api.js'; // Import your register function
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        nome: '',
        cognome: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRegister = async () => {
        try {
            if (formData.password !== formData.confirmPassword) {
                setError('Le password non coincidono');
                return;
            }

            await register({
                name: formData.nome,
                lastName: formData.cognome,
                email: formData.email,
                password: formData.password,
            });

            navigate('/login');
        } catch (error) {
            setError('Non è stato possibile creare il tuo account, riprova più tardi'); 
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            {/* Logo */}
            <img src="/imgs/logo.png" alt="Logo" style={{ width: '100%', marginBottom: '20px' }} />

            {/* Registration Form */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5">Crea account</Typography>
                <TextField
                    label="Nome"
                    type="text"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    name="nome"
                    size="small"
                    value={formData.nome}
                    onChange={handleChange}
                />
                <TextField
                    label="Cognome"
                    type="text"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    size="small"
                    name="cognome"
                    value={formData.cognome}
                    onChange={handleChange}
                />
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    size="small"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <TextField
                    label="Password"
                    type="password"
                    size="small"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <TextField
                    label="Conferma Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    name="confirmPassword"
                    size="small"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                {error && <Typography color="error">{error}</Typography>}
                <Button variant="contained" color="primary" size="large" onClick={handleRegister} style={{ marginTop: '20px' }}>
                    Registrati
                </Button>
            </div>

            {/* Login Link */}
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <Typography variant="body2">
                    Hai gia un account? <Link href="/login">Entra nel box</Link>
                </Typography>
            </div>
        </Container>
    );
};

export default RegisterPage;
