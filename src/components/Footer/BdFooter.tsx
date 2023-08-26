import React from "react";

// ** Styles **
import "./BdFooter.scss";

const BdFooter = () => {
  // ** Data **
  const currentYear: number = new Date().getFullYear();

  return (
    <div className="bd-footer xf-p-4  xf-bg-white">
      <p className="xf-text-12 xf-text-center xf-text-14-xl">
        &copy; {currentYear} Build A-Dream Landscape Gardeners
      </p>
    </div>
  );
};

export default BdFooter;
