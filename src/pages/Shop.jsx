import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import FeaturedProducts from "../components/FeaturedProducts";

function Shop() {


  const [search, setSearch] = useState("");


  const [searchParams] = useSearchParams();


  const category = searchParams.get("category");
  const searchQuery = searchParams.get("search") || search;



  return (
    <>

      



      <div
        style={{
          padding: "60px",
          background: "#f8fff8",
        }}
      >


        <h1
          style={{
            textAlign:"center",
            color:"#1b5e20",
            marginBottom:"40px",
          }}
        >

          {category ? category : "Our Shop"}

        </h1>



       <FeaturedProducts
  search={searchQuery}
  selectedCategory={category}
        />


      </div>



      

    </>
  );
}


export default Shop;