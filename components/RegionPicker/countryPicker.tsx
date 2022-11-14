import React, { Component, useState } from "react";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import "react-country-dropdown/dist/index.css";
import ReactFlagsSelect from "react-flags-select";
import styles from "./CountryPicker.module.css";
import { ReactCountryDropdown } from "react-country-dropdown";

type CoutryType = {
  name: string;
  code: string;
  capital: string;
  region: string;
  latlng: number[];
};

export const CountryPicker = ({ trainerData, setTrainerData }) => {
  const [selected, setSelected] = useState("");
  const [region, setRegion] = useState("");
  const [flagId, setFlagId] = useState("");
  const handleSelect = (country: string) => {
    console.log(country);
    setSelected(country);
    setTrainerData({ ...trainerData, country: country });
    setTrainerData({ ...trainerData, country: country });
    /* returns the details on selected country as an object
    	{
          name: "United States of America", 
          code: "US", 
          capital: "Washington, D.C.", 
          region: "Americas", 
          latlng: [38, -97]
        }
    */
  };
  return (
    <div className={styles.countryFlagPicker}>
      <ReactFlagsSelect
        selected={trainerData.country}
        showSecondarySelectedLabel={false}
        onSelect={(val) => handleSelect(val)}
      />
      <RegionDropdown
        classes={`${styles.countryRegionPicker}`}
        country={trainerData.country}
        countryValueType="short"
        value={trainerData.area}
        onChange={(val) => setTrainerData({ ...trainerData, area: val })}
      />
    </div>
  );
};

export default CountryPicker;
