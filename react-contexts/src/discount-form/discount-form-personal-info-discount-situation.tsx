import { useDiscountFormDiscount } from "./discount-form-context";

export function DiscountFormPersonalInfoDiscountSituation(): JSX.Element {
  const discount = useDiscountFormDiscount();

  console.log("DiscountFormPersonalInfoDiscountSituation rendered");

  return (
    <>
      <p>Discount: R$ {discount}</p>
    </>
  );
}
