import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const ChooseCurrency = () => {
  const currencies = [
    "DKK",
    "EUR",
    "BRL",
    "USD",
    "GBP",
    "CAD",
    "SEK",
    "YER",
    "IRR",
    "ALL",
  ];
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={currencies}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Choose Currency" />
      )}
    />
  );
};

export default ChooseCurrency;
