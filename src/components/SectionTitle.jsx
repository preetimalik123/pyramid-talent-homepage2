export default function SectionTitle({ children }) {
  return (
    <h2
      className={`text-sm font-semibold uppercase tracking-widest text-violet-300`}
    >
      {children}
    </h2>
  );
}