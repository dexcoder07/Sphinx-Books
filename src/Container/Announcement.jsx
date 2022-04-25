// import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #E0FFFF;
    color: black;
    display: flex;
    justify-content: center;
    align-text: center;
    font-size: 14px;
    font-weight: 500;
`;


const Announcement = () => {
  return (
    <Container>
        <h3>SALE!!! SALE!!! SALE!!!!</h3>
    </Container>
  )
}

export default Announcement