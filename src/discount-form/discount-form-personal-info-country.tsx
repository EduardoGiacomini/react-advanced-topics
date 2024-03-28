import { TextField } from "@mui/material";
import {
  useDiscountFormAPI,
  useDiscountFormCountry,
} from "./discount-form-context";

export function DiscountFormPersonalInfoCountry(): JSX.Element {
  const country = useDiscountFormCountry();
  const { onCountryChange } = useDiscountFormAPI();

  console.log("DiscountFormPersonalInfoCountry rendered");

  return (
    <>
      <TextField
        value={country}
        label="Country"
        onChange={(e) => onCountryChange(e.target.value)}
      />
    </>
  );
}
