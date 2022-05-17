import "./LandingScreen.css";

const LandingScreen = () => {
  return (
    <div className="landing-page__container flex--column">
      <img
        src="/assets/zodiaclogo.png"
        alt="logo"
        className="landing-page__hero"
      />
      <h1 className="landing-page__title primary__font">AstroTube</h1>
      <p className="landing-page__description heading4 secondary__font">
        A one place destination for all your Astro videos.
      </p>
      <button className="primary__font landing-page__button">Explore</button>
    </div>
  );
};

export { LandingScreen };
