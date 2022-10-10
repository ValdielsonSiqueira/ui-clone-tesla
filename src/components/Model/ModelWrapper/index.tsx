import { ReactNode } from 'react';

interface ModelWrapperProps {
  children: ReactNode;
}

function ModelWrapper({ children }: ModelWrapperProps) {
  return (
    <>
      {children}
    </>
  );
}

export default ModelWrapper;