import React from "react";
import { Route, Routes } from "react-router-dom";
import UseEffectExample from "../examples/hooks/UseEffectExample";
import UseLayoutEffectExample from "../examples/hooks/UseLayouteEffectExample/UseLayoutEffectExample";

const HooksRouter = () => {
  return (
    <Routes>
      <Route path="use-state" element={<div>use state</div>} />;
      <Route path="use-effect" element={<UseEffectExample />} />;
      <Route path="use-context" element={<div>use context</div>} />;
      <Route path="use-reducer" element={<div>use reducer</div>} />;
      <Route path="use-callback" element={<div>use callback</div>} />;
      <Route path="use-memo" element={<div>use state</div>} />;
      <Route path="use-ref" element={<div>use ref</div>} />;
      <Route path="use-layout-effect" element={<UseLayoutEffectExample />} />;
      <Route
        path="use-imperative-handle"
        element={<div>use imperative handle</div>}
      />
      ;
      <Route path="use-debug-value" element={<div>use debug value</div>} />;
    </Routes>
  );
};

export default HooksRouter;