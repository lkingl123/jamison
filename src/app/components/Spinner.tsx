// components/Spinner.tsx
export default function Spinner({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 py-6 text-gray-600">
      <svg
        className="animate-spin h-8 w-8 text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 00-8 8z"
        ></path>
      </svg>
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
}
