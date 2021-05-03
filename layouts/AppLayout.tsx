import React from 'react';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import LoginView from '@/components/features/user/LoginView';
import Modal from '@/components/common/Modal';
import { useUIState } from '@/components/UIStateProvider/UIStateProvider';
import RegisterView from '@/components/features/user/RegisterView';

interface Props {}

const AppLayout: React.FC = ({ children }) => {
  const { displayModal, closeModal, modalView } = useUIState();

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />

      <Modal open={displayModal} onClose={closeModal}>
        {modalView === 'LOGIN_VIEW' && <LoginView />}
        {modalView === 'SIGNUP_VIEW' && <RegisterView />}
      </Modal>
    </div>
  );
};

export default AppLayout;
