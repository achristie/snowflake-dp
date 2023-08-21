import { ReactNode } from "react";

interface MarkProps {
  children: ReactNode;
}
export default function Mark({ children }: MarkProps) {
  return <mark>{children}</mark>;
}
