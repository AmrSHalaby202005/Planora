import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="relative w-full">
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search anything..."
        className="w-full h-14 rounded-2xl border border-[var(--border-color)] bg-[var(--card-color)] pr-16 pl-4 outline-none text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]"
      />

      <div className="absolute right-1 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-[var(--secondary-color)] flex items-center justify-center cursor-pointer hover:bg-[var(--primary-color)] transition">
        <FiSearch size={18} className="text-white" />
      </div>
    </div>
  );
}
