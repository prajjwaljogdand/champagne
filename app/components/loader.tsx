"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Loader() {
  const router = useRouter();

  useEffect(() => {
    // After 2 seconds, redirect to a different page
    const redirectTimeout = setTimeout(() => {
      router.push("/dashboard");
    }, 500);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [router]);

  return (
    <div className="lg:w-full lg:flex lg:flex-row justify gap-12 lg:h-screen ">
      <div className="lg:bg-[#dc1a22] lg:flex lg:flex-col lg:justify-center lg:w-full">
        <Image
          height="16"
          width="16"
          className="mx-auto w-auto"
          src="/images/jvl-logo.gif"
          alt="Logo"
        />
        <div className="text-center text-md">Loading...</div>
      </div>
    </div>
  );
}
