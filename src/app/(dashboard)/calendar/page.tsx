"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const transformDate = (date: Date | undefined) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  return date?.toLocaleDateString("es-ES", options);
};

export default function CalendarPage() {
  const [firstDate, setDate] = useState<Date | undefined>(new Date());
  const [secondDate, setSecondDate] = useState<Date | undefined>(new Date());
  const [thirdDate, setThirdDate] = useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([]);

  const smallFirstDate = transformDate(firstDate);
  const smallSecondDate = transformDate(secondDate);
  const smallThirdDate = transformDate(thirdDate);

  return (
    <div className="flex flex-col items-center gap-4">
      <section className="w-full">
        <h1 className="text-2xl font-bold mb-4">Página de Calendar</h1>
        <p className="text-gray-600 mb-6">
          Esta es una página de ejemplo que muestra cómo usar el componente de
          calendario en una aplicación Next.js. Puedes personalizar el contenido
          y el estilo según tus necesidades.
        </p>
      </section>

      <section className="w-full flex flex-wrap gap-4 justify-center items-center">
        <Calendar
          mode="single"
          selected={firstDate}
          onSelect={setDate}
          className="rounded-md border"
          disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
        />
        <Calendar
          mode="single"
          selected={secondDate}
          onSelect={setSecondDate}
          className="rounded-md border"
          disabled={(date) => date > new Date()}
        />
        <Calendar
          mode="single"
          selected={thirdDate}
          onSelect={setThirdDate}
          className="rounded-md border"
          disabled={(date) => date < new Date()}
        />
        <Calendar
          mode="multiple"
          selected={multipleDates}
          onSelect={setMultipleDates}
          className="rounded-md border"
        />
      </section>

      <p>{smallFirstDate || ""}</p>
      <p>{smallSecondDate || ""}</p>
      <p>{smallThirdDate || ""}</p>
      <p>{multipleDates?.map((date) => transformDate(date)).join(", ")}</p>
    </div>
  );
}
