import Home from './Home';
import messages from '../../i18n/index';
import { useMemo } from 'react';

const HomeContainer = () => {
  const loginMsgs = useMemo(() => {
    return messages.es.LOGIN;
  }, []);

  return <Home title={loginMsgs.TITLE} />;
};
export default HomeContainer;
