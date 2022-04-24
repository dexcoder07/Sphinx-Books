import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Container = styled.div`
    height: 60px;
    // background-color: orange;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
display: flex;
flex: 1;
align-items: center`;

const Center = styled.div`
flex: 1;
text-align: center;
`;

const Right = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
flex: 1`;


const Language = styled.div`
font-size: 16px;
cursor: pointer;
`;

const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
// border: 3px solid black;
`;


const Input = styled.input`
flex: 1;
border: none;
`

const Logo = styled.h1`
font-weight: bold;
`;

const MenuItem = styled.div`
font-size: 14;
cursor: pointer;
margin-left: 25px;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input></Input>
                    <SearchIcon></SearchIcon>
                    </SearchContainer>
                    
                </Left>
                <Center><Logo><AcUnitIcon></AcUnitIcon>ShopLess</Logo></Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={1} color="secondary">
                    <ShoppingCartOutlinedIcon color="action" />
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar