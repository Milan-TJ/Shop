import React, { useContext, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PropTypes from "prop-types";
import { ThemeContext } from "../../Helper/ThemeProvider";

const TextField = ({
  value,
  isDisabled,
  id,
  customClass,
  radius,
  legend,
  width,
  height,
  placeholder,
  prefixIcon,
  type,
  fieldProp,
  border,
  onchange,
  showlegend,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useContext(ThemeContext);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const textFieldStyle = {
    outline: "none",
    border: "none",
    padding: ".75em",
    width: "100%",
    height: height,
    backgroundColor: "transparent",
    color: "#000",
  };
  const textFieldStyleModern = {
    border: border,
    paddingInline: "0.5em",
    height: height,
    width: width,
    borderRadius: radius || "5px",
  };

  return (
    <fieldset
      style={textFieldStyleModern}
      className={`textfield-container ${customClass}`}
    >
      {showlegend !== "none" && <legend>{legend}</legend>}
      {prefixIcon === "user" && (
        <span className="prefix-icon">
          <PersonIcon />
        </span>
      )}
      {prefixIcon === "lock" && (
        <span className="prefix-icon">
          <LockIcon />
        </span>
      )}
      <input
        defaultValue={value}
        disabled={isDisabled}
        {...fieldProp}
        id={id}
        type={type === "password" && showPassword ? "text" : type}
        placeholder={placeholder}
        style={textFieldStyle}
        // onChange={ onchange}
      />
      {type === "password" && (
        <span
          className="password-toggle postfix-icon"
          onClick={toggleShowPassword}
        >
          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </span>
      )}
    </fieldset>
  );
};

TextField.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  legend: PropTypes.string,
};

const Select = ({
  required,
  value,
  isDisabled,
  id,
  border,
  type,
  options,
  fieldProp,
  legend,
  height,
  width,
  radius,
  customClass,
}) => {
  const theme = useContext(ThemeContext);
  const textFieldStyle = {
    outline: "none",
    border: "none",
    padding: ".75em",
    width: "100%",
    height: height,
    backgroundColor: "transparent",
    color: theme.color2,
  };
  const textFieldStyleModern = {
    border: border,
    paddingInline: "0.5em",
    height: height,
    width: width,
    borderRadius: radius || "5px",
  };

  if (type === "button") {
    return (
      <fieldset
        style={textFieldStyleModern}
        className={`textfield-container ${customClass}`}
      >
        <legend>{legend}</legend>
        <select
          required={required}
          disabled={isDisabled}
          {...fieldProp}
          style={textFieldStyle}
        >
          {options?.map((option, index) => (
            <option key={index} defaultValue={option}>
              {option}
            </option>
          ))}
        </select>
      </fieldset>
    );
  } else {
    return (
      <fieldset
        style={textFieldStyleModern}
        className={`textfield-container ${customClass}`}
      >
        <legend>{legend}</legend>
        <select
          disabled={isDisabled}
          id={id}
          {...fieldProp}
          defaultValue={value}
          style={textFieldStyle}
        >
          {options?.map((option, index) => (
            <option
              className={`options ${
                option === "Select Your Gender" ? "active" : ""
              }`}
              key={index}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      </fieldset>
    );
  }
};

export { TextField, Select };
