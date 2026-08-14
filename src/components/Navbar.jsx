import logo from "../assets/logo/logo.png";
import products from "../data/products";

import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

import {
  FaShoppingCart,
  FaUser,
  FaSearch
} from "react-icons/fa";


function Navbar() {
  const [search, setSearch] = useState("");

  const { cart } = useContext(CartContext);

  const navigate = useNavigate();


  // ================= PRODUCT LINK =================

  const getProductLink = (name) =>
    `/shop?search=${encodeURIComponent(name)}`;


  // ================= SEARCH SUGGESTIONS =================

  const filteredSuggestions =
    search.trim() === ""
      ? []
      : products
          .filter((item) => {
            const text = search.toLowerCase();

            return (
              item.name.toLowerCase().includes(text) ||
              item.category.toLowerCase().includes(text) ||
              item.description.toLowerCase().includes(text)
            );
          })
          .slice(0, 6);


  // ================= SEARCH =================

  const handleSearch = () => {

    if (search.trim() === "") return;

    const result = products.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
    );


    if (result.length === 1) {

      setSearch("");

      navigate(`/shop?search=${encodeURIComponent(result[0].name)}`);

    } else {

      navigate(`/shop?search=${encodeURIComponent(search)}`);

    }

  };


  return (

    <header className="navbar">


      {/* ================= LOGO ================= */}

      <div className="logo">

        <Link to="/">

          <img
            src={logo}
            alt="Evergreen Nursery"
            className="logo-img"
          />

        </Link>

      </div>


      {/* ================= SEARCH BOX ================= */}

      <div className="search-box">

        <input
          type="text"
          placeholder="Search plants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}

          onKeyDown={(e) => {

            if (e.key === "Enter") {
              handleSearch();
            }

          }}

        />

        <button onClick={handleSearch}>
          <FaSearch />
        </button>


        {/* SEARCH SUGGESTIONS */}

        {search.trim() !== "" && (

          <div className="search-suggestions">

            {filteredSuggestions.length > 0 ? (

              filteredSuggestions.map((item) => (

                <div
                  key={item.id}
                  className="suggestion-item"

                  onClick={() => {

                    setSearch("");

                    navigate(
                      `/shop?search=${encodeURIComponent(item.name)}`
                    );

                  }}

                >

                  {item.name}

                </div>

              ))

            ) : (

              <div className="suggestion-item no-result">

                No results found

              </div>

            )}

          </div>

        )}

      </div>


      {/* ================= NAVIGATION ================= */}

      <nav className="nav-links">


        {/* HOME */}

        <Link to="/">
          Home
        </Link>


        {/* ================= PLANTS ================= */}

        <div className="dropdown">

          <Link to="/shop">
            Plants ▾
          </Link>

          <div className="dropdown-menu">

            <Link to={getProductLink("Snake Plant")}>
              Snake Plant
            </Link>

            <Link to={getProductLink("Money Plant")}>
              Money Plant
            </Link>

            <Link to={getProductLink("ZZ Plant")}>
              ZZ Plant
            </Link>

            <Link to={getProductLink("Areca Palm")}>
              Areca Palm
            </Link>

            <Link to={getProductLink("Rose Plant")}>
              Rose Plant
            </Link>

            <Link to={getProductLink("Hibiscus")}>
              Hibiscus
            </Link>

            <Link to={getProductLink("Bougainvillea")}>
              Bougainvillea
            </Link>

            <Link to={getProductLink("Jasmine")}>
              Jasmine
            </Link>

            <Link to={getProductLink("Peace Lily")}>
              Peace Lily
            </Link>

            <Link to={getProductLink("Marigold")}>
              Marigold
            </Link>

            <Link to={getProductLink("Lavender")}>
              Lavender
            </Link>

            <Link to={getProductLink("Petunia")}>
              Petunia
            </Link>

          </div>

        </div>


        {/* ================= SEEDS ================= */}

        <div className="dropdown">

          <Link to="/shop">
            Seeds ▾
          </Link>

          <div className="dropdown-menu">

            <Link to={getProductLink("Tomato Seeds")}>
              Tomato Seeds
            </Link>

            <Link to={getProductLink("Sunflower Seeds")}>
              Sunflower Seeds
            </Link>

            <Link to={getProductLink("Coriander Seeds")}>
              Coriander Seeds
            </Link>

            <Link to={getProductLink("Basil Seeds")}>
              Basil Seeds
            </Link>

          </div>

        </div>


        {/* ================= POTS ================= */}

        <div className="dropdown">

          <Link to="/shop">
            Pots ▾
          </Link>

          <div className="dropdown-menu">

            <Link to={getProductLink("Ceramic Pot")}>
              Ceramic Pot
            </Link>

            <Link to={getProductLink("Terracotta Pot")}>
              Terracotta Pot
            </Link>

            <Link to={getProductLink("Plastic Pot")}>
              Plastic Pot
            </Link>

            <Link to={getProductLink("Hanging Pot")}>
              Hanging Pot
            </Link>

          </div>

        </div>


        {/* ================= COCOPEAT ================= */}

        <div className="dropdown">

          <Link to="/shop">
            Cocopeat ▾
          </Link>

          <div className="dropdown-menu">

            <Link to={getProductLink("Cocopeat Brick")}>
              Cocopeat Brick
            </Link>

            <Link to={getProductLink("Perlite")}>
              Perlite
            </Link>

            <Link to={getProductLink("Vermiculite")}>
              Vermiculite
            </Link>

            <Link to={getProductLink("Peat Moss")}>
              Peat Moss
            </Link>

          </div>

        </div>


        {/* ================= FERTILIZERS ================= */}

        <div className="dropdown">

          <Link to="/shop">
            Fertilizers ▾
          </Link>

          <div className="dropdown-menu">

            <Link to={getProductLink("Organic Compost")}>
              Organic Compost
            </Link>

            <Link to={getProductLink("Vermicompost")}>
              Vermicompost
            </Link>

            <Link to={getProductLink("NPK Fertilizer")}>
              NPK Fertilizer
            </Link>

            <Link to={getProductLink("Bone Meal Fertilizer")}>
              Bone Meal Fertilizer
            </Link>

          </div>

        </div>


        {/* ================= TOOLS ================= */}

        <div className="dropdown">

          <Link to="/shop">
            Tools ▾
          </Link>

          <div className="dropdown-menu">

            <Link to={getProductLink("Garden Trowel")}>
              Garden Trowel
            </Link>

            <Link to={getProductLink("Pruning Shear")}>
              Pruning Shear
            </Link>

            <Link to={getProductLink("Watering Can")}>
              Watering Can
            </Link>

            <Link to={getProductLink("Gardening Gloves")}>
              Gardening Gloves
            </Link>

          </div>

        </div>

      </nav>


      {/* ================= NAVBAR ICONS ================= */}

      <div className="nav-icons">


        {/* CART */}

        <Link
          to="/cart"
          className="cart-icon"
        >

          <FaShoppingCart />

          <span className="cart-count">
            {cart.length}
          </span>

        </Link>


        {/* LOGIN */}

        <Link to="/login">
          <FaUser />
        </Link>


      </div>


    </header>

  );

}


export default Navbar;