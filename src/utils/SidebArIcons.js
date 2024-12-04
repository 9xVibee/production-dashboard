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

const sideBarImages = [SideBarIcon1, SideBarIcon2, SideBarIcon3];
const sideBarIcons = [
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

export const icons = {
  sideBarImages,
  sideBarIcons,
  MessageIcon,
  MessageIconLight,
  MenuIcon,
};
