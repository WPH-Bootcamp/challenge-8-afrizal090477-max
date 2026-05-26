import { type ButtonProps } from "../../types";

const Button = ({
  variant = "primary",
  size = "md",
  children,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  ...props
}: ButtonProps) => {
  
  // 1. Base Styles: Efek transisi halus dan micro-interaction membal saat diklik
  const baseStyles = 
    "font-bold rounded-full transition-all duration-300 focus:outline-none tracking-wide text-center inline-flex items-center justify-center cursor-pointer active:scale-95 select-none";

  // 2. Variant Styles: Kita gunakan token warna kustom agar teksnya fleksibel mengikuti saklar tema
  const variantStyles = {
    // Primary: Latar belakang Oranye. Teksnya kita set menggunakan text-text-main agar otomatis Hitam di Light dan Putih di Dark!
    primary: 
      "bg-brand-orange text-text-main hover:bg-brand-orange/90 shadow-[0_4px_14px_rgba(245,115,22,0.35)] hover:shadow-[0_4px_20px_rgba(245,115,22,0.5)] border border-transparent",
    
    // Secondary: Latar belakang abu-abu panel, teks otomatis membalik (Hitam di light, Putih di dark)//
    secondary: 
      "bg-panel-border text-text-main border border-transparent hover:opacity-85",
    
    // Outline: Transparan dengan pinggiran border oranye, teks oranye//
    outline: 
      "border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white bg-transparent",
  };

  // 3. Size Styles: Ukuran padding tombol proporsional
  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const disabledStyles = "opacity-40 cursor-not-allowed active:scale-100";

  const buttonClasses = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabled ? disabledStyles : ""}
    ${className}
  `.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      <span className="block font-bold">
        {children}
      </span>
    </button>
  );
};

export default Button;