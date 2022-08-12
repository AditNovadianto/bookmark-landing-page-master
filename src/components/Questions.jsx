import { useState } from "react";

const Questions = () => {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);

  const question1Handler = () => {
    setQuestion1(!question1);
    setQuestion2(false);
    setQuestion3(false);
    setQuestion4(false);
  };

  const question2Handler = () => {
    setQuestion1(false);
    setQuestion2(!question2);
    setQuestion3(false);
    setQuestion4(false);
  };

  const question3Handler = () => {
    setQuestion1(false);
    setQuestion2(false);
    setQuestion3(!question3);
    setQuestion4(false);
  };

  const question4Handler = () => {
    setQuestion1(false);
    setQuestion2(false);
    setQuestion3(false);
    setQuestion4(!question4);
  };

  const MostQuestions = [
    {
      text: "What is Bookmark?",
      button: question1Handler,
      question: question1,
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
      text: "How can I request a new browser?",
      button: question2Handler,
      question: question2,
      answer:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      text: "Is there a mobile app?",
      button: question3Handler,
      question: question3,
      answer:
        "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
    },
    {
      text: "What about other Chromium browsers?",
      button: question4Handler,
      question: question4,
      answer:
        "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    },
  ];

  return (
    <div className="mt-20 px-6 py-7">
      <h1 className="font-Rubik text-2xl text-center font-medium text-Very-Dark-Blue">
        Frequently Asked Questions
      </h1>

      <p className="mt-5 font-Rubik text-md text-center text-Grayish-Blue">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>

      <div className="mt-20 max-w-[1000px] md:m-auto md:mt-10">
        {MostQuestions.map((question, index) => (
          <div className="relative border-b-[1px] border-Grayish-Blue py-5 w-full border-opacity-50">
            <button
              key={index}
              onClick={question.button}
              className="flex items-center group gap-5 justify-between w-full"
            >
              <p className="font-Rubik w-[90%] group-hover:text-Soft-Red transition-all text-md text-left font-medium text-Very-Dark-Blue">
                {question.text}
              </p>

              <svg
                className={`${
                  question.question
                    ? "stroke-Soft-Red rotate-[180deg]"
                    : "stroke-Soft-Blue"
                } transition-all`}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="12"
              >
                <path fill="none" stroke-width="3" d="M1 1l8 8 8-8" />
              </svg>
            </button>

            <div
              className={`${
                question.question
                  ? "translate-y-0 opacity-100 relative"
                  : "-translate-y-10 opacity-0 scale-0 absolute"
              } transition-all mt-5 font-Rubik text-Grayish-Blue`}
            >
              {question.answer}
            </div>
          </div>
        ))}
      </div>

      <button className="font-Rubik hover:scale-[0.95] transition-all px-6 py-3 mt-14 text-md m-auto block bg-Soft-Blue rounded-lg text-white">
        More Info
      </button>
    </div>
  );
};

export default Questions;
