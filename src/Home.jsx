function Home() {
  let dev = "Neelamber Mishra";
  let a = "<>";

  return (
    <div className="home" id="home">
      <h1>web-developer</h1>
      <p className="links">
        say hello <i className="fas fa-coffee"></i>
      </p>
      <p className="intro">
        Hello i am {dev} , a computer science student at the Indian Institute of
        technology (IIT dhanbad). current fields of studying include machine learning
        , full-stack web-development, competetive coding and quant.
      </p>

      <a href="#">
        <button>Contact</button>
      </a>
    </div>
  );
}

export default Home;
