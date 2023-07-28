import { ReactNode } from "react";
import "./Feature.scss";

interface Props {
  children: ReactNode;
}

const Feature = ({ children }: Props) => {
  return <div className="feature">{children}</div>;
};

export default Feature;
