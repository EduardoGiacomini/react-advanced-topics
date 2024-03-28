import React from "react";

interface State {
  name: string;
  country: string;
  discount: number;
}

interface Context {
  state: State;
  onNameChange: (name: string) => void;
  onCountryChange: (name: string) => void;
  onDiscountChange: (price: number) => void;
  onSave: () => void;
}

const DiscountFormContext = React.createContext<Context>({} as Context);

interface FormDataProviderProps {
  children: React.ReactNode;
}

export function FormDataProvider(props: FormDataProviderProps) {
  const { children } = props;

  const [state, setState] = React.useState<State>({
    name: "",
    country: "",
    discount: 0,
  });

  const value = React.useMemo(() => {
    const onSave = () => {
      console.log("Save", state);
    };

    const onDiscountChange = (discount: number) => {
      setState({ ...state, discount });
    };

    const onNameChange = (name: string) => {
      setState({ ...state, name });
    };

    const onCountryChange = (country: string) => {
      setState({ ...state, country });
    };

    return {
      state,
      onSave,
      onDiscountChange,
      onNameChange,
      onCountryChange,
    };
  }, [state]);

  return (
    <DiscountFormContext.Provider value={value}>
      {children}
    </DiscountFormContext.Provider>
  );
}

export const useDiscountFormState = () => React.useContext(DiscountFormContext);
