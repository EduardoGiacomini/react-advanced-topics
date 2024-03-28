import { TextField } from "@mui/material";

interface Props {
  country: string;
  onChange: (country: string) => void;
}

export function DiscountFormPersonalInfoCountry(props: Props): JSX.Element {
  const { country, onChange } = props;

  return (
    <>
      <TextField
        value={country}
        label="Country"
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
