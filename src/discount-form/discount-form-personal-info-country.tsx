import { TextField } from "@mui/material";
import {
  useDiscountFormAPI,
  useDiscountFormState,
} from "./discount-form-context";

export function DiscountFormPersonalInfoCountry(): JSX.Element {
  const { country } = useDiscountFormState();
  const { onCountryChange } = useDiscountFormAPI();

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
