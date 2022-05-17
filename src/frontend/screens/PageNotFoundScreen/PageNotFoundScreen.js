import "./PageNotFoundScreen.css";

const PageNotFoundScreen = () => {
  return (
    <div className="error-page__container flex--column">
      <div className="page__title flex--row">
        <h1 className="page__main primary__font">4</h1>
        <img src="/assets/zodiaclogo.png" alt="logo" className="page__hero" />
        <h1 className="page__main primary__font">4</h1>
      </div>
      <h1 className="secondary__font heading1">Page Not Found</h1>
    </div>
  );
};

export { PageNotFoundScreen };
