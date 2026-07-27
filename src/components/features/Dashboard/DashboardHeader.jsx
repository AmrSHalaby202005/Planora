export default function DashboardHeader(props) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[var(--text-primary)]">
        {props.greeting}, Amr
      </h1>

      <p className="mt-2 text-[var(--text-secondary)]">
        Here's what's happening with your productivity today.
      </p>
    </div>
  );
}
