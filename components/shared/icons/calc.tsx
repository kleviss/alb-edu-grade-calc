export default function Calculator({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M3 2h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 2v1h18V4H3zm0 3v1h18V7H3zm0 3v1h18v-1H3zm0 3v1h18v-1H3zm0 3v1h18v-1H3z"
      />
    </svg>
  );
}
