import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import React from 'react';
import { useForm } from 'react-hook-form';

type Inputs = {
  username: string;
  password: string;
};

interface Props {
  error?: string;
  onLoginSubmit?: (Inputs) => void;
  loading?: boolean;
}

const LoginView: React.FC<Props> = ({ onLoginSubmit, loading, error }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = (data: Inputs): void => onLoginSubmit?.(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>username</div>
        <input placeholder="username" disabled={loading} {...register('username', { required: true })} />
        {errors.username && <span>This field is required</span>}
        <div>password</div>
        <input
          placeholder="password"
          type="password"
          disabled={loading}
          {...register('password', { required: true })}
        />
        {errors.password && <span>This field is required</span>}

        <Text className="text-yellow">{error}</Text>

        <Button type="submit" loading={loading}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default LoginView;
