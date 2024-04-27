import { useEffect, useState } from "react";

export const BackgroundMatrix = () => {
  const [screenWidth, setScreenWidth] = useState(
    window.innerWidth + 0.25 * window.innerHeight
  );
  const [screenHeight, setScreenHeight] = useState(
    window.innerHeight + 0.25 * window.innerWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth + 0.25 * window.innerHeight);
      setScreenHeight(window.innerHeight + 0.25 * window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const squareSize = 125;
  const spacing = 1;

  const rowCount = Math.floor(screenHeight / (squareSize + spacing));
  const colCount = Math.floor(screenWidth / (squareSize + spacing));

  return (
    <div className="background-matrix-container -z-30 fixed  bg-white bg-opacity-10 ">
      <div
        className="background-matrix -z-30 relative left-[-62px] top-[-62px]"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${colCount}, ${squareSize}px)`,
          gridTemplateRows: `repeat(${rowCount}, ${squareSize}px)`,
          gap: `${spacing}px`,
          width: `${screenWidth}px`,
          height: `${screenHeight}px`,
        }}
      >
        {Array.from({ length: rowCount * colCount }).map((_, index) => (
          <div
            key={index}
            style={{
              width: `${squareSize}px`,
              height: `${squareSize}px`,
              backgroundColor: "black",
            }}
          />
        ))}
      </div>
    </div>
  );
};
