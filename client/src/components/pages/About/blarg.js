{/* Main Page Row */}
<Row middle="xs" className="portfolio-content-row">

  {/* Main Page Column */}
  <Col xs={12} sm={9} md={8} lg={8}>
    {/* Panel Row */}
    <Row className="about-panel">
      {/* Button Column*/}
      <Col xs={1} className="portfolio-route-col">
            <div className="portfolio-route-container">
              <Link to="/">
                <button className="portfolio-home-button">HOME</button>
              </Link>
            </div>
      </Col>
      {/* Button Column*/}

      {/* Panel Column */}
      <Col xs={11}>
        <div className="about-information">
          <h1>About</h1>
          <hr/>

          <div className="portfolio-items-box">
            <PortfolioItem />
            <PortfolioItem />

            <PortfolioItem />
            <PortfolioItem />

            <PortfolioItem />
            <PortfolioItem />

            <PortfolioItem />
            <PortfolioItem />

            <PortfolioItem />
            <PortfolioItem />
          </div>
        </div>
      </Col>
      {/* Panel Column */}

    </Row>
  </Col>

  {/* Main Image Column*/}
  <Col xs={0} sm={3} md={4} lg={4}>
  </Col>

</Row>
</div>
