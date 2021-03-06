import React from "react";
import Card from "./../Card";
import styles from './Location.module.css'

const Location = ({ address, mapUrl, location, zomatoUrl }) => {
  return (
    <div className={styles.location}>
      <Card>
        <div className={styles.location_content}>
          <div className={styles.location_image_section}>
            <img className={styles.location_image} src="/images/logo.png" />
          </div>
          <div className={styles.location_details_section}>
            <h3 className={styles.title}>LOCATION</h3>
            <p style={{ fontSize: "18px" }}>{location}</p>
            <h3 className={styles.title}>ADDRESS</h3>
            <p>{address}</p>
            <div style={{marginBottom:"10px"}}>
              <a title="click here to view in map" className={styles.icon} target="_blank" href={mapUrl} tabIndex="0">
                <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className={styles.location_footer}>
            {zomatoUrl && <>
              Find this restaurant on <a className={styles.link} href={zomatoUrl} tabIndex="0" target="_blank">
                Zomato
              </a>
            </>
            }
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Location;
