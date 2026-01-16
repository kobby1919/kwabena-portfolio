import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useLenis } from "lenis/react";



function Navbar({ navOpen }) {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const lenis = useLenis();


  const initActiveBox = () => {
    console.log(lastActiveLink.current);
    console.log(activeBox.current);

    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };

  useEffect(initActiveBox, []);

  const activeCurrentLink = (event, link) => {
    event.preventDefault();
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target;

    
    activeBox.current.style.top = event.target.offsetTop + "px";
    activeBox.current.style.left = event.target.offsetLeft + "px";
    activeBox.current.style.width = event.target.offsetWidth + "px";
    activeBox.current.style.height = event.target.offsetHeight + "px";

    lenis?.scrollTo(link, {
      duration: 1.3,
      easing: (t) => 1- Math.pow(1 - t, 3),
    });



  }

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Reviews",
      link: "#reviews",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];

  return (
    <nav className={"navbar" + (navOpen ? " active" : "")}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a href={link} key={key} ref={ref} className={className} onClick={(e) => activeCurrentLink(e, link)}>
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
