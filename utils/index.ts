// Local Part ([a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+`):
// 	•	Allows alphanumeric characters and special characters that are valid in email addresses (e.g., !#$%&'*+/=?^_{|}~-`).
// 	•	@ Symbol (@):
// 	•	Separates the local part from the domain.
// 	•	Domain Part ([a-zA-Z0-9-]+):
// 	•	Allows alphanumeric characters and hyphens for the domain name.
// 	•	Top-Level Domain (\.[a-zA-Z]{2,}):
// 	•	Ensures the domain ends with a valid top-level domain (e.g., .com, .org, etc.).
// 	•	Supports two-letter TLDs or longer.
// 	•	Optional Second-Level Domain ((?:\.[a-zA-Z]{2,})?):
// 	•	Allows an optional second-level domain for cases like co.uk or edu.in.

// This regex is robust, handling most real-world email address formats. You can further refine it if needed, depending on specific business or domain requirements.

export const validateEmail = (email: string) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
  return emailRegex.test(email);
};