import React from "react";
import {NavigationSK} from "../NavigationSK";
import {SimilarBachelors} from "./SimilarBachelors";
import {ExistingSolutions} from "./ExistingSolutions";
import {UsedTechnologies} from "./UsedTechnologies";

export const ResourcesPage: React.FC = () => {
  return (
    <>
      <NavigationSK/>
      <div className="container-parent">
        <SimilarBachelors/>
        <ExistingSolutions/>
        <UsedTechnologies/>
      </div>
    </>
  )
}