export function ArrowIcon({ external = false }: { external?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.4"
    >
      {external ? (
        <>
          <path d="M6 14 14 6M7 6h7v7" />
          <path d="M14 11v4H5V6h4" />
        </>
      ) : (
        <>
          <path d="M3 10h13M11 5l5 5-5 5" />
        </>
      )}
    </svg>
  )
}
