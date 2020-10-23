import React from "react";

const withClassFunc = (WrappedComponent, className) => {
  return () => {
    return (
      <div className={className}>
        <WrappedComponent />
      </div>
    );
  };
};

export default withClassFunc;
