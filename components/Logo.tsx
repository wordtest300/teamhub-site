export default function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="14" fill="#0f2a1c" />
      <rect x="13" y="11" width="38" height="42" rx="4" fill="none" stroke="#f5f3ea" strokeWidth="4" />
      <line x1="13" y1="32" x2="51" y2="32" stroke="#f5f3ea" strokeWidth="4" />
      <circle cx="32" cy="32" r="8" fill="none" stroke="#f5f3ea" strokeWidth="4" />
    </svg>
  );
}
