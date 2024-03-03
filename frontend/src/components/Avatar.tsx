export default function Avatar({ size = "small", name }:
  {
    size?: "small" | "large",
    name: string
  }) {
  return (
    <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 
      ${size === "small" ? "w-7 h-7" : "w-9 h-9"}
    `}>
      <span className={`font-medium text-gray-600 dark:text-gray-300
        ${size === "small" ? "text-sm" : "text-base"}
      `}>{name[0]}</span>
    </div>
  )
}

