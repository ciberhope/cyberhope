import styled from "styled-components";

const HeaderContainer = styled.div`
  height: 70px;
  background: #030729;
  color: #b04c74;
  border-bottom: 1px solid #fff;
  display: flex;
`;
const ImgContainer = styled.img`
  height: 100%;
`;

const Titulo = styled.h2`
  font-size: 1.3em;
  padding-left: 20px;

  small {
    font-size: 0.8em;
    color: #fff;
  }
`;
const Header = () => {
  return (
    <HeaderContainer>
      <ImgContainer src="https://i.imgur.com/Y0HIRLZ.jpg" alt="LogoMarca" />
      <Titulo>
        CyberHope
        <small>
          &nbsp;&nbsp;&nbsp;Aprenda, ajude e dissemine a esperança!!!
        </small>
      </Titulo>
    </HeaderContainer>
  );
};

export default Header;
