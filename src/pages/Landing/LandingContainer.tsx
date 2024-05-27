import { useNavigate } from 'react-router-dom';
import Landing from './Landing';
import messages from '../../i18n/index';
import { useMemo } from 'react';

const LandingContainer = () => {
  //   const navigate = useNavigate();

  const onClickStartOrContinueApplication = () => {
    // navigate(`/application/${123}`);
    console.log('hola');
  };

  const landingMsgs = useMemo(() => {
    return messages.es.LANDING;
  }, []);

  return (
    <Landing
      subtitle={landingMsgs.TITLE}
      description={landingMsgs.DESCRIPTION}
      btnLabel={landingMsgs.BUTTON_LABEL}
      onJoinMe={onClickStartOrContinueApplication}
      onGoLogin={onClickStartOrContinueApplication}
    />
  );
};
export default LandingContainer;
