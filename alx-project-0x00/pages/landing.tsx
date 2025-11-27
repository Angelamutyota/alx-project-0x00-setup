import React from "react";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      {/* Render one Card */}
      <div className="mt-6">
        <Card />
      </div>

      {/* Duplicate to see multiple cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Landing;
