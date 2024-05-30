import { useState } from "react";

interface Props {
  children: JSX.Element[];
}

function App({ children }: Props) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const onScroll = (e: any) => {
    setScrollPosition(e.target.scrollTop);
  };

  console.log(scrollPosition);
  console.log("App rendered");

  return (
    <div style={{ height: "100vh", overflowY: "scroll" }} onScroll={onScroll}>
      {children}
    </div>
  );
}

export default App;
