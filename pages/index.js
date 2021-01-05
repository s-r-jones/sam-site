import { Fragment } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { useTimeout } from "react-use";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState(null);
  const [isReady, cancel] = useTimeout(4000);
  return (
    <Fragment>
      <div
        className="
        absolute top-5
        w-screen
        flex flex-row justify-around
        px-4 md:px-10 py-2
        bg-green-200"
      >
        <div
          className="font-extrabold text-xl md:text-2xl"
          onClick={() => setActiveTab(2)}
        >
          About
        </div>

        <div
          className="font-extrabold text-xl md:text-2xl"
          onClick={() => setActiveTab(0)}
        >
          AR
        </div>

        <div
          className="font-extrabold text-xl md:text-2xl"
          onClick={() => setActiveTab(1)}
        >
          Web
        </div>

        <div
          className="font-extrabold text-xl md:text-2xl"
          onClick={() => setActiveTab(3)}
        >
          Contact
        </div>
      </div>
      {isReady() === false && (
        <div className="text-gray-600 font-extrabold absolute top-40 left-40 text-4xl p-4 bg-gray-100 ">
          Tap and Move to Play! :)
        </div>
      )}
      {activeTab !== null && (
        <div
          className="absolute top-2 right-4 md:right-96 bg-white text-black font-black p-2 z-10"
          onClick={() => setActiveTab(null)}
        >
          Close X
        </div>
      )}

      {activeTab !== null && (
        <div className="content-container">
          {activeTab === 2 && (
            <div className="card-list">
              <div className="card bg-green-200">
                <h3 className="card-title font-extrabold">About</h3>
                <div className="card-description">
                  Hi welcome to my internet space. I am a software engineer and
                  creative coder. I currently work at MeowWolf as an App and XR
                  developer where I transforms massive ideas into code; and code
                  into fun, unexpected and immersive experiences. My social AR
                  filters have gained more than 20 million views. I previously
                  worked as a consulting engineer for startups. In my life
                  before software I worked in advertising. Lets make something
                  fun!
                </div>
                <div className="card-images max-w-sm mx-auto">
                  {/* <Slider
                  settings={{
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }}
                >
                  <Image src="/mw-home.png" width="350" height="200" />
                  <Image src="/mw-watch.png" width="350" height="200" />
                  <Image src="/mw-about.png" width="350" height="200" />
                </Slider> */}
                </div>
              </div>
            </div>
          )}

          {activeTab === 3 && (
            <div className="card-list">
              <div className="card bg-green-200">
                <h3 className="card-title font-extrabold">Contact</h3>
                <div className="card-description">
                  Interested in making an AR Project or Web App?
                  <div className="my-5">Email me @:</div>
                  <div> B S A M J O N E S @ G M A I L.com</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className="card-list">
              <h3 className="ml-4 mt-2 underline text-lg font-extrabold">
                Recent Web Apps
              </h3>
              <div className="card">
                <h3 className="card-title font-extrabold">
                  <a target="_blank" href="https://www.meowwolf.com">
                    meowwolf.com
                  </a>
                </h3>
                <div className="card-description">
                  I was a lead developer for Meow Wolf's super futuristic and
                  fun website.
                  <div className="font-bold">Stack:</div>
                  <div>Next.js, Graphql, TypeScript, Google Cloud Engine</div>
                </div>
                <div className="card-images max-w-sm mx-auto">
                  <Slider
                    settings={{
                      dots: true,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    }}
                  >
                    <Image src="/mw-home.png" width="350" height="200" />
                    <Image src="/mw-watch.png" width="350" height="200" />
                    <Image src="/mw-about.png" width="350" height="200" />
                  </Slider>
                </div>
              </div>

              <div className="card">
                <h3 className="card-title font-extrabold">
                  <a target="_blank" href="https://www.tickets.meowwolf.com">
                    tickets.meowwolf.com
                  </a>
                </h3>
                <div className="card-description">
                  Lead developer for Meow Wolfs slick ticketing app. Now guests
                  can purchase tickets for specfic times throughout a day.
                  Reduced time-to-purchase by 40seconds, increased conversions
                  by 4 percent, and increased average purchase amount by 10%.
                  <div className="font-bold">Stack:</div>
                  <div>Next.js, Graphql, TypeScript, Google Cloud Engine</div>
                </div>
                <div className="card-images max-w-sm mx-auto">
                  <Slider
                    settings={{
                      dots: true,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    }}
                  >
                    <Image src="/mw-cal1.png" width="350" height="200" />
                    <Image src="/mw-ticket.png" width="350" height="200" />
                  </Slider>
                </div>
              </div>

              <div className="card">
                <h3 className="card-title font-extrabold">
                  <a target="_blank" href="https://nmswap.org/">
                    NM State Wildlife Action Plan
                  </a>
                </h3>
                <div className="card-description">
                  This web application was created for the New Mexico Department
                  of Game and Fish with help from several researchers from the
                  Unviversity of New Mexico. Visitors can use this tool to learn
                  more about plants and wildlife in New Mexico; along with
                  conservation challenges for specific habitats and ecoregions.
                  <div className="font-bold">Stack:</div>
                  <div>Javascript, Express, Mongodb, AWS</div>
                </div>
                <div className="card-images max-w-sm mx-auto">
                  <Slider
                    settings={{
                      dots: true,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    }}
                  >
                    <Image src="/NMSWAP-Desktop.jpg" width="350" height="200" />
                    <Image src="/NMSWAP-iPhone.jpg" width="300" height="200" />
                  </Slider>
                </div>
              </div>

              <div className="card">
                <h3 className="card-title font-extrabold">
                  <a target="_blank" href="https://fundx.com/">
                    FundX Investment Group
                  </a>
                </h3>
                <div className="card-description">
                  I worked as a lead developer on a team that designed and
                  created an internal customer portal for FundX Investment
                  Group. Through the portal users can monitor, add, and remove
                  funds to their portfolio.
                  <div className="font-bold">Stack:</div>
                  <div>Ruby on Rails, Javascript, Postgres, AWS</div>
                </div>
                <div className="card-images max-w-sm mx-auto">
                  <Slider
                    settings={{
                      dots: true,
                      slidesToShow: 2,
                      slidesToScroll: 1,
                    }}
                  >
                    <Image src="/FundX-Desktop.jpg" width="350" height="200" />
                    <Image src="/FundX-ipad.jpg" width="300" height="200" />
                  </Slider>
                </div>
              </div>

              <div className="card">
                <h3 className="card-title font-extrabold">
                  <a target="_blank" href="https://www.2020insights.net/">
                    20/20 Insights
                  </a>
                </h3>
                <div className="card-description">
                  Insights is a performance management platform designed to
                  support success by connecting employees and aligning work
                  around high-level company strategy and goals. Insights
                  provides executives with the knowledge they need to see
                  organization performance, and clarify actionable goals.
                  <div className="font-bold">Stack:</div>
                  <div>React.js, ASP.Net, MSSQL, AWS</div>
                </div>
                <div className="card-images max-w-sm mx-auto">
                  <Slider
                    settings={{
                      dots: true,
                      slidesToShow: 2,
                      slidesToScroll: 1,
                    }}
                  >
                    <Image
                      src="/opa-connect-desktop.jpg"
                      width="350"
                      height="200"
                    />
                    <Image src="/opa-tablet.jpg" width="300" height="200" />
                  </Slider>
                </div>
              </div>
            </div>
          )}

          {/* End */}

          {activeTab === 0 && (
            <div className="card-list">
              <h3 className="ml-4 mt-2 underline text-lg font-extrabold">
                Recent AR
              </h3>
              <div className="card">
                <h3 className="card-title font-extrabold">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/ar/3142830929074581/"
                  >
                    Jelly Helmet
                  </a>
                </h3>
                <div className="card-description">
                  Wear a wobbly rainbow helmet and watch magic jellies float
                  around you. This effect has been viewed more than 17 Million
                  times.
                </div>
                <div className="card-images max-w-sm mx-auto">
                  <video
                    src="jelly_demo.mov"
                    height="40"
                    width="200"
                    controls
                  />
                </div>
              </div>

              <div className="card">
                <h3 className="card-title font-extrabold">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/ar/427281954844584/"
                  >
                    Reflector
                  </a>
                </h3>
                <div className="card-description">
                  Up is down light is dark and dark is... rainbows? This effect
                  has been viewed more than 1 million times and features a
                  waving rippling fragment shader
                </div>
                <div className="card-images max-w-sm mx-auto">
                  <video
                    src="reflect_demo.mp4"
                    height="40"
                    width="200"
                    controls
                  />
                </div>
              </div>

              <div className="card">
                <h3 className="card-title font-extrabold">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/ar/628267554642486/"
                  >
                    VCR
                  </a>
                </h3>
                <div className="card-description">
                  Party likw its 1995 and someone stuck a magnet on your VCR.
                  This effect features a fuzzy and distorted fragment shader.
                  This effect has been viewed more than 400,000 times.
                </div>
                <div className="card-images max-w-sm mx-auto">
                  <video src="vcr_demo.mov" height="40" width="200" controls />
                </div>
              </div>
              {/* End */}
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
}
