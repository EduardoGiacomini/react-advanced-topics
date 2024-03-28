import { TextField } from "@mui/material";
import {
  useDiscountFormAPI,
  useDiscountFormName,
} from "./discount-form-context";

export function DiscountFormPersonalInfoName(): JSX.Element {
  const name = useDiscountFormName();
  const { onNameChange } = useDiscountFormAPI();

  console.log("DiscountFormPersonalInfoName rendered");

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
