import styled from "styled-components";

const FootContainer = styled.footer`
  background: rgb(33, 33, 43);
  background: linear-gradient(
    0deg,
    rgba(33, 33, 43, 1) 0%,
    rgba(29, 24, 38, 1) 100%
  );
  text-align: center;
  color: #fff;
`;

const Footer = () => {
  return <FootContainer> jogo-ciberativismo by Grupo 6</FootContainer>;
};

export default Footer;
