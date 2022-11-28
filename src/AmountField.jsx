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
          id="outlined-basic"
          label="Choose Amount"
          variant="outlined"
          onChange={(event) => onChange(event.target.value)}
        />
      </Box>
    </div>
  );
};

export default AmountField;
