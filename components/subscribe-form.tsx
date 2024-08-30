import React from "react";

interface SubscribeFormProps {};

const SubscribeForm: React.FC<SubscribeFormProps> = ({}) => {
  return (
    <form>
      <div className="flex flex-col md:flex-row justify-center max-w-xs mx-auto md:max-w-md md:mx-0">
        <input
          type="email"
          className="form-input w-full mb-2 md:mb-0 md:mr-2"
          placeholder="Your email"
          aria-label="Your email\u2026"
        />
        <button className="btn text-white bg-cdwmcp-blue hover:bg-cdwmcp-blue">
          Subscribe
        </button>
      </div>
      {/* Success message */}
      {/* <p className="text-xs text-slate-500 mt-3 italic">Thanks for subscribing!</p> */}
    </form>
  );
};

export default SubscribeForm;
