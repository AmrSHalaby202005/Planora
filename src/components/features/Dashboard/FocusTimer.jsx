import { useState } from "react";
import { FiPlay, FiPause, FiRotateCcw } from "react-icons/fi";
import CircularTimer from "./CircularTimer";
import TimerSettings from "./TimerSettings";

export default function FocusTimer() {
  const [focusTime, setFocusTime] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [longBreakInterval, setLongBreakInterval] = useState(4);

  const [mode, setMode] = useState("Focus");
  const [isRunning, setIsRunning] = useState(false);

  const currentTime =
    mode === "Focus"
      ? focusTime
      : mode === "Short Break"
        ? shortBreak
        : longBreak;

  return (
    <div className="w-full max-w-[1700px] mx-auto bg-[var(--card-color)] rounded-[28px] overflow-hidden border border-[var(--border-color)] shadow-lg mb-6">
      <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_.8fr]">
        {/* Left */}
        <div className="relative overflow-hidden bg-[var(--primary-color)] px-5 py-8 sm:px-8 md:px-10 lg:px-12">
          {/* Background */}
          <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-white/5 blur-2xl"></div>

          <div className="absolute -left-24 bottom-0 w-[220px] h-[220px] rounded-full bg-white/5 blur-xl"></div>

          <div className="relative z-10">
            {/* Header */}
            <span className="text-white/70 text-xs sm:text-sm uppercase tracking-[4px]">
              Planora
            </span>

            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Focus Session
            </h2>

            {/* Modes */}
            <div className="flex flex-wrap justify-center xl:justify-start gap-3 mt-8">
              {["Focus", "Short Break", "Long Break"].map((item) => (
                <button
                  key={item}
                  onClick={() => setMode(item)}
                  className={`px-5 py-3 rounded-2xl font-medium transition-all duration-300
                  ${
                    mode === item
                      ? "bg-white text-[var(--primary-color)] shadow-lg"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Timer + Buttons */}
            <div className="mt-6 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              <div className="flex justify-center items-center">
                <CircularTimer minutes={currentTime} mode={mode} />
              </div>

              {/* Buttons */}
              <div className="flex flex-col items-center w-full lg:w-auto gap-4">
                <button
                  onClick={() => setIsRunning(!isRunning)}
                  className="flex items-center justify-center gap-2 px-4 w-full max-w-[240px] h-12 rounded-xl bg-white text-[var(--primary-color)] font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                >
                  {isRunning ? (
                    <>
                      <FiPause size={20} />
                      Pause
                    </>
                  ) : (
                    <>
                      <FiPlay size={20} />
                      Start Session
                    </>
                  )}
                </button>

                <button className="flex items-center justify-center gap-2 w-full max-w-[240px] h-12 rounded-xl border border-white/30 bg-white/10 text-white font-medium backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/60 active:scale-95">
                  <FiRotateCcw size={18} />
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="w-full">
          <TimerSettings
            focusTime={focusTime}
            shortBreak={shortBreak}
            longBreak={longBreak}
            longBreakInterval={longBreakInterval}
            setFocusTime={setFocusTime}
            setShortBreak={setShortBreak}
            setLongBreak={setLongBreak}
            setLongBreakInterval={setLongBreakInterval}
          />
        </div>
      </div>
    </div>
  );
}
