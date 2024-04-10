import { useId } from "react";
import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className={`inine-block mb-1  text-black font-semibold `} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-[6px] rounded-lg bg-white text-black outline-none
       focus:bg-gray-50 duration-200 border border-gray-200 w-full focus:border-solid required: ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});
export default Input;
