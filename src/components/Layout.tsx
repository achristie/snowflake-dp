import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <article className="max-w-none prose prose-strone lg:prose-xl">
      {children}
    </article>
  );
}
