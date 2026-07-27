import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import logo from "../../../assets/images/logo.png";

export default function CircularTimer({ minutes, mode }) {
  const progress = 72;

  const data = [
    {
      name: "Progress",
      value: progress,
    },
    {
      name: "Remaining",
      value: 100 - progress,
    },
  ];

  return (
    <div className="flex justify-center lg:justify-start w-full">
      <div className="relative w-[210px] h-[210px] sm:w-[240px] sm:h-[240px] md:w-[260px] md:h-[260px] lg:w-[280px] lg:h-[280px] xl:w-[300px] xl:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            {/* Background */}
            <Pie
              data={[{ value: 100 }]}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              innerRadius="76%"
              outerRadius="86%"
              stroke="none"
              fill="rgba(255,255,255,.12)"
            />

            {/* Progress */}
            <Pie
              data={data}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              innerRadius="76%"
              outerRadius="86%"
              stroke="none"
              cornerRadius={16}
            >
              <Cell fill="white" />
              <Cell fill="transparent" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl bg-white flex items-center justify-center shadow-lg mb-3 lg:mb-4">
            <img
              src={logo}
              alt="logo"
              className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 object-contain"
            />
          </div>

          {/* Time */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-wide">
            {String(minutes).padStart(2, "0")}:00
          </h1>

          <p className="mt-2 text-sm sm:text-base lg:text-lg text-white/70 font-medium capitalize">
            {mode}
          </p>
        </div>
      </div>
    </div>
  );
}
