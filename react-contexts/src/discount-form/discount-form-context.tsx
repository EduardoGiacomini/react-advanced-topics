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
  onSave: (values: State) => void;
}

const DiscountFormNameContext = React.createContext<State["name"]>(
  {} as State["name"]
);
const DiscountFormCountryContext = React.createContext<State["country"]>(
  {} as State["country"]
);
const DiscountFormDiscountContext = React.createContext<State["discount"]>(
  {} as State["discount"]
);
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
    const onSave = (values: State) => {
      // TODO
      console.log("Save", values);
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
      <DiscountFormNameContext.Provider value={state.name}>
        <DiscountFormCountryContext.Provider value={state.country}>
          <DiscountFormDiscountContext.Provider value={state.discount}>
            {children}
          </DiscountFormDiscountContext.Provider>
        </DiscountFormCountryContext.Provider>
      </DiscountFormNameContext.Provider>
    </DiscountFormAPIContext.Provider>
  );
}

export const useDiscountFormName = () =>
  React.useContext(DiscountFormNameContext);
export const useDiscountFormCountry = () =>
  React.useContext(DiscountFormCountryContext);
export const useDiscountFormDiscount = () =>
  React.useContext(DiscountFormDiscountContext);
export const useDiscountFormAPI = () =>
  React.useContext(DiscountFormAPIContext);
