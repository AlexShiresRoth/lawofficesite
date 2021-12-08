import React from "react";
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";

interface ReCaptchaParams {
  callback: (...args: any) => void;
}

const ReCaptcha = ({ callback }: ReCaptchaParams) => {
  return (
    <div>
      <GoogleReCaptchaProvider
        reCaptchaKey="6LcOiYcdAAAAANfCsA4PT50MnbxujccT3KKH2CXC"
        useEnterprise={true}
      >
        <GoogleReCaptcha onVerify={(verifyObj) => callback(verifyObj)} />
      </GoogleReCaptchaProvider>
    </div>
  );
};

export default ReCaptcha;
