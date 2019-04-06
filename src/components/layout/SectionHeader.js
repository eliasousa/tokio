import React from "react";

const SectionHeader = ({ title, subtitle, icon }) => {
  return (
    <h2 className="ui header">
      <i className={`${icon} icon`} />
      <div className="content">
        {title}
        <div className="sub header">{subtitle}</div>
      </div>
    </h2>
  );
};

export default SectionHeader;
