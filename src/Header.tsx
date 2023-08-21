import { ReactNode } from "react";

function Header() {
  return (
    <div className="flex flex-row justify-between py-4">
      <h1 className="text-3xl text-red-400">Developer Portal</h1>
      <div>
        <ul className="flex flex-row gap-4">
          {["API", "Python", "Snowflake"].map((item) => {
            return <ListItem key={item}>{item}</ListItem>;
          })}
        </ul>
      </div>
    </div>
  );
}

interface ListItemProps {
  children: ReactNode;
}

function ListItem({ children }: ListItemProps) {
  return <li>{children}</li>;
}

export default Header;
