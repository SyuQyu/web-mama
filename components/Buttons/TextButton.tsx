import { FC } from "react";

type Props = {
  // size: "small" | "large";
  value: string;
  className?: string;
};

const TextButton: FC<Props> = ({ value, className = "flex" }) => (
  <div className={`group transition-all ${className} justify-center w-32 relative`}>
    <button
      type="button"
      className={`inline-block no-underline text-gray500 p-2 duration-500 group-hover:tracking-widest`}
    >
      {value}
    </button>
    <div className="border-b-2 border-transparent absolute bottom-2 w-2.5 duration-500 group-hover:w-3/4 group-hover:border-gray500 group-hover:duration-500"></div>
  </div>
);

export default TextButton;
