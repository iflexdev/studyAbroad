import { useState } from "react";
import LoginForm from "./LoginForm";
import StudentForm from "./StudentForm";

export default function Login() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [countryCode, setCountryCode] = useState("+91");

  return (
    <div>
      {step === 1 && (
        <LoginForm
          onProceed={() => setStep(2)}
          setEmail={setEmail}
          email={email}
          mobile={mobile}
          setMobile={setMobile}
          countryCode={countryCode}
          setCountryCode={setCountryCode}
        />
      )}
      {step === 2 && (
        <StudentForm
          email={email}
          mobile={mobile}
          setCountryCode={setCountryCode}
          countryCode={countryCode}
          onBack={() => setStep(1)} // 👈 back/loginform 
        />
      )}
    </div>
  );
}
