import React, { useState } from 'react';
import Inputt from '../components/Inputt';

export const TwoFer: React.FC = () => {
  const [name, setName] = useState('you');
  const handleChange = (value: string) => {
    setName(value);
  };
  const message = `One for ${name}, one for me.`;

  return (
    <div>
      <Inputt placeholder="Enter your name" onChange={handleChange} />
      <p>{message}</p>
    </div>
  );
};

export default TwoFer;
