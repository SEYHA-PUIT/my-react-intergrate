import React from "react";

const Blog = () => {
  return (
    <div>
      {/*================Home Banner Area =================*/}
      <section className="banner_area">
        <div className="banner_inner d-flex align-items-center">
          <div className="container">
            <div className="banner_content d-md-flex justify-content-between align-items-center">
              <div className="mb-3 mb-md-0">
                <h2>Blog</h2>
                <p>Very us move be blessed multiply night</p>
              </div>
              <div className="page_link">
                <a href="/">Home</a>
                <a href="/blog">Blog</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Home Banner Area =================*/}

      {/*================Blog Area =================*/}
      <section className="blog_area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="blog_left_sidebar">
                {/* Blog Items */}
                {[1, 2, 3, 4, 5].map((item) => (
                  <article className="blog_item" key={item}>
                    <div className="blog_item_img">
                      <img
                        className="card-img rounded-0"
                        src={`img/blog/main-blog/m-blog-${item}.jpg`}
                        alt={`Blog ${item}`}
                      />
                      <a href="/" className="blog_item_date">
                        <h3>15</h3>
                        <p>Jan</p>
                      </a>
                    </div>
                    <div className="blog_details">
                      <a className="d-inline-block" href="/single-blog">
                        <h2>Google inks pact for new 35-storey office</h2>
                      </a>
                      <p>
                        That dominion stars lights dominion divide years for
                        fourth have don't stars is that he earth it first
                        without heaven in place seed it second morning saying.
                      </p>
                      <ul className="blog-info-link">
                        <li>
                          <a href="/">
                            <i className="ti-user" /> Travel, Lifestyle
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="ti-comments" /> 03 Comments
                          </a>
                        </li>
                      </ul>
                    </div>
                  </article>
                ))}
                {/* Pagination */}
                <nav className="blog-pagination justify-content-center d-flex">
                  <ul className="pagination">
                    <li className="page-item">
                      <a href="/" className="page-link" aria-label="Previous">
                        <span aria-hidden="true">
                          <span className="ti-arrow-left" />
                        </span>
                      </a>
                    </li>
                    {[1, 2].map((page) => (
                      <li
                        className={`page-item ${page === 2 ? "active" : ""}`}
                        key={page}
                      >
                        <a href="/" className="page-link">
                          {page}
                        </a>
                      </li>
                    ))}
                    <li className="page-item">
                      <a href="/" className="page-link" aria-label="Next">
                        <span aria-hidden="true">
                          <span className="ti-arrow-right" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                {/* Search Widget */}
                <aside className="single_sidebar_widget search_widget">
                  <form action="#">
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search Keyword"
                        />
                        <div className="input-group-append">
                          <button className="btn" type="button">
                            <i className="ti-search" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button className="main_btn rounded-0 w-100" type="submit">
                      Search
                    </button>
                  </form>
                </aside>
                {/* Category Widget */}
                <aside className="single_sidebar_widget post_category_widget">
                  <h4 className="widget_title">Category</h4>
                  <ul className="list cat-list">
                    {[
                      "Resaurant food",
                      "Travel news",
                      "Modern technology",
                      "Product",
                      "Inspiration",
                      "Health Care",
                    ].map((category, index) => (
                      <li key={index}>
                        <a href="/" className="d-flex">
                          <p>{category}</p>
                          <p>({Math.floor(Math.random() * 50)})</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </aside>
                {/* Recent Posts Widget */}
                <aside className="single_sidebar_widget popular_post_widget">
                  <h3 className="widget_title">Recent Post</h3>
                  {[1, 2, 3, 4].map((post) => (
                    <div className="media post_item" key={post}>
                      <img
                        src={`img/blog/popular-post/post${post}.jpg`}
                        alt={`Post ${post}`}
                      />
                      <div className="media-body">
                        <a href="/single-blog">
                          <h3>Recent Post {post}</h3>
                        </a>
                        <p>January {12 + post}, 2019</p>
                      </div>
                    </div>
                  ))}
                </aside>
                {/* Tag Cloud */}
                <aside className="single_sidebar_widget tag_cloud_widget">
                  <h4 className="widget_title">Tag Clouds</h4>
                  <ul className="list">
                    {[
                      "project",
                      "love",
                      "technology",
                      "travel",
                      "restaurant",
                      "lifestyle",
                      "design",
                      "illustration",
                    ].map((tag, index) => (
                      <li key={index}>
                        <a href="/">{tag}</a>
                      </li>
                    ))}
                  </ul>
                </aside>
                {/* Instagram Feeds */}
                <aside className="single_sidebar_widget instagram_feeds">
                  <h4 className="widget_title">Instagram Feeds</h4>
                  <ul className="instagram_row flex-wrap">
                    {[1, 2, 3, 4, 5, 6].map((image) => (
                      <li key={image}>
                        <a href="/">
                          <img
                            className="img-fluid"
                            src={`img/instagram/widget-i${image}.png`}
                            alt={`Instagram ${image}`}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </aside>
                {/* Newsletter */}
                <aside className="single_sidebar_widget newsletter_widget">
                  <h4 className="widget_title">Newsletter</h4>
                  <form action="#">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        required
                      />
                    </div>
                    <button className="main_btn rounded-0 w-100" type="submit">
                      Subscribe
                    </button>
                  </form>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================Blog Area =================*/}
    </div>
  );
};

export default Blog;
