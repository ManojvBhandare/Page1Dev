import LineBg from "../assets/line-bg.svg";
import Bg2 from "../assets/bg-2.svg";
import Bg3 from "../assets/bg-3.svg";

export const Interested = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center relative">
      <div className="text-zinc-800 text-[54px] font-bold mb-8 absolute top-[6rem] left-[8rem]">
        Aa Bb
      </div>
      <img
        src={LineBg}
        className="h-[13.567rem] absolute top-0 left-[19.75rem]"
        alt="hi bro"
      />
      <div className="flex justify-center items-center">
        <div className="fit h-fit px-[15rem] py-[3rem] bg-black bg-opacity-10 rounded-[20px] shadow border-4 border-white inline-flex">
          <div className="text-white text-[77.40px] font-bold">
            Interested ?
          </div>
        </div>
        <img src={Bg2} alt="" className="absolute bottom-[5rem] left-[16rem]" />
        <img
          src={Bg3}
          alt=""
          className="absolute bottom-[17rem] right-[14rem]"
        />
      </div>
    </div>
  );
};
