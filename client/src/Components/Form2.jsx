import React, { useState } from 'react';
import { Adress } from "./Adress";
import { Motherdetails } from "./Motherdetails";

export const Form2 = ({ onBack, onFormDataChange, formData }) => {
    const [step, setStep] = useState(1);
    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);
    return (
     <>
    { step===1 && < Adress onFormDataChange={onFormDataChange} formData={formData} onNext={handleNext} onBack={onBack}/>}
    { step===2 && < Motherdetails onFormDataChange={onFormDataChange} formData={formData} onNext={handleNext} onBack={handleBack}/>}

       {/* <div style={{width:'100vw', display: 'flex', justifyContent: 'center'}}>
          <form onSubmit={e => { e.preventDefault(); onSubmit(); }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             <div>Select your role</div>
             <label>
           Role:
            <input type="text" name="username" value={formData.username} onChange={onFormDataChange} />
          </label>
          <label>
            Age:
            <input type="number" name="age" value={formData.age} onChange={onFormDataChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={onFormDataChange} />
          </label>
          <label>
            Gender:
            <select name="gender" value={formData.gender} onChange={onFormDataChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={onFormDataChange} />
          </label>
          <label>
            Phone Number:
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={onFormDataChange} />
          </label>
          <label>
            Image URL:
            <input type="text" name="imageUrl" value={formData.imageUrl} onChange={onFormDataChange} />
          </label>
          <label>
            Address:
            <textarea name="address" value={formData.address} onChange={onFormDataChange}></textarea>
          </label>
          <label>
            Government ID:
            <input type="text" name="governmentId" value={formData.governmentId} onChange={onFormDataChange} />
          </label>
          <label>
            PDF Upload:
            <input type="file" name="pdfFile" onChange={onFormDataChange} />
          </label>
          <button type="back"  onClick={onBack}>Back</button>
          <button type="submit" onClicl={onSubmit}>Next</button>
        </form>
          </div> */}
          </>   
      );
    };


