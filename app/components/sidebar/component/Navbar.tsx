"use client";
import React from "react";
import SearchInput from "./SearchInput";
import Input from "@/app/components/Input";

import { MdSearch } from "react-icons/md";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../../Button";

function Navbar() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      user: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
    } catch (error) {
      console.error("Error searching for users:", error);
    }
  };

  return (
    <div
      className="
    lg:fixed 
    lg:inset-x-0 
    lg:left-64 
    lg:z-40 
    xl:px-6
    m-0
    pt-2
    lg:overflow-y-auto 
    lg:border-r-[1px]
    lg:pb-2
    lg:grid
    lg:grid-cols-6
    lg:gap-4
    justify-between
    dark:border-slate-600
    dark:bg-gray-800
    bg-slate-100
    "
    >
      <div className="col-span-4">
        <SearchInput
          id="search"
          register={register}
          errors={errors}
          required
          placeholder="Search by Tx 0x0000"
        />
      </div>
      <Button fullWidth >
        jvl login
      </Button>

      <Button fullWidth >
        Connect Wallet
      </Button>
    </div>
  );
}

export default Navbar;
