import PropTypes from "prop-types";

function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
  required = false,
  className = "",
}) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="label reveal-up">
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className={`text-field reveal-up ${className}`}
      />
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
};

export default FormInput;



         

           
