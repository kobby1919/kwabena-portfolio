import PropTypes from "prop-types";

function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
  circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];
  if (ripple) ripple.remove();

  button.appendChild(circle);
}


function ButtonPrimary({ href, target, label, icon, classes }) {
  if (href) {
    return (
      <a href={href} className={"btn btn-primary " + classes} target={target} onClick={createRipple}>
        {label}
        {icon ? (
          <span className="icon-wrap">
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          </span>
        ) : null}
      </a>
    );
  }

  return (
    <button className={"btn btn-primary " + classes}>
      {label}
      {icon ? (
        <span className="icon-wrap">
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
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
          <span className="material-symbols-rounded floating-icon" aria-hidden="true">
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
        <span className="material-symbols-rounded floating-icon" aria-hidden="true">
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