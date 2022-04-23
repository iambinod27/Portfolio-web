import ImageContent from "../assets/ImageContent.jpeg";

const Landing = () => {
  return (
    <>
      <div className="container">
        <section className="home">
          <div className="textContent">
            <h2>HELLO! I'm Binod. I am Frontend Developer.</h2>
            <p>I code beautifully simple things, and I love what I do.</p>
            <button className="btn">
              <a href="./CV.pdf" className="download" download>
                Download Resume
              </a>
            </button>
          </div>
          <div className="ImageContent">
            <img src={ImageContent} alt="" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Landing;
