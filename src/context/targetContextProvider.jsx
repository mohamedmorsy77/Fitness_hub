import React, { createContext, useRef, useState } from "react";

export const TargetContext = createContext(null);
function TargetContextProvider({ children }) {
  const [selectedTarget, setSelectedTarget] = useState("");
  const [showTargetCard, setShowTargetCard] = useState(false);
  const targetRef = useRef(null);
  return (
    <TargetContext.Provider
      value={{
        selectedTarget,
        setSelectedTarget,
        showTargetCard,
        setShowTargetCard,
        targetRef,
      }}
    >
      {children}
    </TargetContext.Provider>
  );
}

export default TargetContextProvider;
