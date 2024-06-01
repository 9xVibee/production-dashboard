import {
  Flex,
  Drawer,
  Box,
  DrawerBody,
  Tooltip,
  styled,
} from "@sparrowengg/twigs-react";

// side bar icons
import { icons } from "./../utils/SidebArIcons";
const { sideBarIcons, sideBarImages, MenuIcon, MessageIcon, MessageIconLight } =
  icons;

import { useState } from "react";
import { useSelector } from "react-redux";
import { LIGHT_MODE } from "../redux/light-dark/lightDarkTypes";

const Sidebar = () => {
  // states
  const [isOpen, setIsOpen] = useState(false);

  // selector
  const mode = useSelector((store) => store.lightDarkMode.lightDarkModeValue);

  // image styled
  const Image = styled("img", {
    height: "$2",
    width: "$2",
  });

  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        css={{
          height: "100%",
          width: "$20",
          backgroundColor: "$primary",
        }}
      >
        {/* upper container */}
        <Flex flexDirection="column" alignItems="center">
          <Flex
            justifyContent="center"
            alignItems="center"
            css={{
              padding: "$15",
              cursor: "pointer",
            }}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <Image
              src={MenuIcon}
              alt="Menu Icon"
              css={{
                width: "$5",
                height: "$5",
              }}
            />
          </Flex>

          <Box
            css={{
              width: 2,
              height: "$10",
              transform: "rotate(90deg)",
              marginTop: "-$8",
              background:
                mode === LIGHT_MODE
                  ? "linear-gradient(180deg, rgba(238, 236, 250, 0) 0%, #F9F9F9 51.44%, rgba(238, 236, 250, 0) 100%)"
                  : "linear-gradient(180deg, rgba(44, 44, 46, 0) 0%, rgba(84, 84, 88, 0.65) 51.44%, rgba(44, 44, 46, 0) 100%)",
            }}
          />

          {sideBarImages.map((url, idx) => {
            return (
              <Image
                src={url}
                css={{
                  width: "$10",
                  height: "$10",
                  marginBlock: "13px",
                  cursor: "pointer",
                }}
                key={url}
                alt="Side bar Image"
              />
            );
          })}

          <Box
            css={{
              width: 2,
              height: "$10",
              transform: "rotate(90deg)",
              background:
                mode === LIGHT_MODE
                  ? "linear-gradient(180deg, rgba(238, 236, 250, 0) 0%, #F9F9F9 51.44%, rgba(238, 236, 250, 0) 100%)"
                  : "linear-gradient(180deg, rgba(44, 44, 46, 0) 0%, rgba(84, 84, 88, 0.65) 51.44%, rgba(44, 44, 46, 0) 100%)",
            }}
          />

          {/* Icons */}
          <Flex
            flexDirection="column"
            alignItems="center"
            css={{
              padding: "$1",
              backgroundColor: "$secondaryLight",
              borderRadius: "$2xl",
              marginTop: 13,
            }}
            gap="$4"
          >
            {sideBarIcons.map((icon, idx) => {
              return (
                <Flex
                  key={icon}
                  css={{
                    backgroundColor:
                      idx === 0
                        ? mode === LIGHT_MODE
                          ? "$primary"
                          : "#787880"
                        : "",
                    borderRadius: "$2xl",
                    width: "$10",
                    height: "$10",
                    boxShadow: idx === 0 ? "0px 4px 4px 0px #00000014" : "",
                  }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <img
                    src={mode === LIGHT_MODE ? icon?.light : icon?.dark}
                    alt="Sidebar Icons"
                    style={{
                      width: 14,
                      height: 14,
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
              width: 2,
              height: "$10",
              transform: "rotate(90deg)",
              background:
                mode === LIGHT_MODE
                  ? "linear-gradient(180deg, rgba(238, 236, 250, 0) 0%, #F9F9F9 51.44%, rgba(238, 236, 250, 0) 100%)"
                  : "linear-gradient(180deg, rgba(44, 44, 46, 0) 0%, rgba(84, 84, 88, 0.65) 51.44%, rgba(44, 44, 46, 0) 100%)",
            }}
          />

          <Tooltip content="Message">
            <Flex
              css={{
                height: "$11",
                width: "$11",
                marginBlock: 13,
                borderRadius: "$2xl",
                backgroundColor: "$secondary",
                cursor: "pointer",
              }}
              justifyContent="center"
              alignItems="center"
            >
              <img
                src={mode === LIGHT_MODE ? MessageIcon : MessageIconLight}
                alt="Message Icon"
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
