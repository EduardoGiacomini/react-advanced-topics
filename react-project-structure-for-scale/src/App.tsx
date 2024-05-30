import { Circle } from "./modules/circle";
import { Parallelogram } from "./modules/parallelogram";
import { Rectangle } from "./modules/rectangule";
import { Triangle } from "./modules/triangle";

export function App(): JSX.Element {
  return (
    <div>
      <h1>App</h1>
      <Circle />
      <Parallelogram />
      <Rectangle />
      <Triangle />
    </div>
  );
}
