import React, { useState } from "react";

import { TbArrowBigRightLines } from "react-icons/tb";
import Link from "next/link";
import styles from "./SideBar.module.css";
import { menuItems } from "./menuItems";
import { useRouter } from "next/router";
import { Avatar } from "@mui/material";

const Sidebar = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { asPath } = useRouter();
  const getActiveRouter = (item: { path?: string; name: any }) => {
    if (asPath.split("/").includes("my-products") && item.name === "Courses")
      return `${styles.active}`;
    else if (asPath.includes("manage-users") && item.name === "Manage Users")
      return `${styles.active}`;
    else
      return asPath.includes(item.name.toLowerCase()) ? `${styles.active}` : "";
  };

  return (
    <div className={styles.container}>
      <div style={{ width: isOpen ? "  " : "50px" }} className={styles.sidebar}>
        <div className={isOpen ? styles.svgIconActive : styles.svgIcon}>
          <TbArrowBigRightLines size={40} onClick={toggle} />
        </div>
        <div className={styles.top_section}>
        <Avatar
            alt="Remy Sharp"
            sx={{ width: 120, height: 120 }}
            // src={}
            // style={{ display: isOpen ? "" : "none", flexShrink:"2" }}
            className={isOpen ? styles.avatarOpen : styles.avatarClose}
          />
          {/* <h1 className={isOpen ? styles.logoOpen : styles.logoClose}>Logo</h1> */}
        </div>
        <div className={styles.menuItems}>
          {menuItems.map(({ Icon, ...item }, index) => (
            <Link
              href={item.path}
              key={index}
              className={`${styles.link} ${getActiveRouter(item)}`}>
              <div className={`${styles.icon}`}>
                <Icon />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none", flexShrink:"0" }}
                className={styles.link_text}>
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <main className={isOpen ? styles.mainOpen : styles.mainClose}>
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
