import { ReactNode } from "react";
import { MdSettingsSuggest } from "react-icons/md";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";

export type menuItemType = {
  path: string;
  name: string;
  Icon: any;
}[];

export const menuItems: menuItemType = [
  {
    path: "/",
    name: "Dashboard",
    Icon: FaTh,
  },
  {
    path: "/0123/profile",
    name: "Profile",
    Icon: FaUserAlt,
  },
  {
    path: "/0123/manage-users",
    name: "Manage Users",
    Icon: FaRegChartBar,
  },
  {
    path: "/0123/chat",
    name: "Chat",
    Icon: FaCommentAlt,
  },
  {
    path: "/0123/my-products",
    name: "Courses",
    Icon: FaShoppingBag,
  },
  {
    path: "/0123/my-exercises",
    name: "Exercises",
    Icon: FaThList,
  },
  {
    path: "/0123/settings",
    name: "Settings",
    Icon: MdSettingsSuggest,
  },
];
