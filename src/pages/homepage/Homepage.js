import { useEffect } from "react";
import HomePageNav from "./HomePageNav";
import HomePageAYN from "./HomePageAYN";
// import HomePageLeft from './HomePageLeft'
// import HomePageRight from './HomePageRight'
// import HomePageNext from './HomePageNext'
// import HomePageAboutUs from './HomePageAboutUs'
// import HomepageContactUs from './HomepageContactUs'

// import second from '../../images/placeholders/landscape_Images/featured_grid.jpg'
// import third from '../../images/placeholders//landscape_Images/landscape_01.png'
// import fourth from '../../images/placeholders/landscape_Images/landscape-02.png'

const Homepage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div id="homePage" className="relative grid gtc12">
      {/* Page Main Start */}
      <main id="" className="white-90 gc1s12 grid gtc12 gradientRL">
        {/* Architect Your Next Start */}
        <section id="homePage_architect_your_next" className="bb bw3 gc1s12">
          <HomePageAYN />
        </section>
        {/* <!-- Architect Your Next End --> */}
      </main>
      {/* <!-- Page Main End --> */}

      {/* <!-- Page Footer Start --> */}
      <footer id="homePage__footer" className="bg-gray gc1s12 tc">
        Home Page Footer
      </footer>
      {/* <!-- Page Footer End --> */}
    </div>
  );
};

export default Homepage;
