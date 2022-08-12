import logoChrome from "../images/logo-chrome.svg";
import logoFirefox from "../images/logo-firefox.svg";
import logoOpera from "../images/logo-opera.svg";
import bgDots from "../images/bg-dots.svg";

const MediaExtensions = [
  {
    image: logoChrome,
    alt: "logo-chrome",
    h2: "Add to Chrome",
    text: "Minimum version 62",
    margin: "mt-20 md:mt-10",
  },
  {
    image: logoFirefox,
    alt: "logo-firefox",
    h2: "Add to Firefox",
    text: "Minimum version 55",
    margin: "md:mt-36 mt-20 md:mt-10",
  },
  {
    image: logoOpera,
    alt: "logo-opera",
    h2: "Add to Opera",
    text: "Minimum version 46",
    margin: "md:mt-60 mt-20 md:mt-10",
  },
];

const Extensions = () => {
  return (
    <div className="mt-20 px-6 py-7">
      <h1 className="font-Rubik text-2xl text-Very-Dark-Blue text-center font-medium">
        Download the extension
      </h1>

      <p className="font-Rubik text-md md:max-w-[500px] md:m-auto md:mt-5 text-center text-Grayish-Blue mt-5">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>

      <div className="md:flex items-center gap-10 justify-center">
        {MediaExtensions.map((media, index) => (
          <div key={index} className={`${media.margin} mt-5`}>
            <div>
              <img className="m-auto" src={media.image} alt={media.alt} />
              <h2 className="font-Rubik text-xl font-medium text-center mt-7 text-Very-Dark-Blue">
                {media.h2}
              </h2>

              <p className="mt-3 font-Rubik text-md text-center text-Grayish-Blue">
                {media.text}
              </p>

              <img className="mt-7 m-auto" src={bgDots} alt="bg-dots" />

              <div className="px-10 mt-7 shdw pb-5">
                <button className="px-7 w-full py-2 border-2 hover:text-Soft-Blue hover:bg-white transition-all border-Soft-Blue text-white font-medium bg-Soft-Blue rounded-lg m-auto block">
                  Add & Install Extension
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extensions;
