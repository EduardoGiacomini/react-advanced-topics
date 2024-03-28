import React, { useMemo } from "react";
import { reducer } from "./discount-form-reducer";

export interface State {
  name: string;
  country: string;
  discount: number;
}

interface API {
  onNameChange: (name: string) => void;
  onCountryChange: (name: string) => void;
  onDiscountChange: (price: number) => void;
  onSave: () => void;
}

const DiscountFormDataContext = React.createContext<State>({} as State);
const DiscountFormAPIContext = React.createContext<API>({} as API);

interface FormDataProviderProps {
  children: React.ReactNode;
}

export function FormDataProvider(props: FormDataProviderProps) {
  const { children } = props;

  const [state, dispatch] = React.useReducer(reducer, {
    name: "",
    country: "",
    discount: 0,
  } as State);

  const api = useMemo(() => {
    const onSave = () => {
      // TODO
    };

    const onDiscountChange = (discount: number) => {
      dispatch({ type: "updateDiscount", discount });
    };

    const onNameChange = (name: string) => {
      dispatch({ type: "updateName", name });
    };

    const onCountryChange = (country: string) => {
      dispatch({ type: "updateCountry", country });
    };

    return {
      onSave,
      onDiscountChange,
      onNameChange,
      onCountryChange,
    };
  }, []);

  return (
    <DiscountFormAPIContext.Provider value={api}>
      <DiscountFormDataContext.Provider value={state}>
        {children}
      </DiscountFormDataContext.Provider>
    </DiscountFormAPIContext.Provider>
  );
}

export const useDiscountFormState = () =>
  React.useContext(DiscountFormDataContext);
export const useDiscountFormAPI = () =>
  React.useContext(DiscountFormAPIContext);
