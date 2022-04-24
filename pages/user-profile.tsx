import * as React from "react";
import styles from "../styles/User-profile.module.scss";
import Image from "next/image";
export interface UserProfileProps {}

export default function UserProfile(props: UserProfileProps) {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.header} `}>
        <div className={`${styles.header_info} d-flex justify-content-end`}>
          <div className={`d-flex justify-content-end flex-column`}>
            <p>Nguyen Van An</p>
            <p>Project Manager</p>
          </div>
          <Image src="/images/avatar.png" width="44px" height="44px" alt="" />
        </div>
      </div>
      <div className={`${styles.sidebar} fixed-top`}></div>

      <div
        className={`${styles.container_content} d-flex justify-content-center flex-column`}
      >
        {/* Profile title */}
        <div
          className={`${styles.profile_title}  d-flex justify-content-between align-items-center`}
        >
          <div className={`d-flex align-items-center`}>
            <a className={`${styles.back_icon} position-relative`}>
              <div className="position-absolute top-50 start-50 translate-middle">
                <Image
                  src="/images/back-icon.svg"
                  alt=""
                  width="22px"
                  height="12px"
                />
              </div>
            </a>
            <h2>User Profile</h2>
          </div>
          <div className={`d-flex justify-content-end`}>
            <button className={styles.btn_deactive}>
              <Image
                src="/images/deactive-icon.svg"
                alt=""
                width="16px"
                height="16px"
                className={styles.icon_style}
              />
              <span>Deactive user</span>
            </button>
            <button className={styles.btn_primary}>
              <Image
                src="/images/edit-icon.svg"
                alt=""
                width="16px"
                height="16px"
                className={styles.icon_style}
              />
              <span>Edit</span>
            </button>
          </div>
        </div>

        {/* Nav menu */}
        <div className={`${styles.nav_menu} d-flex align-items-center`}>
          <ul className={` d-flex align-items-center`}>
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Skill Sheet</a>
            </li>
            <li>
              <a>Project</a>
            </li>
          </ul>
        </div>

        {/* Main profile */}
        <div className={`${styles.main_profile} `}>
          <div className={`${styles.user_profile} d-flex align-items-center`}>
            <Image
              src="/images/avatar.png"
              alt=""
              width="100px"
              height="100px"
            />
            <div className={`${styles.user_profile_info}`}>
              <h3>Nguyen Thi Thanh Uyen</h3>
              <p>Java Full-stack Developer | Senior level</p>
            </div>
          </div>
          <div className={`${styles.border_line}`}></div>
        </div>
      </div>
    </div>
  );
}
