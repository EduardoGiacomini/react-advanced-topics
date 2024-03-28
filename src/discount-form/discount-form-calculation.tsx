import { Slider } from "@mui/material";
import {
  useDiscountFormAPI,
  useDiscountFormState,
} from "./discount-form-context";

export function DiscountFormCalculation(): JSX.Element {
  const { discount } = useDiscountFormState();
  const { onDiscountChange } = useDiscountFormAPI();

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
