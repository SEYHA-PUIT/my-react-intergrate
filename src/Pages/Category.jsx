import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {/*================Home Banner Area =================*/}
      <section className="banner_area">
        <div className="banner_inner d-flex align-items-center">
          <div className="container">
            <div className="banner_content d-md-flex justify-content-between align-items-center">
              <div className="mb-3 mb-md-0">
                <h2>Shop Category</h2>
                <p>Very us move be blessed multiply night</p>
              </div>
              <div className="page_link">
                <a href="/">Home</a>
                <a href="/category">Shop</a>
                <a href="/category">Women Fashion</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Home Banner Area =================*/}

      {/*================Category Product Area =================*/}
      <section className="cat_product_area section_gap">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-9">
              <div className="product_top_bar">
                <div className="left_dorp">
                  <select className="sorting">
                    <option value={1}>Default sorting</option>
                    <option value={2}>Default sorting 01</option>
                    <option value={4}>Default sorting 02</option>
                  </select>
                  <select className="show">
                    <option value={1}>Show 12</option>
                    <option value={2}>Show 14</option>
                    <option value={4}>Show 16</option>
                  </select>
                </div>
              </div>

              {loading ? (
                <p>Loading products...</p>
              ) : (
                <div className="latest_product_inner">
                  <div className="row">
                    {products.map((product) => (
                      <div key={product.id} className="col-lg-4 col-md-6">
                        <div className="single-product">
                          <div className="product-img">
                            <img
                              className="card-img"
                              src={product.image}
                              alt={product.title}
                              style={{ height: "250px", objectFit: "contain" }}
                            />
                            <div className="p_icon">
                              <Link to={`/single-product/${product.id}`}>
                                <i className="ti-eye" />
                              </Link>
                              <a href="#">
                                <i className="ti-heart" />
                              </a>
                              <a href="#">
                                <i className="ti-shopping-cart" />
                              </a>
                            </div>
                          </div>
                          <div className="product-btm">
                            <a href="#" className="d-block">
                              <h4>{product.title}</h4>
                            </a>
                            <div className="mt-3">
                              <span className="mr-4">${product.price}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-lg-3">
              <div className="left_sidebar_area">
                <aside className="left_widgets p_filter_widgets">
                  <div className="l_w_title">
                    <h3>Browse Categories</h3>
                  </div>
                  <div className="widgets_inner">
                    <ul className="list">
                      <li>
                        <a href="#">Electronics</a>
                      </li>
                      <li>
                        <a href="#">Fashion</a>
                      </li>
                      <li>
                        <a href="#">Home Appliances</a>
                      </li>
                      <li>
                        <a href="#">Books</a>
                      </li>
                      <li>
                        <a href="#">Others</a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Category Product Area =================*/}
    </div>
  );
};

export default Category;
