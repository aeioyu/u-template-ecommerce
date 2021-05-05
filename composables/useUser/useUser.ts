import { useMutation, UseMutationResult } from 'react-query';
import axios from 'axios';

interface LoginParams {
  username: string;
  password: string;
}

// function useUser() {
//   const login = ({ username, password }: LoginParams): void => {
//     console.log(1);

//     mutate('/api/auth/login', { username, password }, false);
//   };
//   return {
//     login,
//   };
// }

async function login(loginParams: LoginParams): Promise<any> {
  const { data } = await axios.post(`/api/auth/login`, loginParams);
  return data;
}

export function useUserLogin(): UseMutationResult {
  const mutation = useMutation((loginParams: LoginParams) => login(loginParams));
  return mutation;
}
