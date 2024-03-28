import { Button } from "@mui/material";

interface Props {
  onSave: () => void;
}

export function DiscountFormActions(props: Props): JSX.Element {
  const { onSave } = props;

  return (
    <>
      <Button onClick={onSave}>Save</Button>
    </>
  );
}
