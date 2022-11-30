import React from "react";

function FeatureCard({ icon, label, bgIcon }) {
  return (
    <div className="features__card">
      {icon}

      <p>{label}</p>

      {bgIcon}
    </div>
  );
}

export default FeatureCard;
