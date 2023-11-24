import React from "react";

function Header() {
  return (
    <React.Fragment>
      <header className="container sectionPadding">
        <div>
          <div>
            <h1>Elevate Your Brand</h1>
            <h1>With</h1>
            <h1>Veteran Media Solution</h1>
          </div>
          <p>
            The best place to get creative advertising, smart marketing, strong
            branding, clever promotions, and online exposure services to shine a
            light on your brand.
          </p>
          <div className="scrollDown">
            <div class="scroll-downs">
              <div class="mousey">
                <div class="scroller"></div>
              </div>
            </div>
            <p>Scroll Down</p>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
