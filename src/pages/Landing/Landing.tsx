import React from "react";

type LandingProps = {
  subtitle: string;
  description: string;
  onJoinMe: () => void;
  onGoLogin: () => void;
};

const Landing = ({ subtitle, onJoinMe, onGoLogin }: LandingProps) => {
  return (
    <div>
      <nav>nav</nav>
      <span>LOGO</span>
    </div>
  );
};

export default Landing;
