import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}

export default function Container({ children, className = "", narrow }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-6 md:px-10 lg:px-16 xl:px-20 ${
        narrow ? "max-w-3xl" : "max-w-site"
      } ${className}`}
    >
      {children}
    </div>
  );
}
