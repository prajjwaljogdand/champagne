"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface SearchInputProps {
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  id,
  type,
  required,
  register,
}) => {
  return (
    <div className="relative w-full ">
      <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="
          text-black
          font-light
          py-4
          px-8
          text-sm
          bg-white
          w-full 
          rounded-2xl
          focus:outline-none
          dark:text-white
          dark:bg-gray-700
          border-r-[1px]
          dark:border-slate-600
        "
      />
    </div>
  );
};

export default SearchInput;
