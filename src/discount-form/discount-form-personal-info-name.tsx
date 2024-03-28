import { TextField } from "@mui/material";
import {
  useDiscountFormAPI,
  useDiscountFormState,
} from "./discount-form-context";

export function DiscountFormPersonalInfoName(): JSX.Element {
  const { name } = useDiscountFormState();
  const { onNameChange } = useDiscountFormAPI();

  return (
    <>
      <TextField
        label="First name"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
      />
    </>
  );
}
