import { UseQueryResult, useQuery } from 'react-query';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { AUTH_FLAG_COOKIE } from '@/configs/cookie.config';
import { UserModel } from '@/composables/types/user.type';

async function getUser(): Promise<UserModel> {
  const { data } = await axios.get(`/api/users/me`);
  return data;
}

export function useUser() {
  const [cookie] = useCookies();
  const isTokenAvalable = !!cookie[AUTH_FLAG_COOKIE];

  const user: UseQueryResult<UserModel, Error> = useQuery('user', getUser, {
    enabled: isTokenAvalable,
    retry: false,
  });

  const isLogedIn = user?.data && user?.data?.id;

  return {
    user,
    isLogedIn,
  };
}

export default useUser;
