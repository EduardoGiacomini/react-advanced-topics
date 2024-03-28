import { Slider } from "@mui/material";
import { useDiscountFormState } from "./discount-form-context";

export function DiscountFormCalculation(): JSX.Element {
  const { state, onDiscountChange } = useDiscountFormState();

  return (
    <>
      <Slider
        value={state.discount}
        onChange={(_, value) => onDiscountChange(value as number)}
        defaultValue={25}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
    </>
  );
}
