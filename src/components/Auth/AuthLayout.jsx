export default function AuthLayout({ title, subtitle, children }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--background-color)] p-5">
      <div className="w-full max-w-md rounded-3xl bg-white shadow-xl p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[var(--primary-color)]">
            Planora
          </h1>

          <h2 className="mt-6 text-2xl font-bold text-[var(--text-primary)]">
            {title}
          </h2>

          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            {subtitle}
          </p>
        </div>

        {children}
      </div>
    </main>
  );
}
