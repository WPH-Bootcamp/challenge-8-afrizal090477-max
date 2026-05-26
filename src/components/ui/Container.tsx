
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({
  children,
  className = "",
}: ContainerProps) => {
  // Base styles responsif bawaan template untuk pembungkus halaman
  const baseStyles = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

  const containerClasses = `
    ${baseStyles}
    ${className}
  `.trim();

  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
};

export default Container;