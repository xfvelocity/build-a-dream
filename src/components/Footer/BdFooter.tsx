import React from "react";

import "./BdFooter.scss";

const BdFooter = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <div className="bd-footer xf-p-4 xf-p-lg-6 xf-p-xl-8 xf-bg-white">
      <p className="xf-text-12 xf-text-center xf-text-14-xl">
        &copy; {currentYear} Build A-Dream Landscape Gardeners
      </p>
    </div>
  );
};

export default BdFooter;
