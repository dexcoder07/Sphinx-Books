import styled from 'styled-components'
import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    // background-color: #FAFAD2;
    position: relative;
    overflow: hidden;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props)=> props.bg};
`;


const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Image = styled.img`
  height: 80%;
`;

const Title = styled.h1`
font-size: 70px;
`;
const Desc = styled.h4`
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 40px;
    // font-weight: 500;
    letter-space: 3px;

`;
const Button = styled.button`
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    padding: 10px;
    background-color: transparent;
`;

const Arrow = styled.div`
    height: 50px;
    width:50px;
    background-color: #E0FFFF;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 250px;
    left: ${(props) => props.direction === 'left' && '10px'};
    right: ${(props) => props.direction === 'right' && '10px'};
    cursor: pointer;
    opacity: 0.5;
    
`;



const Slider = () => {

    const handleClick(direction) => {
        
    }
  return (
    <Container>
        <Arrow direction = "left" onClick={() => handleClick("left")}>
            <ArrowBackIosNewIcon/>
        </Arrow>
        <Wrapper>
            {/* Book 1 */}
            <Slide bg = "E0FFFF">
                <ImageContainer>
                    <Image src = "https://content.fortune.com/wp-content/uploads/2021/03/GRA.05.21.intelligent-investor.jpg?w=1024&h=682"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>SALE!!!</Title>
                    <Desc>GET 40% OFF ON SC-FI BOOKS</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>
            {/* Book 2 */}
            <Slide bg = "E0FFFF">
                <ImageContainer>
                    <Image src = "https://content.fortune.com/wp-content/uploads/2021/03/GRA.05.21.intelligent-investor.jpg?w=1024&h=682"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>SALE!!!</Title>
                    <Desc>GET 40% OFF ON SC-FI BOOKS</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>
            {/* Book 3 */}
            <Slide bg = "E0FFFF">
                <ImageContainer>
                    <Image src = "https://content.fortune.com/wp-content/uploads/2021/03/GRA.05.21.intelligent-investor.jpg?w=1024&h=682"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>SALE!!!</Title>
                    <Desc>GET 40% OFF ON SC-FI BOOKS</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction = "right" onClick={() => handleClick("right")>
            <ArrowForwardIosIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider