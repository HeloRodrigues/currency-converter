import React from "react";
import Header from "./components/Header";
import styled from "styled-components";
import CurrencyExchange from "./components/CurrencyExchange";

const App = () => {
  return (
    <Page>
      <Header />
      <CurrencyExchange />
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-inline: 4rem;
  margin-block: 10rem;
  margin-inline: 20rem;
  padding-block: 3rem;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #adcaff;
  box-shadow: 3px 4px 6px 3px #013365;
  border-radius: 2rem;

  @media screen and (max-width: 980px) {
    margin-inline: 10rem;
    margin-block: 10rem;
  }

  @media screen and (max-width: 450px) {
    margin-inline: 1.5rem;
    margin-block: 6rem;
    width: 53%;
  }
`;

export default App;
