import React, { useContext, useState } from 'react';
import { TextField, Button, Container, Typography, Link } from '@mui/material';
import { login } from '../../api/auth.api';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

const LoginPage = () => {
    const { updateUser } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const userData = await login(username, password);
            updateUser(userData);
            navigate('/');
        } catch (error) {
            // todo: better messages
            setError('Le credenziali inserite sono errate.');
        }
    };

    return (
        <Container component="main" maxWidth="xs" style={{ marginTop: '20px' }}>
            {/* Logo */}
            <img src="\imgs\logo.png" alt="Logo" style={{ width: '100%', marginBottom: '20px' }} />

            {/* Login Form */}
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h5">Shark Box</Typography>
                <TextField
                    label="Email"
                    type="email"
                    size="small"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    autoComplete='true'
                    fullWidth
                    size="small"
                    margin="normal"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <Typography color="error">{error}</Typography>}
                <Button variant="contained" color="primary" size="large" onClick={handleLogin} style={{ marginTop: '20px' }}>
                    Login
                </Button>
            </form>

            {/* Register Link */}
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <Typography variant="body2">
                    Non hai un account? <Link href="/register">Registrati</Link>
                </Typography>
            </div>
        </Container>
    );
};

export default LoginPage;
