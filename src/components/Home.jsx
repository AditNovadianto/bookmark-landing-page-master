import illustrationHero from "../images/illustration-hero.svg";

const Home = () => {
  return (
    <div className="flex flex-col max-w-[1500px] md:m-auto md:mt-14 md:justify-between md:pl-14 md:flex-row-reverse gap-10 mt-10 relative">
      <div className="max-w-[350px] min-w-[300px] absolute md:relative right-0">
        <img
          className="mt-5 w-max"
          src={illustrationHero}
          alt="illustration-hero"
        />

        <div className="w-[300px] h-[200px] rounded-bl-[40%] mt-16 -z-[200] absolute bg-Soft-Blue right-0 top-0"></div>
      </div>

      <div className="mt-[350px] max-w-[600px] m-auto md:m-0 md:mt-10 px-6">
        <h1 className="font-Rubik md:text-left font-medium text-center text-3xl text-Very-Dark-Blue">
          A Simple Bookmark Manager
        </h1>

        <p className="font-Rubik md:text-left text-md text-Grayish-Blue text-center mt-5">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>

        <div className="flex items-center md:max-w-[400px] justify-between mt-7 gap-5">
          <button className="px-5 w-full max-w-[200px] py-2 border-2 border-Soft-Blue hover:bg-white hover:text-Soft-Blue transition-all shadow-sm shadow-Very-Dark-Blue bg-Soft-Blue font-Rubik text-white text-sm rounded-lg">
            Get it on Chrome
          </button>
          <button className="px-5 w-full max-w-[200px] font-medium py-2 border-2 border-transparent hover:border-black transition-all shadow-sm shadow-Very-Dark-Blue bg-white font-Rubik text-Very-Dark-Blue text-sm rounded-lg">
            Get it on Firefox
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
