import { DiscountFormPersonalInfoName } from "./discount-form-personal-info-name";
import { DiscountFormPersonalInfoCountry } from "./discount-form-personal-info-country";
import { DiscountFormPersonalInfoDiscountSituation } from "./discount-form-personal-info-discount-situation";

interface Props {
  name: string;
  country: string;
  discount: number;
  onNameChange: (name: string) => void;
  onCountryChange: (country: string) => void;
}

export function DiscountFormPersonalInfo(props: Props): JSX.Element {
  const { name, country, discount, onNameChange, onCountryChange } = props;

  return (
    <>
      <DiscountFormPersonalInfoDiscountSituation discount={discount} />
      <DiscountFormPersonalInfoName onChange={onNameChange} name={name} />
      <DiscountFormPersonalInfoCountry
        onChange={onCountryChange}
        country={country}
      />
    </>
  );
}
