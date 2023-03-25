import arcade from "../images/icon-arcade.svg";
import advanced from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";

export const Plans = [
  {
    image: arcade,
    type: "arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
  },
  {
    image: advanced,
    type: "advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
  },
  {
    image: pro,
    type: "pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
  },
];

export const AddOns = [
  {
    type: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    type: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    type: "Customizable profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];
