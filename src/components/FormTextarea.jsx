import PropTypes from "prop-types";

function FormTextarea({
  label,
  name,
  placeholder,
  required = false,
  className = "",
}) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="label">
        {label}
      </label>

      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        className={`text-field resize-y min-h-32 max-h-80 ${className}`}
      />
    </div>
  );
}

FormTextarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
};

export default FormTextarea;
