import styled from "styled-components";
import { ReactComponent as Currency } from "./currency.svg";

const Header = () => {
  return (
    <HeaderSection>
      <Currency style={{ width: 50 }} />
      <h1>Currency converter</h1>
    </HeaderSection>
  );
};

const HeaderSection = styled.div`
  display: flex;
  gap: 0.5rem;
  text-transform: uppercase;

  @media screen and (max-width: 980px) {
    font-size: 12px;
  }

  @media screen and (max-width: 450px) {
    font-size: 10px;
  }
`;

export default Header;
