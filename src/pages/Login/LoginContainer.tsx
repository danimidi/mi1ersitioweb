import Login from './Login';
import messages from '../../i18n/index';
import { useMemo } from 'react';

const LandingContainer = () => {
  const loginMsgs = useMemo(() => {
    return messages.es.LOGIN;
  }, []);

  return (
    <Login
      title={loginMsgs.TITLE}
      forgotPassword={loginMsgs.FORGOT_PASSWORD}
      btnLabel={loginMsgs.BTN_LABEL}
      noAccount={loginMsgs.NO_ACCOUNT_SIGN_UP}
      onJoinMe={() => console.log('btn action')}
      onGoLogin={() => console.log('btn other')}
    />
  );
};
export default LandingContainer;
