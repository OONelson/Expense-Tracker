import React, { createContext, useState } from "react";

const TagContext = createContext();

// eslint-disable-next-line react/prop-types
const TagProvider = ({ children }) => {
  const [isTagOpen, setIsTagOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleOpenTagList = () => {
    setIsTagOpen(true);
  };
  const handleCloseTagList = () => {
    setIsTagOpen(false);
  };
  return (
    <TagContext.Provider
      value={{
        isTagOpen,
        handleOpenTagList,
        handleCloseTagList,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </TagContext.Provider>
  );
};
export { TagProvider, TagContext };
