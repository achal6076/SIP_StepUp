import React from "react";
import Calculator from "./Calculator";

// Calling Calculator function in input slider area

function RightPanel() {
  return (
    <div className="rightPanel">
        
        <h3>←Back</h3>
        <div className="calculator">
          <Calculator />
        </div>
      </div>

  );
}

export default RightPanel;
