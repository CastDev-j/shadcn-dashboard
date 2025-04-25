"use client";

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";

export default function OtpPage() {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col items-center gap-4">
      <section className="w-full">
        <h1 className="text-2xl font-bold mb-4">
          Página de OTP (One-Time Password)
        </h1>
        <p className="text-gray-600 mb-6">
          Esta es una página de ejemplo para mostrar el uso de OTP (One-Time
          Password) en una aplicación Next.js. Puedes usar este espacio para
          agregar más contenido o ejemplos relacionados con OTP.
        </p>
      </section>

      <section className="w-full flex flex-col items-center gap-4">
        <InputOTP
          maxLength={6}
          value={value}
          onChange={setValue}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </section>

      <section className="w-full flex flex-col items-center gap-4">
        <h2 className="text-xl font-bold mb-4">Código OTP Ingresado:</h2>
        <p className="text-gray-600">{value}</p>
      </section>
    </div>
  );
}
