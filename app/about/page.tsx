/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "../ui/Portfolio.css";
import RoundButton from "../ui/RoundButton";

const About = () => {
  return (
    <main className="max-w-screen-xl m-auto px-4 xl:px-0">
      <section className="flex flex-row  h-full w-full min-h-[85vh]">
        <div className="m-auto">
          <h1 className="flex portfolio-h1 h-full w-full  items-center ">
            ABOUT
          </h1>
        </div>
      </section>
      <section className="portfolio-main-section py-3">
        <div className="">
          <p className="portfolio-p">
            With two decades of experience in mechanical engineering, robotics,
            software engineering and full stack web development. I have a proven
            track record of success as a versatile and creative problem-solver
            who can deliver innovative digital solutions for various industries
            and domains. I have multiple certifications in mechanical
            engineering, software development, robotics engineering and embedded
            electronics.
          </p>
        </div>
        <div className="">
          <p className="portfolio-p ">
            Currently, I am working as the Owner/Operator at my company
            Blackrock Design. Where I design, develop and maintain web
            applications using some of the latest technologies including:
            NextJS, React, CSSModules, Tailwind, TypeScript, PostgreSQL, MongoDB
            and AWS just to name a few.
          </p>
          <p className="portfolio-p">
            I enjoy meeting and collaborating with new people who also love to
            design and implement user-friendly and functional interfaces,
            systems and devices that meet or exceed the needs and expectations
            of our clients.
          </p>
          <p className="portfolio-p">
            My goal is to continue learning and pushing the boundaries of
            software engineering and development. Whether it be on the world
            wide web, in a financial institution, blockchain research,
            manufacturing or even Ai.
          </p>
          <p className="portfolio-p">
            Software engineering is a passion of mine, and I look forward to
            contributing to the advancement, innovation and accessibility of the
            modern digital world.
          </p>
        </div>
      </section>
      <section className="portfolio-main-section mb-16">
        <div>
          <h2 className="portfolio-h2 mt-4 mb-10">ENGINEERING EXPERIENCE</h2>
        </div>
        <div className="flex flex-col gap-24">
          <div className="flex flex-col p-6 border rounded-lg shadow-2xl shadow-blue-500/20">
            <h2 className="text-center text-2xl">
              LEAD SOFTWARE DEVELOPER/ENGINEERING MANAGER
            </h2>
            <div className="w-full flex m-4">
              <h4 className="py-2 px-4 rounded-full text-center border m-auto">
                SEPT 2022 - CURRENT
              </h4>
            </div>
            <ul className="portfolio-about-list list-disc ml-4">
              <li>
                Develop and maintain web applications using React, TypeScript,
                MySQL, MongoDB, AWS and Google Cloud.
              </li>
              <li>
                Develop cloud-based industrial WiFi IOT sensors using ESP8266,
                ESP32 micro controllers running modified C++ software. Utilize
                MQTT data transmission protocol (PUB/SUB).
              </li>
              <li>
                Develop Touchscreen HMI UI/UX to support customers requirements,
                combining previous skills in electromechanical engineering with
                my latest skill set in web development and programming.
              </li>
              <li>
                Develop Machine learning and Machine vision algorithms to
                support future projects in robotics and self-driving vehicles.
              </li>
              <li>
                Write clean, maintainable, and testable code. Red-to-green
                testing is not nice to have, its a requirement.
              </li>
              <li>
                Stay up-to-date with emerging technologies and industry trends
                by participating in online code reviews. Or contributing to the
                development of best practices and coding standards in the
                industry by attending in-person events.
              </li>
              <li>
                Troubleshoot and debug software issues in a timely and effective
                manner.
              </li>
              <li>
                Enjoy volunteering in the community through open-source
                programming projects, most recently on two projects for
                Hacktoberfest 2023.
              </li>
              <li>
                Provide professional robotics and automation engineering design,
                stress calculations, manufacturing tolerances, drafting services
                and engineering drawings.
              </li>
              <li>
                Familiar with containerizing applications for shipping using
                Docker in combination with Kubernetes.
              </li>
            </ul>
            <section className="flex flex-row flex-wrap pt-4 h-full justify-start gap-4">
              <div className="py-2 px-4 rounded-full text-center border m-auto ">
                <p>HTML5</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>CSS3</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>JAVASCRIPT</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>REACT</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>MYSQL</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>AWS</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>C++</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>UI/UX DESIGN</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>SEO</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>SECURITY</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>DATABASE DESIGN</p>
              </div>
            </section>
          </div>
          <div className="flex flex-col p-6 border rounded-lg shadow-2xl shadow-blue-500/20">
            <h2 className="text-center text-2xl">
              SOFTWARE DEVELOPER (LISP)/GRAPHIC DESIGNER
            </h2>
            <div className="w-full flex m-4">
              <h4 className="py-2 px-4 rounded-full text-center border m-auto">
                MAR 2018 - FEB 2022
              </h4>
            </div>
            <ul className="portfolio-about-list list-disc ml-4">
              <li>
                Created custom AutoCAD LISP routines to take CAD drawings from
                Autodesk Inventor and convert them to native AutoCAD 2000 file
                type. Each layers line type and weights were adjusted while
                conforming to the company's standards which were precise and
                pre-determined by years of experience.
              </li>
              <li>
                These LISP routines have helped to save the engineering
                department hours of extra work that was spent doing this by hand
                when the routines achieve a better result in seconds.
              </li>
              <li>
                Participated in several successful Research and Development
                projects including Pilot1000 Stretch Wrapper, Automatic Film Cut
                Mechanism, and Rover Mobile Battery Powered Stretch Wrapper.
              </li>
              <li>
                Managed Robotic Weld Cell creation thru installation created a
                marked improvement in factory throughput. Designed and
                commissioned dozens of custom weld fixtures for every major
                product line.
              </li>
              <li>
                Oversaw administration of Autodesk Inventor Vault containing
                upwards of 50,000 individual parts, assemblies, and drawings.
                Mentoring employees in current best practices for the team
                environment.
              </li>
              <li>
                Created Autodesk Inventor to DWG export system using LISP
                routines which export and then reduce/rename the AutoCad DWG
                layers to match Cousins Engineering Standards.
              </li>
            </ul>
            <section className="flex flex-row flex-wrap pt-4 h-full justify-start gap-4">
              <div className="py-2 px-4 rounded-full text-center border m-auto ">
                <p>AUTOCAD</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>LISP</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>TYPESCRIPT</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>HMI</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>ADOBE</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>PHOTOSHOP</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>ILLUSTRATOR</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>JQUERY</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>LOGO DESIGN</p>
              </div>
            </section>
          </div>
          <div className="flex flex-col p-6 border rounded-lg shadow-2xl shadow-blue-500/20">
            <h2 className="text-center text-2xl">
              JUNIOR SOFTWARE DEV/WEBSITE DESIGNER/SQL ADMIN
            </h2>
            <div className="w-full flex m-4">
              <h4 className="py-2 px-4 rounded-full text-center border m-auto">
                OCT 2006 - FEB 2018
              </h4>
            </div>
            <ul className="portfolio-about-list list-disc ml-4">
              <li>
                Coded custom SQL queries/views/detailed cost reports using
                Crystal in conjunction with INFOR VISUAL Manufacturing CRM SQL
                Server database to produce stunning, live data cost reports for
                the CEO of the company.
              </li>
              <li>
                Developed custom VB applications to allow the Engineering
                department to interface with SolidWorks 3D CAD design software.
                The program opens a new window within the SolidWorks
                application. This window has multiple sliders and input boxes
                that allow live control of model constraints. This was
                accomplished by using SolidWorks built-in API.
              </li>
              <li>
                Worked with a local studio to design/produce a WordPress
                website: www.nyemfg.ca. Utilized open source program Blender and
                Adobe Creative suite (PS, Ai, id) to accomplish this.
              </li>
              <li>
                Custom programming of Siemens Micromaster VFD AC drive
                controllers to regulate the HVAC system in a large welding shop.
                Features a custom user interface. This upgrade resulted in a 20%
                increase in air quality during periods of heavy welding.
              </li>
              <li>
                Successful application and receipt of a $50,000 grant towards
                the training of the Engineering department, via the Yves Landry
                Foundation.
              </li>
            </ul>
            <section className="flex flex-row flex-wrap pt-4 h-full justify-start gap-4">
              <div className="py-2 px-4 rounded-full text-center border m-auto ">
                <p>SQL SERVER</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>ODBC</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>CRYSTAL REPORTS</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>INFOR VISUAL</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>VISUAL BASIC</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>API</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>ADOBE</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>PHOTOSHOP</p>
              </div>
              <div className="py-2 px-4 rounded-full text-center border m-auto">
                <p>INDESIGN</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
