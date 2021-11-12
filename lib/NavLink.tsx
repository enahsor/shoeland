import React from "react";

export default function NavLink({
  children,
  href,
  ...props
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
}
