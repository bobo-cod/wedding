import React, { useState } from "react";
import { GlassWater, CheckCircle2 } from "lucide-react";
import { config } from "../config";
import { SectionHeader } from "./SectionHeader";
import { Card } from "./Card";

// Individual Drink Pill Button
export function DrinkPill({ selected, children, ...props }) {
  return (
    <button
      type="button"
      className={`rounded-full border px-4 py-2 text-sm font-medium transition duration-300 ${
        selected
          ? "border-primaryDark bg-primaryDark text-white shadow-glow"
          : "border-borderSoft bg-white/75 text-navyGray hover:border-primaryDark hover:bg-primarySoft"
      }`}
      {...props}
    >
      {children}
    </button>
  );
}

// Subcategory List Container
export function DrinkCategory({ title, drinks, selectedList, onToggle }) {
  return (
    <div className="mb-10 text-center last:mb-0">
      <h3 className="mb-5 text-xl font-semibold text-navyGray">{title}</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {drinks.map((drink) => (
          <DrinkPill
            key={drink}
            selected={selectedList.includes(drink)}
            onClick={() => onToggle(drink)}
          >
            {drink}
          </DrinkPill>
        ))}
      </div>
    </div>
  );
}

// Main Drinks Component
export function Drinks() {
  const { drinks } = config;
  const [selectedDrinks, setSelectedDrinks] = useState(["Energy Malt", "Vitalo"]);

  const handleToggleDrink = (drinkName) => {
    setSelectedDrinks((prev) =>
      prev.includes(drinkName)
        ? prev.filter((d) => d !== drinkName)
        : [...prev, drinkName]
    );
  };

  return (
    <section id="drinks" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          title="Drinks"
          subtitle="Help us plan our big day by suggesting your favorite drinks."
        />

        <Card className="mx-auto mt-12 max-w-6xl">
          {/* Header icon */}
          <div className="mb-10 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primarySoft text-primaryDeep ring-1 ring-primary/40">
              <GlassWater size={30} />
            </div>
          </div>

          {/* Non-Alcoholic Category */}
          <DrinkCategory
            title="Non-Alcoholic Drinks"
            drinks={drinks.nonAlcoholic}
            selectedList={selectedDrinks}
            onToggle={handleToggleDrink}
          />

          {/* Alcoholic Category */}
          <DrinkCategory
            title="Alcoholic Beverages"
            drinks={drinks.alcoholic}
            selectedList={selectedDrinks}
            onToggle={handleToggleDrink}
          />

          {/* Selection Stats Footer */}
          <div className="mt-10 flex items-center justify-center gap-3 rounded-2xl border border-primary/50 bg-primarySoft px-5 py-4 text-center font-medium text-navyGray">
            <CheckCircle2 className="text-primaryDeep" size={22} />
            <span>{selectedDrinks.length} drink(s) chosen.</span>
          </div>
        </Card>
      </div>
    </section>
  );
}
export default Drinks;
