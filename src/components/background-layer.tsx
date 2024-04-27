import { BackgroundMatrix } from "./background-matrix";
import { MouseMoveComponent } from "./mouse-move-component";

export const BackgroundLayer = () => {
  return (
    <div className="background-layer h-screen w-screen overflow-hidden absolute">
      <MouseMoveComponent></MouseMoveComponent>
      <BackgroundMatrix></BackgroundMatrix>
    </div>
  );
};
