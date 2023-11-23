import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Link to={"hooks/use-state"}>useState</Link>
      <Link to={"hooks/use-effect"}>useEffect</Link>
      <Link to={"hooks/use-context"}>useContext</Link>
      <Link to={"hooks/use-reducer"}>useReducer</Link>
      <Link to={"hooks/use-callback"}>useCallback</Link>
      <Link to={"hooks/use-memo"}>useMemo</Link>
      <Link to={"hooks/use-ref"}>useRef</Link>
      <Link to={"hooks/use-layout-effect"}>useLayoutEffect</Link>
      <Link to={"hooks/use-Imperative-handle"}>useImperativeHandle</Link>
      <Link to={"hooks/use-debug-value"}>useDebugValue</Link>
      <Link to={"hooks/use-transition"}>useTransition</Link>
      <Link to={"hooks/use-deferred-value"}>useDeferredValue</Link>
    </div>
  );
};

export default Menu;
