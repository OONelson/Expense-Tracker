import React, { createContext, useState } from "react";

const CreateTagContext = createContext();

const CreateTagProvider = ({ children }) => {
  const [openCreateTag, setOpenCreateTag] = useState(false);

  const handleOpenCreateTag = () => {
    setOpenCreateTag(true);
  };
  const handleCloseCreateTag = () => {
    setOpenCreateTag(false);
  };

  return (
    <CreateTagContext.Provider
      value={{ openCreateTag, handleOpenCreateTag, handleCloseCreateTag }}
    >
      {children}
    </CreateTagContext.Provider>
  );
};

export { CreateTagProvider, CreateTagContext };
