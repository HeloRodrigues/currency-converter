// import styled from "styled-components";
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
`;

export default Header;
