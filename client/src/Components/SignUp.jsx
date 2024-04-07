import React, { useState } from 'react';
import {MultiStepForm} from "./MultiStepForm";
import {SignIn } from "./SignIn";

export const SignUp = ({isShowSideBar}) => {
  const [currentStage, setCurrentStage] = useState(1);
  const handleSignUp = () => setCurrentStage(currentStage + 1);
  const handleSignIn = () => setCurrentStage(currentStage - 1);
  isShowSideBar(false)
  return <>
  {currentStage===1 && <SignIn onSignUp={handleSignUp}/>}
  {currentStage===2 && <MultiStepForm onSignIn={handleSignIn}/>}
  </>;
};

