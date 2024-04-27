import { animated, useTrail } from "@react-spring/web";
export const LoaderAnimation = () => {
  const [springs, springApi] = useTrail(6, () => ({
    from: {
      borderColor: "#383838",
    },
    to: {
      borderColor: "#ffffff",
    },
    loop: { reverse: true },
    delay: 750,
    config: {
      duration: 1200,
      mass: 20,
      damping: 10,
      stiffness: 300,
    },
  }));

  return (
    <div className="home-page-loader-animation flex gap-[7px]">
      {springs.map((props, index) => (
        <animated.div
          key={index}
          className="loader-animation w-[15px] h-[33px] border-[#383838] border-[1px] rounded-lg"
          style={props}
        ></animated.div>
      ))}
    </div>
  );
};
