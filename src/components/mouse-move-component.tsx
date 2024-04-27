import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import cn from "../utils/class-Merge";

export const MouseMoveComponent = () => {
  const [spring, springApi] = useSpring(() => ({
    from: {
      scale: 0.5,
    },
    to: {
      scale: 1,
    },
    loop: { reverse: true },
    config: {
      friction: 26,
      tension: 170,
      velocity: 2,
      duration: 1000,
    },
  }));

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const circleWidth = 250;
  const circleHeight = 250;
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <animated.div
      className={cn([
        "mouse-move-component bg-white rounded-full fixed blur-3xl -z-40 overflow-hidden ",
      ])}
      style={{
        width: `${circleWidth}px`,
        height: `${circleHeight}px`,
        transform: `translate(${position.x - circleWidth / 2}px, ${
          position.y - circleHeight / 2
        }px)`,
        ...spring,
      }}
    ></animated.div>
  );
};
