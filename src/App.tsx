import Modal from "react-modal";
import { useState } from "react";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewUserModal } from "./components/NewUserModal";

import { GlobalStyle } from "./styles/global";

import { UserProvider } from "./hooks/users";
import { Toaster } from "react-hot-toast";

Modal.setAppElement("#root");

export function App() {
  const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false);

  function handleOpenNewUserModal() {
    setIsNewUserModalOpen(true);
  }

  function handleCloseNewUserModal() {
    setIsNewUserModalOpen(false);
  }

  return (
    <UserProvider>
      <Toaster />
      <Header onOpenNewUserModal={handleOpenNewUserModal} />

      <Dashboard />

      <NewUserModal
        isOpen={isNewUserModalOpen}
        onRequestClose={handleCloseNewUserModal}
      />

      <GlobalStyle />
    </UserProvider>
  );
}

export default App;
