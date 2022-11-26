import React from 'react';

function Container({ children }) {
  return <div className="w-full md:w-3/4 mx-auto md:space-x-3">{children}</div>;
}

export default Container;
