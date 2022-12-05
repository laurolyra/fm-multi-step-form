import React, { createContext, ReactNode, useState } from 'react';

type FormInfoProps = {
  children: ReactNode;
};

type UserData = {
  name: string;
  email: string;
  // phoneNumber: number;
}

interface IFormInfo {
  step: number;
  setStep: (newState: number) => void;
  user: UserData;
  setUser: (newState: UserData) => void;
}

const initialValue = {
  step: 0,
  setStep: () => ({}),
  user: {} as UserData,
  setUser: () => ({}),
};

export const FormInfoContext = createContext<IFormInfo>(initialValue);

export const FormInfoProvider = ({ children }: FormInfoProps) => {
  const [step, setStep] = useState(initialValue.step);
  const [user, setUser] = useState(initialValue.user);

  const context = {
    step,
    setStep,
    user,
    setUser,
  };
  return (
    <FormInfoContext.Provider value={context}>
      {children}
    </FormInfoContext.Provider>
  );
};
