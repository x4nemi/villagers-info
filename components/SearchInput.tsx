import React, { FC, InputHTMLAttributes } from 'react';

interface IconInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
}

export const SearchInput: FC<IconInputProps> = ({ icon, ...inputProps }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-2">
        {icon}
      </div>
      <input
        {...inputProps}
        className="pl-10 pr-4 py-2 border rounded-full placeholder:text-[#a1a1aa] w-full focus:outline-none focus:border-[#9bcc9b]"
      />
    </div>
  );
};
