import { Children } from "react";
import PropTypes from "prop-types";

const SplitScreen = ({ children, className = "" }) => {
  if (!Array.isArray(children) || children.length !== 2) {
    throw new Error("SplitScreen component must have exactly two children.");
  }

  const [left, right] = Children.toArray(children);

  return (
    <div className={`splitscreen ${className}`}>
      <div className="splitscreen__left">{left}</div>
      <div className="splitscreen__right">{right}</div>
    </div>
  );
};

SplitScreen.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  className: PropTypes.string,
};

export default SplitScreen;
