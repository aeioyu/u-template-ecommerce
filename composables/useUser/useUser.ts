import { UseQueryResult, useQuery } from 'react-query';
import axios from 'axios';
import { AUTH_FLAG_COOKIE } from '@/constants';
import { useCookies } from 'react-cookie';

interface UserModel {
  id: number;
  name: string;
  avatar_urls: Record<string, string>;
}

async function getUser(): Promise<UserModel> {
  const { data } = await axios.get(`/api/users/me`);
  return data;
}

export function useUser(): UseQueryResult<UserModel> {
  const [cookie] = useCookies();
  const isTokenAvalable = !!cookie[AUTH_FLAG_COOKIE];

  return useQuery('user', getUser, {
    enabled: isTokenAvalable,
    retry: false,
  });
}

export default useUser;
