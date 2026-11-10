interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-6 min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px] ${className}`}
    >
      {children}
    </div>
  );
}
