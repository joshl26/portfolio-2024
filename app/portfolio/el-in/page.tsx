"use client";

import React from "react";
import { motion } from "framer-motion";
import RoundButton from "@/app/ui/RoundButton";
import "@/app/ui/Portfolio.css";
import { CldImage } from "next-cloudinary";

const PortfolioElectronicInv = () => {
  return (
    <main className="main-container">
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.75,
              delay: 0.5,
            },
          }}
        >
          <CldImage
            className="showcase-card-container"
            alt="outdoorsy app hero"
            width="2000"
            height="2000"
            sizes="100vw"
            preserveTransformations
            src="https://res.cloudinary.com/dv6keahg3/image/upload/c_crop,w_1250/q_auto/f_auto/v1697384652/PortfolioSite/Laptop_apple_electronics_inventory_golden_lka0ur.png"
          />
        </motion.div>
      </section>
      <div className="spacer-small"></div>
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.75,
              delay: 0.5,
            },
          }}
          style={{ justifyContent: "space-between", display: "flex" }}
        >
          <span>
            <RoundButton
              href={"https://github.com/joshl26/electronics-inventory-frontend"}
              buttonText={"GIT"}
              buttonClass={"round-button"}
              rel=""
              target=""
            />
          </span>
          <span>
            <RoundButton
              buttonText={"LIVE SITE"}
              buttonClass={"round-button"}
              href={"https://el-in.ca"}
              rel=""
              target=""
            />
          </span>
          <span>
            <RoundButton
              buttonText={"UI/UX"}
              buttonClass={"round-button"}
              rel=""
              target=""
              href=""
            />
          </span>
        </motion.div>
      </section>
      <div className="spacer-small"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.75,
            delay: 0.5,
          },
        }}
      >
        <section className="portfolio-main-section">
          <h2 className="portfolio-h2">DETAILS</h2>
          <div style={{ justifyContent: "space-between", display: "flex" }}>
            <span>
              <h4>SPRING 2023-CURRENT</h4>
            </span>
            <span>
              <h4>COMMMERCIAL PRODUCT</h4>
            </span>
          </div>
          <div style={{ justifyContent: "space-between", display: "flex" }}>
            <span>
              <span>
                <RoundButton
                  buttonText={"JAVASCRIPT"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"CSS3"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"HTML5"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"WIREFRAMING"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"UI/UX DESIGN"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
            </span>
            <span>
              <span>
                <RoundButton
                  buttonText={"REACT"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"REDUX"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"OPENAPI"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"BABEL"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"WEBPACK"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
              <span>
                <RoundButton
                  buttonText={"GIT"}
                  buttonClass={"round-button"}
                  rel=""
                  target=""
                  href=""
                />
              </span>
            </span>
          </div>
          <div className="spacer-small"></div>
          <p className="portfolio-p">
            Electronics Inventory (Ei) is a Full featured inventory management
            and control system designed for small and large businesses alike.
            Whether you are starting a small business, or maybe you are a home
            hoobbyist who needs a better way to organize. Or mayve you have an
            international conglomerate of corporations to manage...Ei can help!
            Our software is easy to set up and also has the flexibility to scale
            for international corporate environments. Cloud-based architecture
            under the hood assures you can see your electronics inventory levels
            from any device, anywhere in the world... anytime! Put the power of
            EI to work in your business. Ask about our free 30 day demo.
          </p>
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.75,
            delay: 0.25,
          },
        }}
      >
        <section className="portfolio-main-section">
          <h2 className="portfolio-h2">DESIGN INTENT</h2>
          <p className="portfolio-p">
            My passion in programming is to design humanistic software. So with
            EI I knew the idea was to design inventory managment software that
            people would WANT to USE, as opposed to HAVING to USE. This meant
            being able to deliver several key performance indicators (KPI)
            regarding the lifecycle of the electronics inventory within your
            organization in an efficient manner. The uniquely organic design and
            layout of our app allows the free flow of information, which has
            been shown to improve the overall efficiency in biological
            organisms. We treat your business like a biolical organism, that
            needs care and sustanence. Thats where you and Ei come in! See why
            we are different from the traditional inventory management systems
            you have used ine the past.
          </p>
        </section>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.75,
            delay: 0.5,
          },
        }}
      >
        <section className="portfolio-main-section">
          <h2 className="portfolio-h2">FONT TYPES</h2>
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <span>
              <h1 className="portfolio-font-nunito">NUNITO</h1>
            </span>
            <div className="portfolio-li">
              <span>Weight</span>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  gap: "0.625rem",
                }}
              >
                <li>200</li>
                <li>300</li>
                <li>500</li>
              </ul>
            </div>
          </div>
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <span className="portfolio-font-cabin">CABIN</span>
            <div className="portfolio-li">
              <span>Weight</span>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  gap: "0.625rem",
                }}
              >
                <li>400</li>
                <li>500</li>
                <li>600</li>
                <li>700</li>
              </ul>
            </div>
          </div>
        </section>
      </motion.div>
      <section className="portfolio-main-section">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.75,
              delay: 0.5,
            },
          }}
        >
          <h2 className="portfolio-h2">SCREENS</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.75,
              delay: 0.5,
            },
          }}
        >
          <CldImage
            className="showcase-card-container"
            alt="laptop in a modern office"
            width="1000"
            height="1000"
            sizes="100vw"
            preserveTransformations
            src="https://res.cloudinary.com/dv6keahg3/image/upload/q_auto/f_auto/v1697384652/PortfolioSite/Laptop_apple_electronics_inventory_a1gelp.png"
          />
        </motion.div>
        <div className="spacer"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.75,
              delay: 0.5,
            },
          }}
        >
          <CldImage
            className="showcase-card-container"
            alt="laptop on a gold platform"
            width="1000"
            height="1000"
            sizes="100vw"
            preserveTransformations
            src="https://res.cloudinary.com/dv6keahg3/image/upload/c_crop,w_1250/q_auto/f_auto/v1697384652/PortfolioSite/Laptop_apple_electronics_inventory_golden_lka0ur.png"
          />
        </motion.div>
        <div className="spacer"></div>
      </section>
    </main>
  );
};

export default PortfolioElectronicInv;
