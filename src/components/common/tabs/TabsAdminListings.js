import React from "react";

import TabsRowStyles from "./TabsRowStyles";

const TabsAdminListings = ({
  tabAllListings,
  handleAllListings,
  handlePendingListings,
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
        onClick={handlePendingListings}
      >
        Pending approval
      </div>
      <style jsx>{TabsRowStyles}</style>
    </div>
  );
};

export default TabsAdminListings;
