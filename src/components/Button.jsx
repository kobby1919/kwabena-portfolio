import PropTypes from "prop-types";

function ButtonPrimary({ href, target, label, icon, classes }) {
  if (href) {
    return (
      <a href={href} className={"btn btn-primary " + classes} target={target}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </a>
    );
  }

  return (
    <button className={"btn btn-primary " + classes}>
      {label}
      {icon ? (
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
      ) : null}
    </button>
  );
}


ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

function ButtonOutline({ href, target, label, icon, classes }) {
  if (href) {
    return (
      <a href={href} className={"btn btn-outline " + classes} target={target}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </a>
    );
  }

  return (
    <button className={"btn btn-outline " + classes}>
      {label}
      {icon ? (
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
      ) : null}
    </button>
  );
}


ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}


export {
    ButtonPrimary,
    ButtonOutline,
}