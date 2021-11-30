import styled from "styled-components";

const HeaderContainer = styled.div`
  height: 50px;
  background: rgb(33, 33, 43);
  background: linear-gradient(
    0deg,
    rgba(33, 33, 43, 1) 0%,
    rgba(29, 24, 38, 1) 100%
  );
  color: #fff;
  border-bottom: 1px solid #b874fc;
`;

const Titulo = styled.h2`
  font-size: 1em;
  padding-left: 20px;

  small {
    font-size: 0.5em;
  }
`;
const Header = () => {
  return (
    <HeaderContainer>
      <Titulo>
        CyberAjuda! <small>o planeta</small>
      </Titulo>
    </HeaderContainer>
  );
};

export default Header;
