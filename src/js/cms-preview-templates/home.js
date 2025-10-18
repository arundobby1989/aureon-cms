import React from "react";
import Jumbotron from "./components/jumbotron";

export default class HomePreview extends React.Component {
  render() {
    const { entry, getAsset } = this.props;
    const image = getAsset(entry.getIn(["data", "image"]));

    return (
      <div>
        {/* Hero Section */}
        <Jumbotron
          image={image}
          title={entry.getIn(["data", "title"])}
          subtitle={entry.getIn(["data", "subtitle"])}
        />

        {/* About / Blurb Section */}
        <div className="bg-grey-1 pv4">
          <div className="flex-l mhn1-l ph3 center mw7">
            <h2 className="f2 b lh-title mb2 w-40-l">
              {entry.getIn(["data", "blurb", "heading"])}
            </h2>
            <p className="w-60-l mb0">{entry.getIn(["data", "blurb", "text"])}</p>
          </div>
        </div>

        {/* Solar Packages Section */}
        <div className="bg-off-white pv4">
          <div className="ph3 mw7 center">
            <h2 className="f2 b lh-title mb2">
              {entry.getIn(["data", "intro", "heading"])}
            </h2>
            <p className="mb4 mw6">{entry.getIn(["data", "intro", "text"])}</p>

            <div className="flex-ns mhn2-ns mb3">
              {(entry.getIn(["data", "intro", "products"]) || []).map(
                (product, i) => (
                  <div className="ph2-ns w-50-ns" key={i}>
                    <img
                      src={getAsset(product.get("image"))}
                      alt=""
                      className="center db mb3"
                      style={{ width: "240px" }}
                    />
                    <p>{product.get("text")}</p>
                  </div>
                )
              )}
            </div>

            <div className="tc">
              <a href="#" className="btn raise">
                View All Packages
              </a>
            </div>
          </div>
        </div>

        {/* Why Choose Aureon Solar Section */}
        <div className="bg-grey-1 pv4">
          <div className="ph3 mw7 center">
            <div className="flex-l mhn2-l">
              <div className="w-40-l ph2-l">
                <h2 className="f2 b lh-title mb2">
                  {entry.getIn(["data", "values", "heading"])}
                </h2>
                <p>{entry.getIn(["data", "values", "text"])}</p>
              </div>

              <div className="w-60-l ph2-l">
                <img
                  src="/img/home-about-section.jpg"
                  alt="Aureon Solar Installation"
                  className="mb3"
                />
              </div>
            </div>

            <div className="tc">
              <a href="/about" className="btn raise">
                Read more
              </a>
            </div>
          </div>
        </div>

        {/* Optional Subsidy Info Section */}
        {entry.getIn(["data", "subsidy"]) && (
          <div className="bg-off-white pv4">
            <div className="ph3 mw7 center tc">
              <h2 className="f2 b lh-title mb2">
                {entry.getIn(["data", "subsidy", "heading"])}
              </h2>
              <p className="mw6 center">
                {entry.getIn(["data", "subsidy", "text"])}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
