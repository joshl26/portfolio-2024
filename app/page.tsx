import Link from "next/link";
import { FaArrowCircleUp } from "react-icons/fa";
import "./Home.css";

export default function Home() {
  return (
    <main>
      <>
        <section className="title-container">
          <h1 className="text-based-title">
            CREATING <span className="title-accent">PRAGMATIC </span>&
            <span className="title-accent"> THOUGHTFUL</span> SOFTWARE
            <br />
            <span className="title-year">-SINCE 2021-</span>
          </h1>
        </section>
        <section className="showcased-work">
          <Link href={"/portfolio"}>
            <div>
              <div>
                <h2 className="showcased-h2">SHOWCASED WORK</h2>
              </div>
              <div className="text-right">
                <div className="spacer-xsmall"></div>
                <FaArrowCircleUp className="showcased-work-link" />
              </div>
            </div>
          </Link>
          <div>
            <div>
              <Link href={"/portfolio/el-in"}>
                {/* <img
                  className="showcase-card-container"
                  alt="electronics inventory hero"
                  src="https://res.cloudinary.com/dv6keahg3/image/upload/q_auto/f_auto/v1697384652/PortfolioSite/Laptop_apple_electronics_inventory_golden_lka0ur.png"
                /> */}
                <div className="spacer-small"></div>
                <div className="showcase-border-top" />
                <div className="spacer-small"></div>
                <div>
                  <div>
                    <h3 className="showcased-h3">ELECTRONICS INVENTORY</h3>
                  </div>
                  <div className="text-right">
                    <FaArrowCircleUp className="showcased-work-link" />
                  </div>
                  <div className="spacer-small"></div>
                </div>
              </Link>
            </div>
            <div>
              <Link href={"/portfolio/pomodor"}>
                {/* <img
                  className="showcase-card-container"
                  alt="pomodoro timer hero"
                  src="https://res.cloudinary.com/dv6keahg3/image/upload/q_auto/f_auto/v1697384650/PortfolioSite/Iphone_horizontal_and_vertical_pomo_vases_ng2hpt.png"
                /> */}
                <div className="spacer-small"></div>
                <div className="showcase-border-top" />
                <div className="spacer-small"></div>
                <div>
                  <div>
                    <h3 className="showcased-h3">POMODOR TIMER</h3>
                  </div>
                  <div className="text-right">
                    <FaArrowCircleUp className="showcased-work-link" />
                  </div>
                  <div className="spacer-small"></div>
                </div>
              </Link>
            </div>
          </div>
          <div className="spacer-small"></div>
          <div>
            <div>
              <Link href={"/portfolio/3dportfolio"}>
                {/* <img
                  className="showcase-card-container"
                  alt="3d portfolio hero"
                  src="https://res.cloudinary.com/dv6keahg3/image/upload/q_auto/f_auto/v1697384654/PortfolioSite/Iphone_3dportfolio_modern_desktop_1_unmjbe.png"
                /> */}
                <div className="spacer-small"></div>
                <div className="showcase-border-top" />
                <div className="spacer-small"></div>
                <div>
                  <div>
                    <h3 className="showcased-h3">3D PORTFOLIO</h3>
                  </div>
                  <div className="text-right">
                    <FaArrowCircleUp className="showcased-work-link" />
                  </div>
                  <div className="spacer-small"></div>
                </div>
              </Link>
            </div>
            <div>
              <Link href={"/portfolio/outdoorsy"}>
                {/* <img
                  className="showcase-card-container"
                  alt="outdoorsy app hero"
                  src="https://res.cloudinary.com/dv6keahg3/image/upload/q_auto/f_auto/v1697384653/PortfolioSite/Itab_outdoorsy_desert_horizontal_p92vrs.png"
                /> */}
                <div className="spacer-small"></div>
                <div className="showcase-border-top" />
                <div className="spacer-small"></div>
                <div>
                  <div>
                    <h3 className="showcased-h3">OUTDOORSY</h3>
                  </div>
                  <div className="text-right">
                    <FaArrowCircleUp className="showcased-work-link" />
                  </div>
                  <div className="spacer-small"></div>
                </div>
              </Link>
            </div>
          </div>
          <div className="spacer"></div>
        </section>
      </>
    </main>
  );
}
