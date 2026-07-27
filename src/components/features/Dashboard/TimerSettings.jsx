import { FiPlus, FiMinus } from "react-icons/fi";

export default function TimerSettings({
  focusTime,
  shortBreak,
  longBreak,
  longBreakInterval,
  setFocusTime,
  setShortBreak,
  setLongBreak,
  setLongBreakInterval,
}) {
  const SettingRow = ({ title, value, setValue, min = 1, max = 60 }) => (
    <div className="flex items-center justify-between py-2 border-b border-[var(--border-color)]">
      <div>
        <h3 className="text-sm font-semibold text-[var(--text-primary)]">
          {title}
        </h3>

        <p className="text-sm text-[var(--text-secondary)]">Minutes</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => value > min && setValue(value - 1)}
          className="w-9 h-9 rounded-xl bg-[var(--background-color)] hover:bg-[var(--primary-color)] hover:text-white
              transition flex items-center justify-center"
        >
          <FiMinus />
        </button>

        <div className="w-8 text-center text-lg font-bold text-[var(--text-primary)]">
          {value}
        </div>

        <button
          onClick={() => value < max && setValue(value + 1)}
          className="w-9 h-9 rounded-xl bg-[var(--primary-color)] text-white hover:scale-105 transition flex items-center justify-center"
        >
          <FiPlus />
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-white p-8">
      <h2 className="text-3xl font-bold text-[var(--text-primary)]">
        Timer Settings
      </h2>

      <div className="mt-3 space-y-3">
        <SettingRow
          title="Focus Time"
          value={focusTime}
          setValue={setFocusTime}
        />

        <SettingRow
          title="Short Break"
          value={shortBreak}
          setValue={setShortBreak}
        />

        <SettingRow
          title="Long Break"
          value={longBreak}
          setValue={setLongBreak}
        />
      </div>

      {/* Switches */}

      <div className="mt-4 space-y-3">
        <SwitchRow title="Auto Start Breaks" />

        <SwitchRow title="Auto Start Focus Sessions" />

        <SwitchRow title="Enable Notification Sound" />
      </div>

      {/* Save */}

      <button className="w-full h-12 rounded-2xl mt-8 bg-[var(--primary-color)] text-white font-semibold hover:opacity-90 transition">
        Save Settings
      </button>
    </div>
  );
}

function SwitchRow({ title }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-medium text-[var(--text-primary)]">{title}</span>

      <button className="w-14 h-8 rounded-full bg-[var(--primary-color)] relative">
        <span className="absolute top-1 right-1 w-6 h-6 rounded-full bg-white" />
      </button>
    </div>
  );
}
