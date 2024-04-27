import { Logo } from "../components/logo";
import { LoaderAnimation } from "../components/anime-loader";

export const Home = () => {
  return (
    <div className="home-section z-0 flex flex-col gap-[133px] items-center h-screen w-screen justify-center">
      <div className="hero-section-text-content flex flex-col gap-[62px] items-center justtify-center">
        <Logo></Logo>
        <h1 className="hero-section-title text-white text-4xl text-bold text-[4.83rem] font-bold relative ">
          Who are we?
          <div className="shadow-highlight w-[100%] h-[300%] rounded-b-full blur-3xl opacity-25 bg-white absolute top-[130%] "></div>
        </h1>
        <p className="w-[1109px] p-[10px] text-center text-zinc-500 text-[1.9rem] font-semibold">
          "We're more than just devs – we bring simplicity to digital
          brilliance. As your creative allies, we turn ideas into captivating
          realities, making your brand uniquely stand out in the digital
          landscape. Welcome to a space where success is beautifully
          straightforward."
        </p>
      </div>
      <div className="home-nav-section flex-col flex gap-[40px] items-center">
        <LoaderAnimation />
      </div>
    </div>
  );
};
