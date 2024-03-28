import { useDiscountFormState } from "./discount-form-context";

export function DiscountFormPersonalInfoDiscountSituation(): JSX.Element {
  const { discount } = useDiscountFormState();

  return (
    <>
      <p>Discount: R$ {discount}</p>
    </>
  );
}
