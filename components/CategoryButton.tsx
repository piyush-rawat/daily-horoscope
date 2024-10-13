import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
  isselected: boolean;
}

const CategoryButton = (props: Props) => {
  return (
    <button
      className="font-indieFlower rounded-[12px] py-1 px-2"
      {...props}
      style={{
        border: props.isselected
          ? "1px solid rgba(250, 112, 112, 0.2)"
          : "1px solid rgba(250, 112, 112, 0)",
        color: props.isselected ? "#fa7070" : "#333",
        padding: "0.5rem 1rem",
        backgroundColor: props.isselected
          ? "rgba(250, 112, 112, 0.2)"
          : "rgba(250, 112, 112, 0.05)",
        borderRadius: 18,
        // marginRight: 10,
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      {props.label}
    </button>
  );
};

export default CategoryButton;
