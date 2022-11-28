import React from "react";
import Header from "./Header";
import styled from "styled-components";
import CurrencyExchange from "./CurrencyExchange";

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
  margin-block: 10rem;
  margin-inline: 20rem;
  padding-block: 3rem;
  padding-inline: 3rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #adcaff;
  box-shadow: 3px 4px 6px 3px #013365;
  border-radius: 2rem;
`;

export default App;
