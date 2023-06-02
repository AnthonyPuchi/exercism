import React, { useState } from 'react';
import { Input } from 'antd';

interface InputtProps {
  placeholder: string;
  onChange: (value: string) => void;
}

const Inputt: React.FC<InputtProps> = ({ placeholder, onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <Input placeholder={placeholder} value={value} onChange={handleChange} />
  );
};

export default Inputt;
