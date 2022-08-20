import React from "react";

import TabsRowStyles from "./TabsRowStyles";

const TabsAdminListings = () => {
  return (
    <div className="flex tabs--user">
      <div className="tab">All listings</div>
      <div className="tab">Pending approval</div>
      <style jsx>{TabsRowStyles}</style>
    </div>
  );
};

export default TabsAdminListings;
