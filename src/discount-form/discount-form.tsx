import React from "react";
import { Card } from "@mui/material";
import { DiscountFormActions } from "./discount-form-actions";
import { DiscountFormCalculation } from "./discount-form-calculation";
import { DiscountFormPersonalInfo } from "./discount-form-personal-info";

interface State {
  name: string;
  country: string;
  discount: number;
}

export function DiscountForm(): JSX.Element {
  const [state, setState] = React.useState<State>({
    name: "",
    country: "",
    discount: 0,
  });

  const onSave = () => {
    console.log("Saving", state);
  };

  const onDiscountChange = (discount: number) => {
    setState({ ...state, discount });
  };

  const onNameChange = (name: string) => {
    setState({ ...state, name });
  };

  const onCountryChange = (country: string) => {
    setState({ ...state, country });
  };

  return (
    <>
      <Card sx={{ maxWidth: 500, margin: "auto", marginTop: 10, padding: 3 }}>
        <DiscountFormPersonalInfo
          name={state.name}
          country={state.country}
          discount={state.discount}
          onNameChange={onNameChange}
          onCountryChange={onCountryChange}
        />
        <DiscountFormCalculation
          discount={state.discount}
          onChange={onDiscountChange}
        />
        <DiscountFormActions onSave={onSave} />
      </Card>
    </>
  );
}
