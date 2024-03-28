import { Button } from "@mui/material";
import { useDiscountFormAPI } from "./discount-form-context";

export function DiscountFormActions(): JSX.Element {
  const { onSave } = useDiscountFormAPI();

  return (
    <>
      <Button onClick={onSave}>Save</Button>
    </>
  );
}
