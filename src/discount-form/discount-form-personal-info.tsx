import { DiscountFormPersonalInfoName } from "./discount-form-personal-info-name";
import { DiscountFormPersonalInfoCountry } from "./discount-form-personal-info-country";
import { DiscountFormPersonalInfoDiscountSituation } from "./discount-form-personal-info-discount-situation";
import { useDiscountFormState } from "./discount-form-context";

export function DiscountFormPersonalInfo(): JSX.Element {
  const { state, onCountryChange, onNameChange } = useDiscountFormState();

  return (
    <>
      <DiscountFormPersonalInfoDiscountSituation discount={state.discount} />
      <DiscountFormPersonalInfoName name={state.name} onChange={onNameChange} />
      <DiscountFormPersonalInfoCountry
        country={state.country}
        onChange={onCountryChange}
      />
    </>
  );
}
