"use client";
import { validateEmail } from "@/lib/utils";
import React, { useState, useRef, useEffect } from "react";
import { toast } from "sonner";

interface SubscribeFormProps {}

const SubscribeForm: React.FC<SubscribeFormProps> = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [successMesage, setSuccessMesage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const fullNameInputRef = useRef<HTMLInputElement>(null);

  // Automatically focus on the email input when the component mounts
  useEffect(() => {
    fullNameInputRef.current?.focus();
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
          body: JSON.stringify({ fullName, email }),
        });

        if (response.status === 200) {
          setFullName("");
          setEmail("");
          setSuccessMesage("Thanks for subscribing!");
          setSubscribed(true);
          resolve({ name: fullName });
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
        return `${data?.name} has successfully subscribed! Thank you!`; // Success message with data from the promise
      },
      error: "Failed to subscribe. Please try again.",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col  justify-center max-w-xs mx-auto  ">
        <input
          ref={fullNameInputRef}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          className="form-input w-full mb-2"
          placeholder="Your Full Name"
          aria-label="Your Full Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input w-full mb-2"
          placeholder="Your Email"
          aria-label="Your Email"
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
