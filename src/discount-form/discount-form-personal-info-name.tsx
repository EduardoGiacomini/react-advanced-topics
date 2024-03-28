import { TextField } from "@mui/material";

interface Props {
  name: string;
  onChange: (name: string) => void;
}

export function DiscountFormPersonalInfoName(props: Props): JSX.Element {
  const { name, onChange } = props;

  return (
    <>
      <TextField
        label="First name"
        value={name}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
