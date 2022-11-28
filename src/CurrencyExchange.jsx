import styled from "styled-components";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import AmountField from "./AmountField";
import LoadingButton from "@mui/lab/LoadingButton";
import { useEffect, useState } from "react";
import ResultField from "./ResultField";

const CurrencyExchange = () => {
  const currencies = ["DKK", "EUR", "BRL", "USD", "GBP"];

  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [convertedValue, setConvertedValue] = useState();
  const [isFormReady, setFormReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const convert = () => {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("apikey", "CRFfu76OrLYkwt7VLGL62jPEwNqDASW1");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    try {
      fetch(
        ` https://api.apilayer.com/exchangerates_data/latest?symbols=${toCurrency}&base=${fromCurrency}`,
        requestOptions
      )
        .then((response) => {
          response.text().then((result) => {
            const parsedResult = JSON.parse(result);
            if (response.status === 400) {
              setErrorMessage(parsedResult.error["message"]);
            } else {
              setConvertedValue(parsedResult.rates[toCurrency]);
            }
            setIsLoading(false);
          });
        })
        .catch(() => {
          setErrorMessage("Something went wrong. Try again.");
          setIsLoading(false);
        });
    } catch (e) {
      setErrorMessage("Something went wrong. Try again.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (amount && fromCurrency && toCurrency) {
      setFormReady(true);
    } else {
      setFormReady(false);
    }
  }, [amount, fromCurrency, toCurrency]);

  return (
    <FormSection>
      <ExchangeSection>
        <AmountField onChange={(value) => setAmount(value)} />

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={currencies}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Choose Currency" />
          )}
          onChange={(event, newValue) => setFromCurrency(newValue)}
        />

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={currencies}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Choose Currency" />
          )}
          onChange={(event, newValue) => setToCurrency(newValue)}
        />
        <LoadingButton
          loading={isLoading}
          variant="outlined"
          onClick={convert}
          disabled={!isFormReady}
        >
          Convert
        </LoadingButton>
      </ExchangeSection>
      {convertedValue && <ResultField value={convertedValue} />}
      {errorMessage && <ResultField value={errorMessage} />}
    </FormSection>
  );
};

const FormSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const ExchangeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default CurrencyExchange;
