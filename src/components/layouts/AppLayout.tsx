import React from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Modal from '@/components/common/Modal';
import { useUIState } from '@/components/UIStateProvider';
import useAuth from '@/composables/useAuth';

const LoginView = dynamic(() => import('@/components/features/user/LoginView'));
const RegisterView = dynamic(() => import('@/components/features/user/RegisterView'));

const AppLayout: React.FC = ({ children }) => {
  const { displayModal, closeModal, modalView } = useUIState();
  const { login } = useAuth();
  const loginErrorMessage = (login?.error as any)?.response?.data?.message as string;

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />

      <Modal open={displayModal} onClose={closeModal}>
        {modalView === 'LOGIN_VIEW' && (
          <LoginView loading={login.isLoading} error={loginErrorMessage} onLoginSubmit={login.mutate} />
        )}
        {modalView === 'SIGNUP_VIEW' && <RegisterView />}
      </Modal>
    </>
  );
};

export default AppLayout;
