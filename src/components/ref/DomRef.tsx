import React, { useEffect, useRef } from "react";

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!); // note the non-null assertion

  useEffect(() => {
    inputRef.current?.focus();
  });
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export { DomRef };
