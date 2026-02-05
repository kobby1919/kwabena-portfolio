// import { useState } from "react";
// import Navbar from "./Navbar";

// function Header() {

//   const [navOpen, setNavOpen] = useState(false);


//   return (
//     <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
//       <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center">
//         <h1>
//           <a href="/" className="logo">
//             <img
//               src="/images/logo.svg"
//               width={90}
//               height={90}
//               alt="Kwabena Junior"
//             />
//           </a>
//         </h1>

//         <div className="relative md:justify-self-center">
//           <button className="menu-btn md:hidden" onClick={() => setNavOpen((prev) => !prev)}>
//             <span className="material-symbols-rounded">
//               {navOpen ? 'close' : 'menu'}
//             </span>
//           </button>
//           <Navbar navOpen={navOpen} />
//         </div>
//         <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end">
//           Contact Me
//         </a>
//       </div>
//     </header>
//   );
// }

// export default Header;

import { useState } from "react";
import Navbar from "./Navbar";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      {/* Header container */}
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center relative">
        {/* Logo */}
        <h1>
          <a href="/" className="logo">
            <img
              src="/images/logo.svg"
              width={90}
              height={90}
              alt="Kwabena Junior"
            />
          </a>
        </h1>

        {/* Mobile burger + Navbar */}
        <div className="relative">
          {/* Burger button */}
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          {/* Navbar dropdown */}
          <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
        </div>

        {/* Contact button (desktop only) */}
        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}

export default Header;

