import { Card } from "@mui/material";
import { DiscountFormActions } from "./discount-form-actions";
import { DiscountFormCalculation } from "./discount-form-calculation";
import { DiscountFormPersonalInfo } from "./discount-form-personal-info";

export function DiscountForm(): JSX.Element {
  return (
    <>
      <Card sx={{ maxWidth: 500, margin: "auto", marginTop: 10, padding: 3 }}>
        <DiscountFormPersonalInfo />
        <DiscountFormCalculation />
        <DiscountFormActions />
      </Card>
    </>
  );
}
