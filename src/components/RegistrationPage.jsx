import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
// import { YesNoRadioButton } from './YesNoRadioButton';
import Axios from 'axios';

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

export const RegistrationPage = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const latitude = 13.07067;
    const longitude = 77.65303;
    const password = 'Dhunjam@2023';
    const [email, setEmail] = useState('');
    // const [id, setId] = useState(null);
    // sessionStorage.setItem('id', id);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Axios.post('https://stg.dhunjam.in/account/restobar/register', {
                name: name,
                location: location,
                latitude: latitude,
                longitude: longitude,
                password: password,
                email: email,
            });
            console.log(response.data.data.id);
            // setId(response.data.data.id);
            sessionStorage.setItem('id', response.data.data.id);
        }
        catch (error) {
            console.error('Error: ' + error);
        }
    };

    return (
        <React.Fragment>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Title>
                        New Venue Registration
                    </Title>
                    <FormGroup>
                        <Input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Name'
                            // required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="text"
                            name="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder='Location'
                            // required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email'
                            // required
                        />
                    </FormGroup>
                    <Button1 type="submit">
                        Sign Up
                    </Button1>
                    <Button2>
                        <StyledLink to='/login'>
                            Login?
                        </StyledLink>
                    </Button2>
                </form>
            </Container>
        </React.Fragment>
    );
};


// for capturing the user's geolocation
    // useEffect(() => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(
    //           (position) => {
    //             const { latitude, longitude } = position.coords;
    //             setLatitude(latitude);
    //             setLongitude(longitude);
    //           },
    //           (error) => {
    //             console.error('Error getting geolocation:', error.message);
    //           }
    //         );
    //       } else {
    //         console.error('Geolocation is not supported by this browser.');
    //       }
    //   }, []);