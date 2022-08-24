import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <div className="container">
        <div className="row">
          <h2>Products</h2>
          <p className="main-para text-center fs-5">
            YIELDUP offers safer and transparent<br></br> yield strategies{" "}
            <br></br>as defi's first exotic options
            <br></br> protocol.
          </p>
        </div>
        <div className="row">
          <h2 className="fs-3">TOTAL VALUE LOCKED IN YIELDUP</h2>

          <h3 className="text-center mt-5">$33,288,031.33</h3>
        </div>
        {/* <h1 className="main-title text-center">Products</h1> */}

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 ">
              <div className="container card-1 card bg-white height mt-5 mb-5 Shadow warning ">
                <div className="row">
                  <div class="course p-0">
                    <div class="course-preview">
                      <img
                        src="https://cdn.glitch.global/11976b1b-56cf-4260-a8a7-c4ffa2875b78/cruise_control_thumbnail.jpg?v=1655976685863"
                        class=" border-radius-none"
                        alt="..."
                      />
                    </div>
                    <div className="course-info bg-black ">
                      <div className="container">
                        {/* <h6 className="text-bold text-white fs-1">Chapter 4</h6> */}
                        <h5 className="text-white mt-5">Fixed Coupon Note</h5>
                        <h5 className="fw-bold text-white">Genesis Basket</h5>
                        <h5 className="text-white">BTC x ETH</h5>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className=" fs-5 mt-5 text-center mb-4">
                  Our safest basket with Cega's <br></br> strongest protection
                  from negative market movements. Sit back, relax & enjoy your
                  yield.
                </h3>
                <h3 className="text-center">Quoted Yield (APY)</h3>
                <h1 className="text-center ">10.25%</h1>
                <div className="row mt-5">
                  <div className="col-6 d-flex justify-content-start">
                    <div className="align-content-lg-start">
                      <h4 className="text-muted">Price Drop Protection</h4>
                      <h4 className="text-muted">Product TVL</h4>
                      <h4 className="text-muted">Deposit Limit</h4>
                      <h4 className="text-muted">Investment Duration</h4>
                    </div>
                  </div>
                  <div className="col-6 d-flex justify-content-end mb-5">
                    <div className="align-content-lg-end">
                      <h4 className="text-bold">90</h4>
                      <h4>$9,547,461.26</h4>
                      <h4>$10,500,000.00</h4>
                      <h4>30 days</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 ">
              <div className="container card-1 card bg-white height mt-5 mb-5 Shadow warning ">
                <div className="row image  ">
                  <div className="col-4 p-0">
                    <img
                      src="	https://cdn.glitch.global/11976b1b-56cf-4260-a8a7-c4ffa2875b78/genesis_thumbnail.jpg?v=1655976683663"
                      class="img-fluid border-radius-none"
                      alt="..."
                    />
                  </div>
                  <div className="col-8 bg-black">
                    <h5 className="text-white mt-4">Fixed Coupon Note</h5>
                    <h5 className="fw-bold text-white">Genesis Basket</h5>
                    <h5 className="text-white">BTC x ETH</h5>
                  </div>
                </div>
                <h3 className=" fs-5 mt-5 text-center mb-4">
                  Our safest basket with Cega's <br></br> strongest protection
                  from negative market movements. Sit back, relax & enjoy your
                  yield.
                </h3>
                <h3 className="text-center">Quoted Yield (APY)</h3>
                <h1 className="text-center ">10.25%</h1>
                <div className="row mt-5">
                  <div className="col-6 d-flex justify-content-start">
                    <div className="align-content-lg-start">
                      <h4 className="text-muted">Price Drop Protection</h4>
                      <h4 className="text-muted">Product TVL</h4>
                      <h4 className="text-muted">Deposit Limit</h4>
                      <h4 className="text-muted">Investment Duration</h4>
                    </div>
                  </div>
                  <div className="col-6 d-flex justify-content-end mb-5">
                    <div className="align-content-lg-end">
                      <h4 className="text-bold">90</h4>
                      <h4>$9,547,461.26</h4>
                      <h4>$10,500,000.00</h4>
                      <h4>30 days</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="container card-1 card bg-white height mt-5 mb-5 Shadow warning ">
                <div className="row image  ">
                  <div className="col-4 p-0">
                    <img
                      src="	https://cdn.glitch.global/11976b1b-56cf-4260-a8a7-c4ffa2875b78/genesis_thumbnail.jpg?v=1655976683663"
                      class="img-fluid border-radius-none"
                      alt="..."
                    />
                  </div>
                  <div className="col-8 bg-black">
                    <h5 className="text-white mt-4">Fixed Coupon Note</h5>
                    <h5 className="fw-bold text-white">Genesis Basket</h5>
                    <h5 className="text-white">BTC x ETH</h5>
                  </div>
                </div>
                <h3 className=" fs-5 mt-5 text-center mb-4">
                  Our safest basket with Cega's <br></br> strongest protection
                  from negative market movements. Sit back, relax & enjoy your
                  yield.
                </h3>
                <h3 className="text-center">Quoted Yield (APY)</h3>
                <h1 className="text-center ">10.25%</h1>
                <div className="row mt-5">
                  <div className="col-lg-6 d-flex justify-content-start">
                    <div className="align-content-lg-start">
                      <h4 className="text-muted">Price Drop Protection</h4>
                      <h4 className="text-muted">Product TVL</h4>
                      <h4 className="text-muted">Deposit Limit</h4>
                      <h4 className="text-muted">Investment Duration</h4>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-end mb-5">
                    <div className="align-content-lg-end">
                      <h4 className="text-bold">90</h4>
                      <h4>$9,547,461.26</h4>
                      <h4>$10,500,000.00</h4>
                      <h4>30 days</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 ">
              <div className="container card-1 card bg-white height mt-5 mb-5 Shadow warning ">
                <div className="row image  ">
                  <div className="col-4 p-0">
                    <img
                      src="https://cdn.glitch.global/11976b1b-56cf-4260-a8a7-c4ffa2875b78/gotta_go_fast_thumbnail.jpg?v=1655976679079"
                      class="img-fluid border-radius-none"
                      alt="..."
                    />
                  </div>
                  <div className="col-8 bg-black">
                    <h5 className="text-white mt-4">Fixed Coupon Note</h5>
                    <h5 className="fw-bold text-white">Genesis Basket</h5>
                    <h5 className="text-white">BTC x ETH</h5>
                  </div>
                </div>
                <h3 className=" fs-5 mt-5 text-center mb-4">
                  Our safest basket with Cega's <br></br> strongest protection
                  from negative market movements. Sit back, relax & enjoy your
                  yield.
                </h3>
                <h3 className="text-center">Quoted Yield (APY)</h3>
                <h1 className="text-center ">10.25%</h1>
                <div className="row mt-5">
                  <div className="col-6 d-flex justify-content-start">
                    <div className="align-content-lg-start">
                      <h4 className="text-muted">Price Drop Protection</h4>
                      <h4 className="text-muted">Product TVL</h4>
                      <h4 className="text-muted">Deposit Limit</h4>
                      <h4 className="text-muted">Investment Duration</h4>
                    </div>
                  </div>
                  <div className="col-6 d-flex justify-content-end mb-5">
                    <div className="align-content-lg-end">
                      <h4 className="text-bold">90</h4>
                      <h4>$9,547,461.26</h4>
                      <h4>$10,500,000.00</h4>
                      <h4>30 days</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="col-lg-6 ">
              <div className="container card-1 card bg-white height mt-5 mb-5 Shadow warning ">
                <div className="row image  ">
                  <div className="col-4 p-0">
                    <img
                      src="	https://cdn.glitch.global/11976b1b-56cf-4260-a8a7-c4ffa2875b78/insanic_thumbnail.jpg?v=1655976688751"
                      class="img-fluid border-radius-none"
                      alt="..."
                    />
                  </div>
                  <div className="col-8 bg-black">
                    <h5 className="text-white mt-4">Fixed Coupon Note</h5>
                    <h5 className="fw-bold text-white">Genesis Basket</h5>
                    <h5 className="text-white">BTC x ETH</h5>
                  </div>
                </div>
                <h3 className=" fs-5 mt-5 text-center mb-4">
                  Our safest basket with Cega's <br></br> strongest protection
                  from negative market movements. Sit back, relax & enjoy your
                  yield.
                </h3>
                <h3 className="text-center">Quoted Yield (APY)</h3>
                <h1 className="text-center ">10.25%</h1>
                <div className="row mt-5">
                  <div className="col-6 d-flex justify-content-start">
                    <div className="align-content-lg-start">
                      <h4 className="text-muted">Price Drop Protection</h4>
                      <h4 className="text-muted">Product TVL</h4>
                      <h4 className="text-muted">Deposit Limit</h4>
                      <h4 className="text-muted">Investment Duration</h4>
                    </div>
                  </div>
                  <div className="col-6 d-flex justify-content-end mb-5">
                    <div className="align-content-lg-end">
                      <h4 className="text-bold">90</h4>
                      <h4>$9,547,461.26</h4>
                      <h4>$10,500,000.00</h4>
                      <h4>30 days</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container> */}
    </section>
  );
};
