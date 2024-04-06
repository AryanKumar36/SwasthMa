import React, { useState } from 'react';
// import Form1 from './Form1'; // Adjust the import path as necessary
import {Form2} from './Form2'; // Adjust the import path as necessary
import {General} from './General';
import { Form1 } from './Form1';

export const MultiStepForm = ({onSignIn}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Initial state for all form fields
    firstname: '',
    lastname: ' ',
    age: '',
    email: '',
    gender: '',
    password: '',
    phoneNumber: '',
    imageUrl: '',
    address: '',
    governmentId: '',
    pdfFile: null
  });

  const handleNext = () => setCurrentStep(currentStep + 1);
  const handleBack = () => setCurrentStep(currentStep - 1);
  const handleFormDataChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here, handle the final form submission, such as sending the data to a server.
    // After submission, you might want to redirect the user or clear the form.
  };

  return (
    <div>
      {currentStep === 1 && <General onLogIn={onSignIn} onNext={handleNext} onFormDataChange={handleFormDataChange} formData={formData} />}
      {currentStep === 2 && <Form1  onNext={handleNext} />}
      {currentStep === 3 && <Form2  onBack={handleBack} onFormDataChange={handleFormDataChange} formData={formData} />}
      {/* {currentStep === 1 && <General onNext={handleNext} onFormDataChange={handleFormDataChange} formData={formData} />} */}

      {/* Optionally, render a submit button or additional forms for more steps */}
    </div>
  );
};

// export default MultiStepForm;
