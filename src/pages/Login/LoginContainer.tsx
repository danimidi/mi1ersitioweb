import Login from './Login';
import messages from '../../i18n/index';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingContainer = () => {
  const navigate = useNavigate();

  const authenticateUser = (e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e?.preventDefault();
    navigate('/feed');
  };

  const loginMsgs = useMemo(() => {
    return messages.es.LOGIN;
  }, []);

  return (
    <Login
      title={loginMsgs.TITLE}
      forgotPassword={loginMsgs.FORGOT_PASSWORD}
      btnLabel={loginMsgs.BTN_LABEL}
      noAccount={loginMsgs.NO_ACCOUNT_SIGN_UP}
      authenticateUser={authenticateUser}
    />
  );
};
export default LandingContainer;
