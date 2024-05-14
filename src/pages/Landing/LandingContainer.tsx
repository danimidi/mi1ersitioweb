import { useNavigate } from "react-router-dom";
import Landing from "./Landing";

const LandingContainer = () => {
  //   const navigate = useNavigate();

  const onClickStartOrContinueApplication = () => {
    // navigate(`/application/${123}`);
    console.log("hola");
  };

  return (
    <Landing
      subtitle="UNIVERSO DE MASCOTAS"
      description="¡Se parte de esta gran comunidad y descubre toda la magia en ella!"
      onJoinMe={onClickStartOrContinueApplication}
      onGoLogin={onClickStartOrContinueApplication}
    />
  );
};
export default LandingContainer;
