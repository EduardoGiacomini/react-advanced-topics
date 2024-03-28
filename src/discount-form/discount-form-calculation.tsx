import { Slider } from "@mui/material";

interface Props {
  discount: number;
  onChange: (discount: number) => void;
}

export function DiscountFormCalculation(props: Props): JSX.Element {
  const { discount, onChange } = props;

  return (
    <>
      <Slider
        value={discount}
        onChange={(_, value) => onChange(value as number)}
        defaultValue={25}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
    </>
  );
}
