import {
  Flex,
  Drawer,
  Box,
  DrawerBody,
  Tooltip,
} from "@sparrowengg/twigs-react";

import MenuIcon from "./../asset/menu.svg";
import SideBarIcon1 from "./../asset/sidebarImg1.svg";
import SideBarIcon2 from "./../asset/sidebarImg2.svg";
import SideBarIcon3 from "./../asset/sidebarImg3.svg";
import MessageIcon from "./../asset/message-square.svg";
import MessageIconLight from "./../asset/message-squarelight.svg";

import Icon1 from "./../asset/icon1.svg";
import Icon2 from "./../asset/icon2.svg";
import Icon3 from "./../asset/icon3.svg";
import Icon4 from "./../asset/icon4.svg";
import Icon5 from "./../asset/icon5.svg";

// Light icons
import lightIcon from "./../asset/commandLight.svg";
import lightIcon2 from "./../asset/pie-chartlight.svg";
import lightIcon3 from "./../asset/clockLight.svg";
import lightIcon4 from "./../asset/globelight.svg";
import lightIcon5 from "./../asset/loaderlight.svg";

import { useState } from "react";
import { useSelector } from "react-redux";
import { LightMode } from "../redux/light-dark/lightDarkTypes";

const imgArr = [SideBarIcon1, SideBarIcon2, SideBarIcon3];
const IconArr = [
  {
    light: Icon1,
    dark: lightIcon,
  },
  {
    light: Icon2,
    dark: lightIcon2,
  },
  {
    light: Icon3,
    dark: lightIcon3,
  },
  {
    light: Icon4,
    dark: lightIcon4,
  },
  {
    light: Icon5,
    dark: lightIcon5,
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mode = useSelector((store) => store.lightdarkmode.lightDarkMode);

  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        css={{
          height: "100%",
          width: "80px",
          backgroundColor: "$primary",
        }}
      >
        {/* upper container */}
        <Flex flexDirection="column" alignItems="center">
          <Flex
            justifyContent="center"
            alignItems="center"
            css={{
              padding: "30px",
              cursor: "pointer",
            }}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <img
              src={MenuIcon}
              alt=""
              style={{
                width: "20px",
                height: "20px",
              }}
            />
          </Flex>

          <Box
            css={{
              width: "2px",
              height: "40px",
              transform: "rotate(90deg)",
              marginTop: "-16px",
              background:
                mode === LightMode
                  ? "linear-gradient(180deg, rgba(238, 236, 250, 0) 0%, #F9F9F9 51.44%, rgba(238, 236, 250, 0) 100%)"
                  : "linear-gradient(180deg, rgba(44, 44, 46, 0) 0%, rgba(84, 84, 88, 0.65) 51.44%, rgba(44, 44, 46, 0) 100%)",
            }}
          ></Box>

          {imgArr.map((url, idx) => {
            return (
              <img
                src={url}
                style={{
                  width: "40px",
                  height: "40px",
                  margin: "13px 0",
                  cursor: "pointer",
                }}
                key={idx}
                alt=""
              />
            );
          })}

          <Box
            css={{
              width: "2px",
              height: "40px",
              transform: "rotate(90deg)",
              background:
                mode === LightMode
                  ? "linear-gradient(180deg, rgba(238, 236, 250, 0) 0%, #F9F9F9 51.44%, rgba(238, 236, 250, 0) 100%)"
                  : "linear-gradient(180deg, rgba(44, 44, 46, 0) 0%, rgba(84, 84, 88, 0.65) 51.44%, rgba(44, 44, 46, 0) 100%)",
            }}
          ></Box>

          {/* Icons */}
          <Flex
            flexDirection="column"
            alignItems="center"
            css={{
              padding: "2px",
              backgroundColor: "$secondaryLight",
              borderRadius: "15px",
              marginTop: "13px",
            }}
            gap="8px"
          >
            {IconArr.map((icon, idx) => {
              return (
                <Flex
                  key={idx}
                  css={{
                    backgroundColor:
                      idx === 0
                        ? mode === LightMode
                          ? "$primary"
                          : "#787880"
                        : "",
                    borderRadius: "15px",
                    width: "40px",
                    height: "40px",
                    boxShadow: idx === 0 ? "0px 4px 4px 0px #00000014" : "",
                  }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <img
                    src={mode === LightMode ? icon?.light : icon?.dark}
                    alt=""
                    style={{
                      width: "14px",
                      height: "14px",
                    }}
                  />
                </Flex>
              );
            })}
          </Flex>
        </Flex>

        {/* lower container */}
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Box
            css={{
              width: "2px",
              height: "40px",
              transform: "rotate(90deg)",
              background:
                mode === LightMode
                  ? "linear-gradient(180deg, rgba(238, 236, 250, 0) 0%, #F9F9F9 51.44%, rgba(238, 236, 250, 0) 100%)"
                  : "linear-gradient(180deg, rgba(44, 44, 46, 0) 0%, rgba(84, 84, 88, 0.65) 51.44%, rgba(44, 44, 46, 0) 100%)",
            }}
          />

          <Tooltip content="Message">
            <Flex
              css={{
                height: "44px",
                width: "44px",
                marginBlock: "13px",
                borderRadius: "15px",
                backgroundColor: "$secondary",
                cursor: "pointer",
              }}
              justifyContent="center"
              alignItems="center"
            >
              <img
                src={mode === LightMode ? MessageIcon : MessageIconLight}
                alt=""
              />
            </Flex>
          </Tooltip>
        </Flex>
      </Flex>

      <Drawer placement="left" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DrawerBody>Hellow from abhay to Febin!</DrawerBody>
      </Drawer>
    </>
  );
};

export default Sidebar;
