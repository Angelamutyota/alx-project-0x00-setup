import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";


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

      <div className="mt-10 space-y-4">
        <h2 className="text-lg font-semibold">Button Variants</h2>

        <div className="flex gap-4 flex-wrap">
   
          <Button title="Medium - Rounded SM" size="medium" shape="rounded-sm" />
          <Button title="Medium - Rounded MD" size="medium" shape="rounded-md" />
          <Button title="Medium - Rounded Full" size="medium" shape="rounded-full" />

        </div>
      </div>
    </div>
  );
};

export default Landing;
