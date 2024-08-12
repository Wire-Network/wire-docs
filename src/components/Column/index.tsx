import * as React from "react";
import { ReactNode, CSSProperties } from "react";
// Import clsx library for conditional classes.
import * as clsx from "clsx";

interface ColumnProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

interface ColumnsProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}
// Define the Column component as a function
// with children, className, style as properties
// Look https://infima.dev/docs/ for learn more.
// Style only affects the element inside the column, but we could have also made the same distinction as for the classes.
export function Column({ children, className, style }: ColumnProps) {
  return (
    <div className={clsx("col", className)} style={style}>
      {children}
    </div>
  );
}

export default function Columns({ children, className, style }: ColumnsProps) {
  return (
    // This section encompasses the columns that we will integrate with children from a dedicated component to allow the addition of columns as needed
    <div className="container center">
      <div className={clsx("row", className)} style={style}>
        {children}
      </div>
    </div>
  );
}
