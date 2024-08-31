"use client"
import React, { useState } from "react";

interface SubscribeFormProps {}

const SubscribeForm: React.FC<SubscribeFormProps> = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [successMesage, setSuccessMesage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error);
      }

      setEmail("");
      setSubscribed(true);
    } catch (error) {
      setError("error");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-center max-w-xs mx-auto md:max-w-md md:mx-0">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
