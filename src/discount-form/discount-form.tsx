import { Card } from "@mui/material";
import { DiscountFormActions } from "./discount-form-actions";
import { DiscountFormCalculation } from "./discount-form-calculation";
import { DiscountFormPersonalInfo } from "./discount-form-personal-info";
import { FormDataProvider } from "./discount-form-context";

export function DiscountForm(): JSX.Element {
  return (
    <>
      <FormDataProvider>
        <Card sx={{ maxWidth: 500, margin: "auto", marginTop: 10, padding: 3 }}>
          <DiscountFormPersonalInfo />
          <DiscountFormCalculation />
          <DiscountFormActions />
        </Card>
      </FormDataProvider>
    </>
  );
}
