import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const baseInput =
  "w-full bg-transparent border border-stone px-4 py-3 font-body text-charcoal text-sm " +
  "placeholder:text-grey focus:outline-none focus:border-gold transition-colors duration-300";

const labelClass =
  "block text-[10px] tracking-[0.18em] uppercase font-body font-medium text-grey mb-2";

/* ─── Text / email / tel input ──────────────────────────────────────────── */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  hint?: string;
}

export function Input({ label, name, hint, className = "", ...props }: InputProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className={labelClass}>
        {label}
        {props.required && <span className="text-gold ml-0.5">*</span>}
      </label>
      <input id={name} name={name} className={baseInput} {...props} />
      {hint && <p className="mt-1.5 text-[11px] font-body text-grey">{hint}</p>}
    </div>
  );
}

/* ─── Select ─────────────────────────────────────────────────────────────── */
interface SelectProps {
  label: string;
  name: string;
  options: { label: string; value: string }[];
  required?: boolean;
  className?: string;
  defaultValue?: string;
}

export function Select({
  label,
  name,
  options,
  required,
  className = "",
  defaultValue = "",
}: SelectProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className={labelClass}>
        {label}
        {required && <span className="text-gold ml-0.5">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue={defaultValue}
        className={`${baseInput} appearance-none cursor-pointer`}
      >
        <option value="" disabled>
          Select a project type
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

/* ─── Textarea ───────────────────────────────────────────────────────────── */
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

export function Textarea({ label, name, className = "", ...props }: TextareaProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className={labelClass}>
        {label}
        {props.required && <span className="text-gold ml-0.5">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        rows={props.rows ?? 5}
        className={`${baseInput} resize-none`}
        {...props}
      />
    </div>
  );
}
