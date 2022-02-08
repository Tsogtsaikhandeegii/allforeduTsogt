import { Flex, Link } from "@chakra-ui/react";
import React from "react";
import Header from "./header";
import Menu from "./menu";
import Menufooter from "./menufooter";

class Layout extends React.Component {
  render() {
    const { children, title, image } = this.props;

    return (
      <>
        <Header title={title} image={image} />
        <main className="relative">
          {/* <Flex as="nav" sx={styles.nav}>
            {Menu.map((Menu,i)=>(
              <Link
              activityClass="active"
              to={Menu.menus}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={i}
              >
                {Menu.menus}
              </Link>
            ))}
          </Flex> */}
          <Menu />
          {children}
        </main>
        <main className="relative">
          <Menufooter />
        </main>
      </>
    );
  }
}

export default Layout;
