import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <div className="Container-h1">
      <div className="containerglobal">
        <div className="link">
          <Link to="/">Home</Link>
          <Link to="/listagem">Listagem</Link>
        </div>
        <div className="menu">
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  color={"black"}
                  isActive={isOpen}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  {isOpen ? "Login" : "Login"}
                </MenuButton>
                <MenuList>
                  <MenuItem
                    onClick={() => (window.location.href = "/login")}
                    color={"black"}
                  >
                    Fazer Login
                  </MenuItem>
                  <MenuItem
                    onClick={() => (window.location.href = "/cadastro")}
                    color={"black"}
                  >
                    Criar uma Conta
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
