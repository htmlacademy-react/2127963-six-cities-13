function LoadingPage() {
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>

        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">Loading offers</b>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export { LoadingPage };
