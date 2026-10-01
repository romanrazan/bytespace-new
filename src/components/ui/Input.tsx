import type { InputHTMLAttributes, ReactNode } from "react";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "id"> & {
  id: string;
  label: ReactNode;
  error?: string;
  containerClassName?: string;
  inputWrapperClassName?: string;
  endAdornment?: ReactNode;
};

export function Input({
  id,
  label,
  error,
  containerClassName = "",
  inputWrapperClassName = "",
  endAdornment,
  className = "",
  ...inputProps
}: InputProps) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <label className={`input-field ${containerClassName}`.trim()} htmlFor={id}>
      <span className="input-field__label">{label}</span>
      <span className={`input-field__control ${inputWrapperClassName}`.trim()}>
        <input
          {...inputProps}
          id={id}
          className={className}
          aria-describedby={errorId ?? inputProps["aria-describedby"]}
          aria-invalid={error ? true : inputProps["aria-invalid"]}
        />
        {endAdornment}
      </span>
      {error && (
        <span className="input-field__error" id={errorId}>
          {error}
        </span>
      )}
    </label>
  );
}
