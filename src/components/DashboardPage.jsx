import Axios from "axios";
import React, { useEffect, useState } from "react"
import { styled } from "styled-components";
import { CategoryChart } from "./CategoryChart";

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
    display: flex;
`;

const ChartContainer = styled.div`

`;

const ChartContainerInner = styled.div`
    display: flex;
`;

const RupeeSymbol = styled.div`
    margin-top: 30px;
    font-size: 2em;
`;

const Label = styled.label`
    width: 300px;
    margin-top: 15px;
    margin-bottom: 15px;
`;

const YesNoRadioButton = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Input1 = styled.input`
    background-color: #030303;
    text-align: center;
    border-radius: 15px;
    border: 1px solid #FFFFFF;
    font-size: 16px;
    width: 300px;
    height: 40px;
    color: #FFFFFF;
    padding-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    &::placeholder {
        color: #FFFFFF;
    }
    &:disabled {
        background-color: #C2C2C2;
        cursor: not-allowed;
    }
`;

const InputGroup = styled.div`
    display: flex;
`;

const Category = styled.input`
    background-color: #030303;
    text-align: center;
    border-radius: 15px;
    border: 1px solid #FFFFFF;
    font-size: 16px;
    width: 55px;
    height: 40px;
    color: #FFFFFF;
    padding-left: 10px;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-right: 10px;
    &::placeholder {
        color: #FFFFFF;
    }
    &:disabled {
        background-color: #C2C2C2;
        cursor: not-allowed;
    }
`;

const Button = styled.button`
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
    margin-top: 30px;
    margin-bottom: 20px;
    display: block;
    font-weight: bold;
    &:disabled {
        background-color: #C2C2C2;
        cursor: not-allowed;
    }
`;

export const DashboardPage = () => {
    const id = sessionStorage.getItem('id');
    const [data, setData] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [price, setPrice] = useState(0);
    const [category1, setCategory1] = useState(0);
    const [category2, setCategory2] = useState(0);
    const [category3, setCategory3] = useState(0);
    const [category4, setCategory4] = useState(0);
    const [isDataFetched, setIsDataFetched] = useState(false);

    const fetchData = () => {
        Axios.get(`https://stg.dhunjam.in/account/admin/${id}`)
            .then((response) => {
                setData(response.data.data);
                console.log(response.data.data);

                if (response.data.data.charge_customers === true) {
                    setSelectedOption('yes');
                } else {
                    setSelectedOption('no');
                }
                setPrice(response.data.data.amount.category_6);
                setCategory1(response.data.data.amount.category_7);
                setCategory2(response.data.data.amount.category_8);
                setCategory3(response.data.data.amount.category_9);
                setCategory4(response.data.data.amount.category_10);

                setIsDataFetched(true);
            });
    }
    
    useEffect(() => {
        if (!isDataFetched) {
            fetchData();
        }
    }, [id, isDataFetched]);
    
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Axios.put(`https://stg.dhunjam.in/account/admin/${id}`, {
                amount: {
                    category_6: price,
                },
            });
            console.log(response.data);
            fetchData();
        }
        catch (error) {
            console.error('Error: ' + error);
        }
    }
    
    return (
        <React.Fragment>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Title>
                        {data.name}, {data.location} on Dhun Jam
                    </Title>
                    <FormGroup>
                        <Label>Do you want to charge your customers for requesting songs?</Label>
                        <YesNoRadioButton>
                            <label>
                                <input
                                    type="radio"
                                    name="YesNoOption"
                                    value="yes"
                                    checked={selectedOption === 'yes'}
                                    onChange={handleOptionChange}
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="YesNoOption"
                                    value="no"
                                    checked={selectedOption === 'no'}
                                    onChange={handleOptionChange}
                                />
                                No
                            </label>
                        </YesNoRadioButton>
                    </FormGroup>
                    <FormGroup>
                        <Label>Custom song request amount-</Label>
                        <Input1
                            type="number"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            disabled={selectedOption === 'no'}
                            required={selectedOption === 'yes'}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Regular song request amounts, &nbsp; from high to low-</Label>
                        <InputGroup>
                            <Category
                                type="number"
                                name="category1"
                                value={category1}
                                onChange={(e) => setCategory1(e.target.value)}
                                disabled={selectedOption === 'no'}
                                required={selectedOption === 'yes'}
                            />
                            <Category
                                type="number"
                                name="category2"
                                value={category2}
                                onChange={(e) => setCategory2(e.target.value)}
                                disabled={selectedOption === 'no'}
                                required={selectedOption === 'yes'}
                            />
                            <Category
                                type="number"
                                name="category3"
                                value={category3}
                                onChange={(e) => setCategory3(e.target.value)}
                                disabled={selectedOption === 'no'}
                                required={selectedOption === 'yes'}
                            />
                            <Category
                                type="number"
                                name="category4"
                                value={category4}
                                onChange={(e) => setCategory4(e.target.value)}
                                disabled={selectedOption === 'no'}
                                required={selectedOption === 'yes'}
                            />
                        </InputGroup>
                    </FormGroup>
                    <ChartContainer>
                        {selectedOption === 'yes' && (
                            <ChartContainerInner>
                                <RupeeSymbol>₹</RupeeSymbol>
                                <CategoryChart
                                    price = {price}
                                    category1 = {category1}
                                    category2 = {category2}
                                    category3 = {category3}
                                    category4 = {category4}
                                />
                            </ChartContainerInner>
                        )}
                    </ChartContainer>
                    <Button type="submit" disabled={selectedOption === 'no'|| price < 100 || category1 < 80 || category2 < 60 || category3 < 40 || category4 < 20}>
                        Save
                    </Button>
                </form>
            </Container>
        </React.Fragment>
    )
}