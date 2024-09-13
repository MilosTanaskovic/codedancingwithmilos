"use client";
import { validateEmail } from "@/utils";
import React, { useState, useRef, useEffect } from "react";
import { toast } from "sonner";

interface SubscribeFormProps {}

const SubscribeForm: React.FC<SubscribeFormProps> = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [successMesage, setSuccessMesage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const emailInputRef = useRef<HTMLInputElement>(null);

  // Automatically focus on the email input when the component mounts
  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);

 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Client-side email validation
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Create the promise that resolves when the API request is done
    const subscriptionPromise = new Promise(async (resolve, reject) => {
      try {
        const response = await fetch("/api/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (response.status === 200) {
          setEmail("");
          setSuccessMesage("Thanks for subscribing!");
          setSubscribed(true);
          resolve({ name: email }); // Resolve with email or any identifier
        } else {
          const { error } = await response.json();
          throw new Error(error);
        }
      } catch (error) {
        reject(error); // Reject the promise with the error
      }
    });

    // Show the toast.promise based on the subscription promise
    toast.promise(subscriptionPromise, {
      loading: "Subscribing...",
      success: (data: any) => {
        return `${data?.name} has successfully subscribed!`; // Success message with data from the promise
      },
      error: "Failed to subscribe. Please try again.",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-center max-w-xs mx-auto md:max-w-md md:mx-0">
        <input
          ref={emailInputRef}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input w-full mb-2 md:mb-0 md:mr-2"
          placeholder="Your email"
          aria-label="Your email"
        />
        <button
          className="btn text-white bg-cdwmcp-blue hover:bg-cdwmcp-blue"
          disabled={!email} // Disable button if email is empty
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default SubscribeForm;