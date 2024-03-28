interface Props {
  discount: number;
}

export function DiscountFormPersonalInfoDiscountSituation(
  props: Props
): JSX.Element {
  const { discount } = props;

  return (
    <>
      <p>Discount: R$ {discount}</p>
    </>
  );
}
