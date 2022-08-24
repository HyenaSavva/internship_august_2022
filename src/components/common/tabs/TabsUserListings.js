import React from "react";

import TabsRowStyles from "./TabsRowStyles";

const TabsUserListings = ({
  tabAllListings,
  handleAllListings,
  handleMyListings,
}) => {
  return (
    <div className="flex tabs--user">
      <div
        className={tabAllListings ? "tab tab-active" : "tab"}
        onClick={handleAllListings}
      >
        All listings
      </div>
      <div
        className={!tabAllListings ? "tab tab-active" : "tab"}
        onClick={handleMyListings}
      >
        My listings
      </div>
      <style jsx>{TabsRowStyles}</style>
    </div>
  );
};

export default TabsUserListings;
