import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
        <h1>GitFind</h1>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    background-color: #2D333B;
    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        color: white;
        font-family: 'Roboto, Arial';    
        font-size: 24px;

   }
`