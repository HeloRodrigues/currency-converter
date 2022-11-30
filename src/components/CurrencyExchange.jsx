import styled from "styled-components";
import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import AmountField from "./AmountField";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import LoadingButton from "@mui/lab/LoadingButton";
import { useEffect, useState } from "react";
import ResultField from "./ResultField";

const CurrencyExchange = () => {
  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [convertedValue, setConvertedValue] = useState();
  const [isFormReady, setFormReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [currencies, setCurrencies] = useState([]);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [pageErrorMessage, setPageErrorMessage] = useState();

  const getCurrencySymbols = () => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "V51rR7pVPrG99lhDVa7HgBDixESKVV7U");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    try {
      fetch(
        "https://api.apilayer.com/exchangerates_data/symbols",
        requestOptions
      )
        .then((response) => {
          response.text().then((result) => {
            const parsedResult = JSON.parse(result);
            if (response.status === 400) {
              setPageErrorMessage(parsedResult.error["message"]);
            } else if (response.status === 429) {
              setPageErrorMessage(parsedResult.message);
            } else {
              setCurrencies(Object.keys(parsedResult.symbols));
            }
            setIsPageLoading(false);
          });
        })
        .catch(() => {
          setPageErrorMessage("Something went wrong. Try again.");
          setIsPageLoading(false);
        });
    } catch (e) {
      setPageErrorMessage("Something went wrong. Try again.");
      setIsPageLoading(false);
    }
  };

  useEffect(() => {
    getCurrencySymbols();
  }, []);

  const convert = () => {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("apikey", "V51rR7pVPrG99lhDVa7HgBDixESKVV7U");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    try {
      fetch(
        `https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`,
        requestOptions
      )
        .then((response) => {
          response.text().then((result) => {
            const parsedResult = JSON.parse(result);
            if (response.status === 400) {
              setErrorMessage(parsedResult.error["message"]);
            } else {
              setConvertedValue(parsedResult.result);
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

  if (isPageLoading) {
    return <LinearProgress sx={{ width: "100%" }} />;
  }
  if (pageErrorMessage) {
    return <ResultField value={pageErrorMessage} />;
  }

  return (
    <FormSection>
      <ExchangeSection>
        <AmountField onChange={(value) => setAmount(value)} />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={currencies}
          sx={{ width: 300 }}
          onChange={(event, newValue) => setFromCurrency(newValue)}
          renderInput={(params) => (
            <TextField {...params} label="Choose Currency" />
          )}
        />

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={currencies}
          sx={{ width: 300 }}
          onChange={(event, newValue) => setToCurrency(newValue)}
          renderInput={(params) => (
            <TextField {...params} label="Choose Currency" />
          )}
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

  @media screen and (max-width: 980px) {
    display: block;
  }

  @media screen and (max-width: 450px) {
    display: block;
    max-width: 90%;
  }
`;

const ExchangeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-block-end: 2rem;

  @media screen and (max-width: 980px) {
    margin-inline: 55px;
  }

  @media screen and (max-width: 450px) {
    margin-inline: -60px;
  }
`;

export default CurrencyExchange;
