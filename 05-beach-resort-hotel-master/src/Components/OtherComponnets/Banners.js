import React from "react";

export default function Banners({ title, subtitle, children }) {
  return (
    <div className="Banner-content text-center">
      <h2>{title}</h2>
      <div className="hr-light"></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
