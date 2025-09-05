import { useState } from "react";
import LoginForm from "./LoginForm";
import StudentForm from "./StudentForm";

export default function Login() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  return (
    <div>
      {step === 1 && (
        <LoginForm
          onProceed={() => setStep(2)}
          setEmail={setEmail}
          email={email}
          mobile={mobile}
          setMobile={setMobile}
        />
      )}
      {step === 2 && (
        <StudentForm
          email={email}
          mobile={mobile}
          onBack={() => setStep(1)} // 👈 back/loginform 
        />
      )}
    </div>
  );
}
