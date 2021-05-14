import { useMutation } from 'react-query';
import axios from 'axios';
import { LoginParams } from '@/composables/types/auth.type';

async function loginApi(loginParams: LoginParams): Promise<any> {
  const { data } = await axios.post(`/api/auth/login`, loginParams);
  return data;
}

async function logoutApi(): Promise<any> {
  const { data } = await axios.post(`/api/auth/logout`);
  return data;
}

function useAuth() {
  const login = useMutation(loginApi, {
    onSuccess: () => {
      location.reload();
    },
  });

  const logout = useMutation(logoutApi, {
    onSuccess: () => {
      location.reload();
    },
  });

  return {
    login,
    logout,
  };
}

export default useAuth;
