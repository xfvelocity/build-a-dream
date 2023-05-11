import React from "react";

import "./BdFooter.scss";

const BdFooter = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <div className="bd-footer xf-p-4 xf-p-lg-6 xf-bg-white">
      <p className="xf-text-12 xf-text-center">
        &copy; {currentYear} Build A-Dream Landscape Gardeners
      </p>
    </div>
  );
};

export default BdFooter;
