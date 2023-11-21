import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleUp } from "react-icons/fa";
import "./Home.css";
import ElInApple from "public/Laptop_apple_electronics_inventory_golden.png";
import ModernDesk from "public/Iphone_3dportfolio_modern_desktop.png";
import LeavesShade from "public/Iphone_leaves_shade_pomo.png";
import DesertHorizontal from "public/Itab_outdoorsy_desert_horizontal.png";

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
                <Image
                  className="showcase-card-container"
                  alt="electronics inventory hero"
                  src={ElInApple}
                />
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
                <Image
                  className="showcase-card-container"
                  alt="pomodoro timer hero"
                  src={LeavesShade}
                />
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
                <Image
                  className="showcase-card-container"
                  alt="3d portfolio hero"
                  src={ModernDesk}
                />

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
                <Image
                  className="showcase-card-container"
                  alt="outdoorsy app hero"
                  src={DesertHorizontal}
                />
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
