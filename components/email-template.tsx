import * as React from "react";
import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <Html lang="en">
    <Head />
    <Preview>CodeDancing with Milos</Preview>
    <Body>
      <div className="font-sans text-gray-800 p-6">
        {/* Add a welcoming image */}
        <img
          src="https://codedancingwithmilos.com/images/codedancingwithmilos.png"
          alt="Welcome to CodeDancing with Milos"
          className="w-full max-w-lg rounded-lg mb-6 mx-auto"
        />
        <Heading as="h1" className="text-blue-600 text-3xl mb-4">
          Welcome, {firstName}!
        </Heading>
        <p className="text-base leading-7 mb-4">
          Thank you for subscribing to <strong>CodeDancing with Milos</strong>!
          We're thrilled to have you on board. Get ready to receive the best
          insights on coding, engineering practices, and career development
          straight to your inbox.
        </p>
        <p className="text-base leading-7 mb-4">
          Whether you're looking to elevate your skills, stay updated with
          industry trends, or take your career to the next level, you're in the
          right place.
        </p>
        <p className="text-base leading-7 mb-6">
          Stay tuned for exciting content, and don’t hesitate to reach out if
          you have any questions or topics you'd like me to cover.
        </p>
        <a
          href="https://codedancingwithmilos.com"
          className="inline-block px-6 py-3 bg-blue-600 text-white text-base rounded-md transition duration-300 hover:bg-blue-700"
        >
          Visit CodeDancing with Milos
        </a>
        <p className="text-sm text-gray-600 mt-6">
          Cheers,
          <br />
          Milos from <strong>CodeDancingwithMilos</strong>
        </p>
      </div>
    </Body>
  </Html>
);
