import Home from './Home';
import messages from '../../i18n/index';
import { useMemo } from 'react';

const HomeContainer = () => {
  const loginMsgs = useMemo(() => {
    return messages.es.LOGIN;
  }, []);

  return (
    <Home
      title={loginMsgs.TITLE}
      forgotPassword={loginMsgs.FORGOT_PASSWORD}
      btnLabel={loginMsgs.BTN_LABEL}
      noAccount={loginMsgs.NO_ACCOUNT_SIGN_UP}
    />
  );
};
export default HomeContainer;
