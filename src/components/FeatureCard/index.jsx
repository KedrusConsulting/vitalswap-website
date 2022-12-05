import React from "react";

function FeatureCard({ icon, label, bgIcon }) {
  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="features__card">
      {icon}

      <p>{label}</p>

      {bgIcon}
    </div>
  );
}

export default FeatureCard;
