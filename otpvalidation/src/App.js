import "./App.css";
import firebaseApp from "./firebase";
import 'firebase/auth'

import {} from 'firebase/auth'

import { useState, useEffect } from "react";

function App() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  // console.log(firebaseApp);

  const configureCaptcha = () => {
    window.recaptchaVerifier = new firebaseApp.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();

          console.log("Recaptca verified");
        },
        defaultCountry: "NEP",
      }
    );
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();

    configureCaptcha(); // calling above function

    const phoneNumber = "+977" + " " + mobile;
    console.log(phoneNumber);


    const appVerifier = window.recaptchaVerifier;
    firebaseApp
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...

        console.log('Otp has been sent .')
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...

        console.log('Otp not sent')
      });
  };

  const onSubmitOtp = (e) =>{
    e.preventDefault();

    const code = otp;
    console.log(code);

    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;

      console.log(JSON.stringify(user))

      alert("User is Verified !")
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
      console.log("user is not verified")
    });
  }

  return (
    <>
      <div className="wrapper">
        <h1>Otp validation Demo</h1>

        <div className="mobile-cont">
          <h2>Enter Mobile Number :</h2>
          <div id="sign-in-button"></div>
          
          <form onSubmit={onSignInSubmit}>
            <input
              type="number"
              name="mobile"
              value={mobile}
              placeholder="enter mobile number"
              required
              onChange={(e) => setMobile(e.target.value)}
            />

            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="otp-form">
          <h2>Enter Otp Number : </h2>
          <form onSubmit={onSubmitOtp}>
            <input
              type="number"
              name="otp"
              value={otp}
              placeholder="enter otp"
              required
              onChange={(e) => setOtp(e.target.value)}
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
