interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[68ch] px-5 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}
