import React from "react";

import TabsRowStyles from "./TabsRowStyles";

const TabsUserListings = () => {
  return (
    <div className="flex tabs--user">
      <div className="tab">All listings</div>
      <div className="tab">My listings</div>
      <style jsx>{TabsRowStyles}</style>
    </div>
  );
};

export default TabsUserListings;
