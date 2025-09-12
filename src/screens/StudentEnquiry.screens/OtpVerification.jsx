import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../../components/ui/input-otp";
// import Alert from "../../../../components/ui/Alert.button";
import { handleResendOtp, handleVerifyOTP } from "../../api/ApiCallHandler.api";
import Alert from "../../utils/defaults/Alert.button";
// import PageTitle from "../../../../utils/defaultHandlers/PageTitle.root";

export default function OtpVerification({
  onProceed,
  mobile,
}) {
  const [otp, setOtp] = useState("");
  const [alert, setAlert] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isResend, setIsResend] = useState(false);

  // const value = selectOption?.value || (type === "email" ? email : phone);

  const handleOTPVerify = async (e) => {
    e.preventDefault();
    if (!otp || otp.length !== 6 || isNaN(otp)) {
      setAlert({
        type: "warning",
        message: "Please enter a valid 6-digit OTP",
      });
      return;
    }
    await handleVerifyOTP(mobile, otp, setAlert, setIsLoading, onProceed, setIsResend);
  };

  const resendOTP = async (e) => {
    e.preventDefault();
    await handleResendOtp(mobile, setAlert, setIsLoading, onProceed);
  }

  /* ---------------------------- mask phone number --------------------------- */
  function maskPhone(phone) {
    if (!phone) return phone;

    const visibleDigits = 4;
    const maskedLength = Math.max(phone.length - visibleDigits, 0);
    const maskedPart = "*".repeat(maskedLength);

    return `${maskedPart}${phone.slice(-visibleDigits)}`;
  }

  return (
    <>
      {/* <PageTitle pageKey="passwordResetStep2" /> */}
      <div className="p-10 h-screen flex justify-center items-center">
        <div className="space-y-[24px] w-fit bg-gray-100 shadow rounded-2xl p-8">
          <div className="space-y-[16px]">
            <p className="font-bold text-[32px]">Enter OTP</p>
            <p className="text-lg baseText">
              We have sent an OTP at{" "}
              <span className="font-semibold">
                {`+91 ${maskPhone(mobile)}`}
              </span>
            </p>
          </div>
          <div className="mb-6 space-y-[16px]">
            <p className="text-base ">
              Enter 6 Digit OTP{" "}
              <span className="font-medium text-red-500">*</span>
            </p>
            <div className="flex items-center justify-center">
              <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} className="h-12 w-13" />
                </InputOTPGroup>
                <InputOTPGroup>
                  <InputOTPSlot index={1} className="h-12 w-13" />
                </InputOTPGroup>
                <InputOTPGroup>
                  <InputOTPSlot index={2} className="h-12 w-13" />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} className="h-12 w-13" />
                </InputOTPGroup>
                <InputOTPGroup>
                  <InputOTPSlot index={4} className="h-12 w-13" />
                </InputOTPGroup>
                <InputOTPGroup>
                  <InputOTPSlot index={5} className="h-12 w-13" />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>
          <div className="space-y-auto">
            <button
              type="submit"
              disabled={isLoading}
              className="items-center w-full h-12 mb-4 font-semibold buttonTextColor rounded-md cursor-pointer bg-primary text-white"
              onClick={handleOTPVerify}
            >
              {isLoading ? "Sending otp..." : "Confirm & Next"}
            </button>

            {isResend &&
              <button
                onClick={resendOTP}
                className="py-4 space-x-2 font-semibold text-center"
              >
                Resend Otp
              </button>
            }
            {alert && (
              <Alert
                type={alert.type}
                message={alert.message}
                onClose={() => setAlert(null)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
