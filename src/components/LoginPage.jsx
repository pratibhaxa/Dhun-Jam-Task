import React, { useEffect, useState } from "react"
import { styled } from "styled-components";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

const Container = styled.div`
    display: flex;
    width: 100wh;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Title = styled.p`
    font-weight: bold;
    font-size: 32px;
    text-align: center;
`;

const FormGroup = styled.div`

`;

const Input = styled.input`
    background-color: #030303;
    border-radius: 15px;
    border: 1px solid #FFFFFF;
    font-size: 16px;
    width: 590px;
    height: 48px;
    color: #FFFFFF;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 10px;

    &::placeholder {
        color: #FFFFFF;
    }
`;

const PasswordContainer = styled.div`
    display: flex;
    align-items: center;
`;

const PasswordInput = styled.input`
    background-color: #030303;
    border-radius: 15px;
    border: 1px solid #FFFFFF;
    font-size: 16px;
    width: 590px;
    height: 48px;
    color: #FFFFFF;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 10px;
`;

const EyeIcon = styled.span`
    cursor: pointer;
    margin-left: -30px;
`;

const Button1 = styled.button`
    display: block;
    background-color: #6741d9;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    width: 600px;
    height: 48px;
    color: #FFFFFF;
    padding-left: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    display: block;
    font-weight: bold;
`;

const Button2 = styled.button`
    display: block;
    background-color: #030303;
    border: none;
    color: #FFFFFF;
    font-size: 16px;
    cursor: pointer;
    margin: 0 auto;
`;

const StyledLink = styled(Link)`
    color: #FFFFFF;
    text-decoration: none;
`;


export const LoginPage = () => {
    const navigate = useNavigate();
    const id = sessionStorage.getItem('id');

    const [username, setUsername] = useState(`DJ@${id}`);
    const [password, setPassword] = useState('Dhunjam@2023');
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Axios.post('https://stg.dhunjam.in/account/admin/login', {
                username: username,
                password: password,
            });
            navigate('/dashboard');
            console.log(response.data);
            sessionStorage.setItem('token', response.data.data.token);
            console.log(response.data.data.token);
        }
        catch (error) {
            console.error('Error: ' + error);
        }
    };

    // useEffect(() => {
    //     console.log(id);
    // })
    console.log(id);

    return (
        <React.Fragment>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Title>
                        Venue Admin Login
                    </Title>
                    <FormGroup>
                        <Input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder='Username'
                            // required
                        />
                    </FormGroup>
                    <PasswordContainer>
                        <PasswordInput
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password'
                            // required
                        />
                        <EyeIcon onClick={handleTogglePassword}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </EyeIcon>
                    </PasswordContainer>
                    <Button1 type="submit">
                        Sign In
                    </Button1>
                    <Button2>
                        <StyledLink to='/register'>
                        New Registration?
                        </StyledLink>
                    </Button2>
                </form>
            </Container>
        </React.Fragment>
    )
}