interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({
  children,
  className = "",
}: ContainerProps) => {
  // Class 'container' otomatis mengambil rule 1440px & padding responsif dari config di atas
  const baseStyles = "container w-full";

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