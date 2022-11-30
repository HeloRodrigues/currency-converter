import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const AmountField = ({ onChange }) => {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            marginBlockStart: 2,
            width: 300,
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          type="number"
          InputProps={{
            inputProps: { min: 0 },
          }}
          id="outlined-basic"
          label="Choose Amount"
          variant="outlined"
          onChange={(event) =>
            event.target.value > 0
              ? onChange(event.target.value)
              : (event.target.value = undefined)
          }
        />
      </Box>
    </div>
  );
};

export default AmountField;
