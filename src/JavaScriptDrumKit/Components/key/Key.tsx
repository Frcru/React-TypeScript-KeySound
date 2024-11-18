import { ReactNode } from "react";
import "./key.css";

interface Props {
  keyCode: number;
  type: string;
  children: ReactNode | ReactNode[];
}

export const Key = ({ keyCode, type }: Props) => {
  return (
    <div className="key" data-key={keyCode}>
      <kbd>{String.fromCharCode(keyCode)}</kbd>
      <span className="sound">{type}</span>
    </div>
  );
};
