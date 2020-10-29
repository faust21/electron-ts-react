import React from 'react';

const Versions = () => {
  return (
    <React.Fragment>
      <div>node: {process.versions.node}</div>
      <div>chrome: {process.versions.chrome}</div>
      <div>electron: {process.versions.electron}</div>
    </React.Fragment>
  );
};

export default Versions;
