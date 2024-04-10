function Button({
  children,
  type = "button",
  bgColor = "bg-pink-500",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`w-40 py-1 rounded-lg  ${textColor} ${bgColor} transition-all duration-400 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
