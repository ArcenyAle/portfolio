export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-6 items-center whitespace-nowrap rounded-sm border border-line bg-secondary px-2.5 font-mono text-xs font-medium text-ink-secondary">
      {children}
    </span>
  );
}
