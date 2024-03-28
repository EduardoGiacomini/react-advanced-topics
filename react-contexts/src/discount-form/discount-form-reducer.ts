import { State } from "./discount-form-context";

type Actions =
  | { type: "updateName"; name: string }
  | { type: "updateCountry"; country: string }
  | { type: "updateDiscount"; discount: number };

export const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case "updateName":
      return { ...state, name: action.name };
    case "updateDiscount":
      return { ...state, discount: action.discount };
    case "updateCountry":
      return { ...state, country: action.country };
  }
};
