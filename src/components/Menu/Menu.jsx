import React from "react";
import { Link } from "react-router-dom";
import useInitMenuHook from "./hooks/useInitMenuHook";

const Menu = React.memo(() => {
  useInitMenuHook();
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
            alt="blablalba"
          />
        </a>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          id="burger-button"
          href="##"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item has-dropdown">
            <p className="navbar-link">Hooks</p>

            <div className="navbar-dropdown">
              <Link className="navbar-item" to={"suspense"}>
                Suspense
              </Link>
              <Link className="navbar-item" to={"hooks/use-state"}>
                useState
              </Link>
              <Link className="navbar-item" to={"hooks/use-effect"}>
                useEffect
              </Link>
              <Link className="navbar-item" to={"hooks/use-context"}>
                useContext
              </Link>
              <Link className="navbar-item" to={"hooks/use-reducer"}>
                useReducer
              </Link>
              <Link className="navbar-item" to={"hooks/use-callback"}>
                useCallback
              </Link>
              <Link className="navbar-item" to={"hooks/use-memo"}>
                useMemo
              </Link>
              <Link className="navbar-item" to={"hooks/use-ref"}>
                useRef
              </Link>
              <Link className="navbar-item" to={"hooks/use-layout-effect"}>
                useLayoutEffect
              </Link>
              <Link className="navbar-item" to={"hooks/use-Imperative-handle"}>
                useImperativeHandle
              </Link>
              <Link className="navbar-item" to={"hooks/use-debug-value"}>
                useDebugValue
              </Link>
              <Link className="navbar-item" to={"hooks/use-transition"}>
                useTransition
              </Link>
              <Link className="navbar-item" to={"hooks/use-deferred-value"}>
                useDeferredValue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
});

export default Menu;

// <div>
//   <Link to={"suspense"}>Suspense</Link>
//   <Link to={"hooks/use-state"}>useState</Link>
//   <Link to={"hooks/use-effect"}>useEffect</Link>
//   <Link to={"hooks/use-context"}>useContext</Link>
//   <Link to={"hooks/use-reducer"}>useReducer</Link>
//   <Link to={"hooks/use-callback"}>useCallback</Link>
//   <Link to={"hooks/use-memo"}>useMemo</Link>
//   <Link to={"hooks/use-ref"}>useRef</Link>
//   <Link to={"hooks/use-layout-effect"}>useLayoutEffect</Link>
//   <Link to={"hooks/use-Imperative-handle"}>useImperativeHandle</Link>
//   <Link to={"hooks/use-debug-value"}>useDebugValue</Link>
//   <Link to={"hooks/use-transition"}>useTransition</Link>
//   <Link to={"hooks/use-deferred-value"}>useDeferredValue</Link>
// </div>
