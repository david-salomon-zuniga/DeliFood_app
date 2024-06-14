import * as React from "react";
import { useEffect } from "react";
import Seo from "../components/seo";
import {createAllPagesDinamically,fetchData} from "../components/createAllPagesDinamically";
import "../components/layout.css";


const IndexPage: React.FC = () => {
  
  useEffect(() => {
    fetchData();
    createAllPagesDinamically();
  }, []);

  return (
    <main id="idMain">
    </main>
  )
}

export const Head = () => <Seo title="welcome" />

export default IndexPage;
