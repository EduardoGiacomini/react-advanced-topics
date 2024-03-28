import { Button } from "@mui/material";
import {
  useDiscountFormAPI,
  useDiscountFormCountry,
  useDiscountFormDiscount,
  useDiscountFormName,
} from "./discount-form-context";

export function DiscountFormActions(): JSX.Element {
  const name = useDiscountFormName();
  const country = useDiscountFormCountry();
  const discount = useDiscountFormDiscount();
  const { onSave } = useDiscountFormAPI();

  console.log("DiscountFormActions rendered");

  return (
    <>
      <Button onClick={() => onSave({ name, country, discount })}>Save</Button>
    </>
  );
}
