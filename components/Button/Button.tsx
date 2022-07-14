import { ButtonProps } from "./Button.props";
import classnames from "classnames";
import styles from "./Button.module.css";
import Arrow from "./Arrow.svg";

export const Button = ({
  apperance,
  arrow = "none",
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={classnames(styles.button, {
        [styles.primary]: apperance === "primary",
        [styles.ghost]: apperance === "ghost"
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={classnames(styles.arrow, {
            [styles.down]: arrow === "down",
            [styles.right]: arrow === "right"
          })}
        >
          <Arrow />
        </span>
      )}
    </button>
  );
};
