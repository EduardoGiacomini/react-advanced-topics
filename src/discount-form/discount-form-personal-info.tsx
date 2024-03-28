import { DiscountFormPersonalInfoName } from "./discount-form-personal-info-name";
import { DiscountFormPersonalInfoCountry } from "./discount-form-personal-info-country";
import { DiscountFormPersonalInfoDiscountSituation } from "./discount-form-personal-info-discount-situation";

export function DiscountFormPersonalInfo(): JSX.Element {
  console.log("DiscountFormPersonalInfo rendered");

  return (
    <>
      <DiscountFormPersonalInfoDiscountSituation />
      <DiscountFormPersonalInfoName />
      <DiscountFormPersonalInfoCountry />
    </>
  );
}
