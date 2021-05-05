import React from 'react';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import LoginView from '@/components/features/user/LoginView';
import Modal from '@/components/common/Modal';
import { useUIState } from '@/components/UIStateProvider/UIStateProvider';
import RegisterView from '@/components/features/user/RegisterView';
import { useUserLogin } from '@/composables/useUser';

interface Props {}

const AppLayout: React.FC<Props> = ({ children }) => {
  const { displayModal, closeModal, modalView } = useUIState();
  const { mutate: login, error, isLoading: loginLoading } = useUserLogin();

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />

      <Modal open={displayModal} onClose={closeModal}>
        {modalView === 'LOGIN_VIEW' && (
          <LoginView onLoginSubmit={login} loading={loginLoading} error={error?.response?.data?.message} />
        )}
        {modalView === 'SIGNUP_VIEW' && <RegisterView />}
      </Modal>
    </div>
  );
};

export default AppLayout;
