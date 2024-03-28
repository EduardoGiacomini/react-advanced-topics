import { Button } from "@mui/material";
import { useDiscountFormState } from "./discount-form-context";

export function DiscountFormActions(): JSX.Element {
  const { onSave } = useDiscountFormState();

  return (
    <>
      <Button onClick={onSave}>Save</Button>
    </>
  );
}
