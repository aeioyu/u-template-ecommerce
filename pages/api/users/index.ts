import apiHandler from '@/libs/api-handler';
import ApiClient from '@/libs/api-client';

export default apiHandler.post(async (req, res) => {
  const axiosResponse = await ApiClient.post('jwt-auth/v1/token');
  res.status(200).json(axiosResponse);
});
