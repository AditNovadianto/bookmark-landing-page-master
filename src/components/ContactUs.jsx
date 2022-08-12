import { useState } from "react";
import iconError from "../images/icon-error.svg";
import swal from "sweetalert";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const ContactUs = () => {
  const [inputEmail, setInputEmail] = useState();
  const [error, setError] = useState();

  const emailHandler = (e) => {
    setInputEmail(e.target.value);

    if (e.target.value === "") {
      setError("Whoops, make sure it's an email");
    } else {
      setError("");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let isError = false;
    let newError = "";

    if (!inputEmail) {
      newError = "Make sure you type your email";
      isError = true;
    }

    if (!validateEmail(inputEmail)) {
      newError = "Your email it's not valid";
      isError = true;
    }

    if (isError) {
      setError(newError);
      return;
    }

    swal({
      title: `Thankyou ${inputEmail}!`,
      text: "I really appreciate for your response!",
      icon: "success",
    }).then((value) => {
      if (value) {
        window.location.reload();
      }
    });
  };

  console.log(error);

  return (
    <div className="mt-24 w-full bg-Soft-Blue px-6 py-10">
      <p className="font-Rubik text-xs text-center text-white tracking-[7px] uppercase">
        35,000+ already joined
      </p>

      <h2 className="font-Rubik text-white text-2xl text-center font-medium mt-5">
        Stay up-to-date with what we’re doing
      </h2>

      <form
        onSubmit={submitHandler}
        className="mt-10 md:flex items-center max-w-[800px] md:m-auto md:mt-10 gap-5"
      >
        <div
          className={`${
            error ? "bg-Soft-Red" : "bg-transparent"
          } transition-all md:w-full p-1 rounded-lg`}
        >
          <div className="relative">
            <input
              className="font-Rubik px-4 w-full py-3 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              type="text"
              placeholder="Enter your email address"
              onChange={emailHandler}
            />

            <img
              className={`${
                error ? "block" : "hidden"
              } transition-all absolute right-3 top-[25%]`}
              src={iconError}
              alt="icon-error"
            />
          </div>

          <p className="text-white font-Rubik text-xs mt-1 font-medium italic ml-2">
            {error}
          </p>
        </div>

        <button className="px-4 py-3 border-2 border-Soft-Red hover:bg-white hover:text-Soft-Red transition-all bg-Soft-Red mt-3 md:mt-0 font-Rubik text-white font-medium text-sm rounded-lg w-[50%]">
          Contact Us
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
