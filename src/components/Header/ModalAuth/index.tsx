import { FC } from 'react';
import { GoogleLogin } from '@react-oauth/google';

interface ModalAuthProps {}

const ModalAuth: FC<ModalAuthProps> = () => {
  const responseMessage = (response: any) => {
    console.log(response);
  };
  const errorMessage = () => {
    console.log('Login failed');
  };

  return (
    <div>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} theme="filled_black" />
    </div>
  );
};

export default ModalAuth;
