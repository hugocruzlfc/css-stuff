import React, { useEffect } from "react";

export const Buttons: React.FC = () => {
  const syncPointer = ({
    x: pointerX,
    y: pointerY,
  }: {
    x: number;
    y: number;
  }) => {
    const x = pointerX.toFixed(2);
    const y = pointerY.toFixed(2);
    const xp = (pointerX / window.innerWidth).toFixed(2);
    const yp = (pointerY / window.innerHeight).toFixed(2);

    document.documentElement.style.setProperty("--x", x);
    document.documentElement.style.setProperty("--xp", xp);
    document.documentElement.style.setProperty("--y", y);
    document.documentElement.style.setProperty("--yp", yp);
  };

  useEffect(() => {
    document.body.addEventListener("pointermove", syncPointer);

    return () => {
      document.body.removeEventListener("pointermove", syncPointer);
    };
  }, []);

  return (
    <div>
      <button>
        <span>Button</span>
      </button>
      <button>
        <span>Button</span>
      </button>
      <button>
        <span>Button</span>
      </button>
    </div>
  );
};
