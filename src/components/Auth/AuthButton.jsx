export default function AuthButton({ children }) {
  return (
    <button className="w-full h-12 rounded-xl bg-[var(--primary-color)] text-white font-semibold hover:opacity-90 transition">
      {children}
    </button>
  );
}
