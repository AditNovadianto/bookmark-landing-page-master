import { useState } from "react";
import illustrationTab1 from "../images/illustration-features-tab-1.svg";
import illustrationTab2 from "../images/illustration-features-tab-2.svg";
import illustrationTab3 from "../images/illustration-features-tab-3.svg";

const Features = () => {
  const [simpleButton, setSimpleButton] = useState(true);
  const [speedyButton, setspeedyButton] = useState(false);
  const [easyButton, seteasyButton] = useState(false);

  const simpleHandler = () => {
    setSimpleButton(true);
    setspeedyButton(false);
    seteasyButton(false);
  };

  const speedyHandler = () => {
    setSimpleButton(false);
    setspeedyButton(true);
    seteasyButton(false);
  };

  const easyHandler = () => {
    setSimpleButton(false);
    setspeedyButton(false);
    seteasyButton(true);
  };

  const Buttons = [
    {
      text: "Simple Bookmarking",
      width: "w-[140px] md:w-full",
      func: simpleHandler,
      state: simpleButton,
      border: "border-b-[1px] border-t-[1px] md:border-t-0",
    },
    {
      text: "Speedy Searching",
      width: "w-[120px] md:w-full",
      func: speedyHandler,
      state: speedyButton,
      border: "border-b-[1px]",
    },
    {
      text: "Easy Sharing",
      width: "w-[90px] md:w-full",
      func: easyHandler,
      state: easyButton,
      border: "md:border-b-[1px]",
    },
  ];

  const Displays = [
    {
      button: simpleButton,
      image: illustrationTab1,
      alt: "illustration-tab-1",
      margin: "mt-10",
      h1: "Bookmark in one click",
      text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },
    {
      button: speedyButton,
      image: illustrationTab2,
      alt: "illustration-tab-2",
      margin: "mt-24",
      h1: "Intelligent search",
      text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    },
    {
      button: easyButton,
      image: illustrationTab3,
      alt: "illustration-tab-3",
      margin: "mt-24",
      h1: "Share your bookmarks",
      text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    },
  ];

  return (
    <>
      <div className="mt-32 px-6 py-7">
        <h1 className="font-Rubik font-semibold text-center text-Very-Dark-Blue text-2xl">
          Features
        </h1>

        <p className="font-Rubik md:max-w-[400px] md:m-auto md:mt-5 text-md text-center text-Grayish-Blue mt-5">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>

        <div className="mt-10 md:flex items-center justify-center">
          {Buttons.map((button, index) => (
            <div className="md:w-[200px]" key={index}>
              <button
                onClick={button.func}
                className={`${button.border} ${
                  button.state ? "text-Very-Dark-Blue" : "text-Grayish-Blue"
                } transition-all hover:text-Soft-Red duration-300 w-full py-3 font-Rubik font-medium border-Grayish-Blue border-opacity-50`}
              >
                {button.text}
              </button>
              <div
                className={`${button.state ? "block" : "hidden"} ${
                  button.width
                } transition-all h-1 bg-Soft-Red m-auto relative -mt-1`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {Displays.map((display, index) => (
        <div
          key={index}
          className={`${
            display.button ? "opacity-100" : "opacity-0 scale-0 absolute"
          } mt-20 max-w-[1350px] md:justify-between md:m-auto md:flex md:items-center md:gap-10`}
        >
          <div className="relative max-w-[400px] min-w-[300px]">
            <img className="px-6" src={display.image} alt={display.alt} />

            <div
              className={`${display.margin} w-[300px] h-[230px] rounded-br-[40%] -z-[200] absolute bg-Soft-Blue left-0 top-0`}
            ></div>
          </div>

          <div className="mt-20 px-6 py-7 md:max-w-[600px]">
            <h1 className="font-Rubik md:text-left text-2xl font-medium text-center text-Very-Dark-Blue">
              {display.h1}
            </h1>

            <p className="font-Rubik md:text-left mt-5 text-center text-Grayish-Blue text-md">
              {display.text}
            </p>

            <button className="px-5 block md:ml-0 m-auto py-3 hover:scale-[0.95] transition-all bg-Soft-Blue rounded-lg font-Rubik mt-7 text-white">
              More Info
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
