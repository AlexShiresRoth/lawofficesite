import React, { useState, useEffect } from "react";
import navStyle from "./Nav.module.scss";
import MobileNav from "./MobileNav";
import { NavLink, withRouter } from "react-router-dom";
import { estateSvg, trust, challenges, bankruptcy } from "./navSvgs";
import { MdClose, MdArrowDropDown } from "react-icons/md";
import { connect } from "react-redux";

interface NavProps {
  history: any;
  refs?: any;
}

const Nav = ({ history, refs: { ref } }: NavProps) => {
  const servicesArr = [
    { title: "Estate Planning", icon: estateSvg, path: "/estateplanning" },
    {
      title: "Estate & Trust Administration",
      icon: trust,
      path: "/estateadmin",
    },
    {
      title: "Estate & Trust Challenges",
      icon: challenges,
      path: "/estateandtrust",
    },
    { title: "Bankruptcy", icon: bankruptcy, path: "/bankruptcy" },
  ];

  const [isMenu, showMenu] = useState<boolean>(false);

  const [navBg, setNavBg] = useState(false);

  const scrollToContact = () => {
    console.log(ref);
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavBg(true);
      } else setNavBg(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={navStyle.navigation}
      style={
        navBg
          ? { boxShadow: "0 1px 20px #22222233" }
          : { boxShadow: "0 0px 0px 1px #eee" }
      }
    >
      <MobileNav services={servicesArr} />
      <div className={navStyle.nav_container}>
        <div className={navStyle.nav_left}>
          <NavLink to="/">
            <img
              src={`https://res.cloudinary.com/snackmanproductions/image/upload/v1587183467/lawoffice/lawofficelogo_fdaxgi.png`}
              alt="logo"
            />
          </NavLink>
        </div>
        <div className={navStyle.nav_right}>
          <div
            className={navStyle.nav_col}
            onMouseEnter={() => showMenu(true)}
            onMouseLeave={() => showMenu(false)}
          >
            <button>
              {!isMenu ? (
                <>
                  Services <MdArrowDropDown />
                </>
              ) : (
                <>
                  Services <MdClose />{" "}
                  <div className={navStyle.services}>
                    {servicesArr.map(
                      (
                        service: { icon: any; title: string; path: string },
                        i
                      ) => {
                        return (
                          <div className={navStyle.col} key={i}>
                            <div className={navStyle.inner}>
                              <div className={navStyle.icon}>
                                {service.icon}
                              </div>
                              <NavLink to={service.path}>
                                {service.title}
                              </NavLink>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </>
              )}
            </button>
          </div>
          <div className={navStyle.nav_col}>
            <span></span>

            <NavLink to="/about">
              <button>About</button>
            </NavLink>
          </div>
          <div className={navStyle.nav_col}>
            <span></span>

            <button onClick={() => scrollToContact()}>Contact</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state: any) => ({
  refs: state.refs,
});

export default connect(mapStateToProps, null)(withRouter(Nav));
