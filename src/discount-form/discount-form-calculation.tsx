import { Slider } from "@mui/material";
import {
  useDiscountFormAPI,
  useDiscountFormDiscount,
} from "./discount-form-context";

export function DiscountFormCalculation(): JSX.Element {
  const discount = useDiscountFormDiscount();
  const { onDiscountChange } = useDiscountFormAPI();

  console.log("DiscountFormCalculation rendered");

  return (
    <>
      <Slider
        value={discount}
        onChange={(_, value) => onDiscountChange(value as number)}
        defaultValue={25}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
    </>
  );
}
