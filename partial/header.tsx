export default function Header() {
    return (<div id="header--top-nav" className="sticky top-0 z-50 bg-white">
            <div className="header--nav">
                <header>
                    <div className="header w-full bg-white">
                        <div className="top-header flex justify-between lg:items-center">
                            <div
                                className="controls controls--start lg:flex items-center box-content relative flex-none">
                                <div className="hamburger-icon-wrapper float-start cursor-pointer lg:hidden"
                                     data-testid="hamburger-icon-wrapper" role="presentation">
                                    <svg id="menu_svg__Layer_1" data-name="Layer 1"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 156 130.01"
                                         alt="menu-icon">
                                        <defs>
                                            <style
                                                dangerouslySetInnerHTML={{__html: ".menu_svg__cls-2 {\n                                                fill: #050505\n                                            }"}}/>
                                        </defs>
                                        <path className="menu_svg__cls-2"
                                              d="M158 8.51A6.15 6.15 0 0 0 151.49 2H8.51A6.15 6.15 0 0 0 2 8.51v13A6.15 6.15 0 0 0 8.51 28h143a6.15 6.15 0 0 0 6.49-6.52ZM158 60.49a6.15 6.15 0 0 0-6.51-6.49H8.51A6.15 6.15 0 0 0 2 60.49v13A6.15 6.15 0 0 0 8.51 80h143a6.15 6.15 0 0 0 6.49-6.49ZM158 112.52a6.15 6.15 0 0 0-6.51-6.51H8.51A6.15 6.15 0 0 0 2 112.52v13A6.15 6.15 0 0 0 8.51 132h143a6.15 6.15 0 0 0 6.49-6.5Zm0 0"
                                              transform="translate(-2 -2)"/>
                                    </svg>
                                </div>
                                <a className="font-thin hover:underline text-gray-700 w-full flex items-center justify-center lg:hidden sm-logo"
                                   href="index.html" aria-label="plt-logo">
                                    <div className="logo" data-testid="sm-header-logo">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164.7 18.9"
                                             alt="pltlogo">
                                            <path fill="#222"
                                                  d="M0 .2h4c1.5 0 2.5.3 3.4 1.3.9 1 1.2 2.1 1.2 4.3 0 1.6-.1 2.7-.8 3.7-.7 1.2-1.8 2-3.8 2H2.7v7.2H0V.2zM2.7 9H4c2.2 0 2.2-1.3 2.2-3.1 0-1.7 0-3.2-2.1-3.2H2.7V9z"/>
                                            <path fill="#231F20"
                                                  d="M10.6.2h4.3c3.2 0 4.7 1.8 4.7 5.4 0 2.1-.6 3.7-2.3 4.6l2.9 8.5h-2.8l-2.5-7.9h-1.6v7.9h-2.7V.2zm2.7 8.2h1.5c1.8 0 2.1-1 2.1-2.9s-.3-2.9-2.3-2.9h-1.4v5.8z"/>
                                            <path fill="#222"
                                                  d="M21.9.2h7.9v2.5h-5.3v5.4h4.6v2.5h-4.6V16h5.3v2.7h-7.9V.2zm12.6 2.5h-3.1V.2h8.8v2.5h-3.1v16h-2.7v-16zm10.5 0h-3.1V.2h8.8v2.5h-3.1v16H45v-16zm10.5 8.2L51.8.2h2.8l2.1 7.4h.1L59 .2h2.8l-3.6 10.7v7.8h-2.7v-7.8zM63.7.2h2.7V16h5.3v2.7h-7.9V.2zm9.7 0H76v18.5h-2.7V.2zm7 2.5h-3.1V.2h8.8v2.5H83v16h-2.7v-16zm10.2 0h-3.1V.2h8.8v2.5h-3.1v16h-2.7v-16zM97.7.2h2.7V16h5.3v2.7h-7.9V.2zm9.7 0h7.9v2.5H110v5.4h4.6v2.5H110V16h5.3v2.7h-7.9V.2zm12.8 2.5h-3.1V.2h8.8v2.5h-3.1v16h-2.7v-16zm7.2-2.5h2.7v7.9h3.3V.2h2.7v18.5h-2.7v-8.3H130v8.3h-2.7V.2zm11.2 0h2.7v18.5h-2.7V.2zm5.5 0h2.6l4 11.2h.1V.2h2.7v18.5H151l-4.1-11.1h-.1v11.1h-2.7V.2zm11.7 4.3c0-3 2.3-4.5 4.5-4.5s4.5 1.5 4.5 4.5v.9H162v-.9c0-1.3-.8-1.9-1.8-1.9s-1.8.6-1.8 1.9v9.8c0 1.3.8 1.9 1.8 1.9s1.8-.6 1.8-1.9v-3.5h-2.1V8.5h4.8v5.8c0 3-2.3 4.5-4.5 4.5s-4.5-1.5-4.5-4.5V4.5z"/>
                                        </svg>
                                    </div>
                                </a>
                                <div className="leading-none pie-4 flex">
                                    <div
                                        className="locale-dropdown-header cursor-pointer hidden lg:inline-block"
                                        data-testid="locale-dropdown-header" role="presentation"><img
                                        className="locale-dropdown-current-flag"
                                        data-testid="locale-dropdown-current-flag"
                                        src="https://cdn-skin.prettylittlething.com/frontend/prettylittlething/plt-theme/images/currencymenu/currencymenu/us_1.svg"
                                        alt="USD-flag" height={21} width={41} loading="lazy"/></div>
                                    <span
                                        className="locale-dropdown-chevron icon icon-chevron-down-solid align-top font-black cursor-pointer pis-2 hidden lg:inline-block"
                                        data-testid="locale-dropdown-chevron" role="presentation"/></div>
                            </div>
                            <div
                                className="controls controls--center hidden lg:block items-center box-content flex-grow">
                                <a className="font-thin hover:underline text-gray-700 w-full flex items-center justify-center lg-logo"
                                   href="index.html" aria-label="plt-logo">
                                    <div className="logo" data-testid="md-header-logo">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164.7 18.9"
                                             alt="pltlogo">
                                            <path fill="#222"
                                                  d="M0 .2h4c1.5 0 2.5.3 3.4 1.3.9 1 1.2 2.1 1.2 4.3 0 1.6-.1 2.7-.8 3.7-.7 1.2-1.8 2-3.8 2H2.7v7.2H0V.2zM2.7 9H4c2.2 0 2.2-1.3 2.2-3.1 0-1.7 0-3.2-2.1-3.2H2.7V9z"/>
                                            <path fill="#231F20"
                                                  d="M10.6.2h4.3c3.2 0 4.7 1.8 4.7 5.4 0 2.1-.6 3.7-2.3 4.6l2.9 8.5h-2.8l-2.5-7.9h-1.6v7.9h-2.7V.2zm2.7 8.2h1.5c1.8 0 2.1-1 2.1-2.9s-.3-2.9-2.3-2.9h-1.4v5.8z"/>
                                            <path fill="#222"
                                                  d="M21.9.2h7.9v2.5h-5.3v5.4h4.6v2.5h-4.6V16h5.3v2.7h-7.9V.2zm12.6 2.5h-3.1V.2h8.8v2.5h-3.1v16h-2.7v-16zm10.5 0h-3.1V.2h8.8v2.5h-3.1v16H45v-16zm10.5 8.2L51.8.2h2.8l2.1 7.4h.1L59 .2h2.8l-3.6 10.7v7.8h-2.7v-7.8zM63.7.2h2.7V16h5.3v2.7h-7.9V.2zm9.7 0H76v18.5h-2.7V.2zm7 2.5h-3.1V.2h8.8v2.5H83v16h-2.7v-16zm10.2 0h-3.1V.2h8.8v2.5h-3.1v16h-2.7v-16zM97.7.2h2.7V16h5.3v2.7h-7.9V.2zm9.7 0h7.9v2.5H110v5.4h4.6v2.5H110V16h5.3v2.7h-7.9V.2zm12.8 2.5h-3.1V.2h8.8v2.5h-3.1v16h-2.7v-16zm7.2-2.5h2.7v7.9h3.3V.2h2.7v18.5h-2.7v-8.3H130v8.3h-2.7V.2zm11.2 0h2.7v18.5h-2.7V.2zm5.5 0h2.6l4 11.2h.1V.2h2.7v18.5H151l-4.1-11.1h-.1v11.1h-2.7V.2zm11.7 4.3c0-3 2.3-4.5 4.5-4.5s4.5 1.5 4.5 4.5v.9H162v-.9c0-1.3-.8-1.9-1.8-1.9s-1.8.6-1.8 1.9v9.8c0 1.3.8 1.9 1.8 1.9s1.8-.6 1.8-1.9v-3.5h-2.1V8.5h4.8v5.8c0 3-2.3 4.5-4.5 4.5s-4.5-1.5-4.5-4.5V4.5z"/>
                                        </svg>
                                    </div>
                                </a></div>
                            <div
                                className="controls controls--end justify-end lg:flex items-center box-content flex-none">
                                <div className="header-links lg:flex items-center" data-testid="header-links">
                                    <div
                                        className="search-icon h-full inline-block lg:hidden pie-2 cursor-pointer transition-opacity duration-500 opacity-0"
                                        role="presentation" data-testid="SEARCH_ICON_BUTTON"><i
                                        className="icon icon-search mis-0 lg:mis-2 inline-block align-baseline"/>
                                    </div>
                                    <a className="font-thin hover:underline text-gray-700 account-icon inline-flex mie-2 lg:mie-6 hover:no-underline"
                                       href="https://www.prettylittlething.us/customer/account/login"
                                       aria-label="account-icon"><i className="icon icon-bold icon-account"
                                                                    data-testid="ACCOUNT_ICON"/></a><a
                                    className="font-thin hover:underline relative wishlist-icon text-center leading-none inline-block mie-2 lg:mie-6 hover:no-underline"
                                    href="https://www.prettylittlething.us/customer/account/wishlist"
                                    aria-label="wishlist-icon" rel="nofollow"><i
                                    className="icon icon-bold icon-heart-alt"/></a>
                                    <div className="bag-hover-area relative inline-block align-top"><a
                                        className="font-thin hover:underline basket-icon text-center hover:no-underline"
                                        href="https://www.prettylittlething.us/checkout/cart"
                                        aria-label="basket-icon"><i className="icon icon-bag"/></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="hidden">
                        <ul>
                            <li>
                                <div><h3><a href="https://www.prettylittlething.us/new-in.html">NEW IN</a></h3>
                                    <ul>
                                        <li><h4><a href="https://www.prettylittlething.us/new-in.html">NEW
                                            IN</a></h4>
                                            <ul>
                                                <li><a href="https://www.prettylittlething.us/new-in.html">View
                                                    All</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/new-in/today.html">New
                                                    In
                                                    Today</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/new-in/this-week.html">New
                                                    In This Week</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/new-in/clothing.html">New
                                                    In Clothing</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/back-in-stock.html">Back
                                                        In Stock</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/new-in/dresses.html">New
                                                    In Dresses</a></li>
                                                <li><a href="https://www.prettylittlething.us/new-in/tops.html">New
                                                    In
                                                    Tops</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/new-in/jumpsuits-rompers.html">New
                                                        In Jumpsuits &amp; Rompers</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/new-in/pants-leggings.html">New
                                                        In Pants &amp; Leggings</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/new-in/skirts-shorts.html">New
                                                        In Skirts &amp; Shorts</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/new-in/denim.html">New
                                                    In
                                                    Denim</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/new-in/coats-jackets.html">New
                                                        In Coats &amp; Jackets</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/new-in/two-piece-sets.html">New
                                                        In Two Piece Sets</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/new-in/knitwear.html">New
                                                    In Knitwear</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/new-in/swimwear.html">New
                                                    In Swimwear</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/new-in/activewear.html">New
                                                    In Activewear</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/new-in/nightwear-lingerie.html">New
                                                        In Sleepwear &amp; Lingerie</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/new-in/beauty.html">New
                                                    In
                                                    Beauty</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/new-in/footwear.html">New
                                                    In Shoes</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/new-in/accessories.html">New
                                                    In Accessories</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/new-in/homeware.html">New
                                                    In Homeware</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/shop-by/plt-ranges.html">PLT
                                            RANGES</a></h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/new-in/plus-size-clothing.html">New
                                                        In PLT Plus</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/new-in/plt-shape.html">New
                                                    In PLT Shape</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/new-in/petite-clothing.html">New
                                                        In PLT Petite</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/new-in/plt-tall.html">New
                                                    In PLT Tall</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/new-in/plt-collection.html">New
                                                        In PLT Collection</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/new-in/maternity.html">New
                                                    In PLT Maternity</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a href="https://www.prettylittlething.us/shop-by.html">FEATURED
                                            SHOPS</a></h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/collections/gemma-owen.html">Gemma
                                                        Owen</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/collections/molly-mae.html">Molly-Mae</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/renew.html">Renew</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/valentines-day.html">Valentine's
                                                        Day</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/season/spring-store.html">Spring
                                                        Outfits</a></li>
                                                <li><a href="https://www.prettylittlething.us/giftcards">Gift
                                                    Cards</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div><h3><a href="https://www.prettylittlething.us/sale.html">SALE</a></h3>
                                    <ul>
                                        <li><h4><a href="https://www.prettylittlething.us/sale.html">SALE</a>
                                        </h4>
                                            <ul>
                                                <li><a href="https://www.prettylittlething.us/sale.html">View
                                                    All</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/sale/accessories.html">Accessories
                                                    SALE</a></li>
                                                <li><a href="https://www.prettylittlething.us/sale/beauty.html">Beauty
                                                    SALE</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/sale/bodysuits.html">Bodysuits
                                                    SALE</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/sale/coats-jackets.html">Coats
                                                    &amp; Jackets SALE</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/sale/two-piece-sets.html">Two
                                                    Piece Sets SALE</a></li>
                                                <li><a href="https://www.prettylittlething.us/sale/denim.html">Denim
                                                    SALE</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/sale/dresses.html">Dresses
                                                    SALE</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/sale/denim/jeans.html">Jeans
                                                    SALE</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/sale/knitwear.html">Knitwear
                                                    SALE</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/sale/lingerie-sleepwear.html">Lingerie
                                                        &amp; Sleepwear SALE</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/sale/rompers-jumpsuits.html">Jumpsuits
                                                        &amp; Rompers SALE</a></li>
                                                <li><a href="https://www.prettylittlething.us/sale/shoes.html">Shoes
                                                    SALE</a></li>
                                                <li><a href="https://www.prettylittlething.us/sale/shorts.html">Shorts
                                                    SALE</a></li>
                                                <li><a href="https://www.prettylittlething.us/sale/skirts.html">Skirts
                                                    SALE</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/sale/swimwear.html">Swimwear
                                                    SALE</a></li>
                                                <li><a href="https://www.prettylittlething.us/sale/tops.html">Tops
                                                    SALE</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/sale/pants-leggings.html">Pants
                                                    SALE</a></li>
                                                <li><a href="https://www.prettylittlething.us/sale/petite.html">PLT
                                                    Petite SALE</a></li>
                                                <li><a href="https://www.prettylittlething.us/sale/shape.html">PLT
                                                    Shape
                                                    SALE</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/sale/plus-size.html">PLT
                                                    Plus Size SALE</a></li>
                                                <li><a href="https://www.prettylittlething.us/sale/tall.html">PLT
                                                    Tall
                                                    SALE</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/sale/activewear.html">PLT
                                                    Sport SALE</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/sale/maternity.html">PLT
                                                    Maternity SALE</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/sale/homeware.html">PLT
                                                    Homeware SALE</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div><h3><a href="https://www.prettylittlething.us/clothing.html">CLOTHING</a>
                                </h3>
                                    <ul>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/clothing.html">CLOTHING</a>
                                        </h4>
                                            <ul>
                                                <li><a href="https://www.prettylittlething.us/clothing.html">View
                                                    All</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/dresses.html">Dresses
                                                    - From $10</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/tops.html">Tops
                                                    -
                                                    From $10</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shop-by/activewear.html">Activewear</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/tops/bodysuits.html">Bodysuits</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/tops/bralette-tops.html">Bralette
                                                        Tops</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/coats-jackets.html">Coats
                                                        &amp; Jackets</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/two-piece-sets.html">Two
                                                        Piece Sets</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/denim.html">Denim</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/hoodies.html">Hoodies</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/jeans.html">Jeans</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/jumpsuits-rompers/jumpsuits.html">Jumpsuits</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/knits.html">Knits</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/leggings.html">Leggings</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/lingerie.html">Lingerie</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/loungewear.html">Loungewear</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/pants.html">Pants</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/jumpsuits-rompers/rompers.html">Rompers</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/shorts.html">Shorts</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/skirts.html">Skirts</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/sleepwear.html">Sleepwear</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/suits.html">Suits</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/sweatshirts.html">Sweatshirts</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/swimwear.html">Swimwear
                                                    &amp; Beachwear</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/two-piece-sets/tracksuits.html">Tracksuits</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/pants/joggers-sweatpants.html">Sweatpants</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/tops/crop-tops.html">Crop
                                                        Tops</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/shop-by/plt-ranges.html">PLT
                                            RANGES</a></h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-collection.html">The
                                                        PLT Collection</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shop-by/maternity.html">PLT
                                                    Maternity</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing.html">PLT
                                                        Plus</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/petite-clothing.html">PLT
                                                        Petite</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shop-by/plt-shape.html">PLT
                                                    Shape</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shop-by/activewear.html">PLT
                                                    Sport</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-sustainability.html">PLT
                                                        Sustainability</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shop-by/plt-tall.html">PLT
                                                    Tall</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/the-basics.html">The
                                                    Basics</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a href="https://www.prettylittlething.us/shop-by.html">SHOP
                                            BY</a></h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/collections/gemma-owen.html">Gemma
                                                        Owen</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/collections/molly-mae.html">Molly-Mae</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/renew.html">Renew</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/valentines-day.html">Valentine's
                                                        Day</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/season/spring-store.html">Spring
                                                        Outfits</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shop-by/weddings.html">Wedding
                                                    Outfits</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shop-by/birthday.html">Birthday
                                                    Outfits</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/special-occasions.html">Occasion
                                                        Wear</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/100-dresses-10-under.html">$10
                                                        Dresses &amp; Under</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/outfit-ideas.html">What
                                                        To Wear</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/vacation-shop.html">Vacation
                                                        Shop</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shop-by/long-sleeve.html">Long
                                                    Sleeves</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shop-by/casual.html">Casual
                                                    Clothing</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shop-by/sequins.html">Sequin
                                                    Outfits</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shop-by/going-out.html">Going
                                                    Out</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/jeans-nice-top.html">Jeans
                                                        &amp; A Nice Top</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/cargos-nice-top.html">Cargos
                                                        &amp; A Nice Top</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shoppable-instagram">Shop
                                                    Instagram</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shop-by/trends.html">Trends</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/trends/cargo.html">Cargo</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shop-by/corsets.html">Corsets</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/trends/faux-leather.html">Faux
                                                        Leather</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shop-by/trends/mesh.html">Mesh</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shop-by/ribbed.html">Ribbed</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/trends/satin.html">Satin</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/trends/varsity.html">Varsity</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/trends/velvet.html">Velvet</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div><h3><a
                                    href="https://www.prettylittlething.us/shop-by/season/winter.html">WINTER</a>
                                </h3>
                                    <ul>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/shop-by/season/winter.html">WINTER</a>
                                        </h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/season/winter.html">View
                                                        All</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shop-by/activewear.html">Activewear</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/tops/bodysuits.html">Bodysuits</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/dresses.html">Dresses
                                                    from $10</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/hoodies.html">Hoodies</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/jeans.html">Jeans</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/jumpsuits-rompers/jumpsuits.html">Jumpsuits</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/leggings.html">Leggings</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/loungewear.html">Loungewear</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/pants.html">Pants</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/pants/joggers-sweatpants.html">Sweatpants</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/sweatshirts.html">Sweatshirts</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/sweater-dresses.html">Sweater
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/two-piece-sets/tracksuits.html">Tracksuits</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/two-piece-sets.html">Two
                                                        Piece Sets</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/clothing/knits.html">KNITS</a>
                                        </h4>
                                            <ul>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/knits.html">View
                                                    All</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/knits/sweaters.html">Sweaters</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/knits/cardigans.html">Cardigans</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/knits/knitted-tops.html">Knitted
                                                        Tops</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/knits/knitted-pants.html">Knitted
                                                        Pants</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/two-piece-sets/knit-two-piece-sets.html">Knit
                                                        Two Piece Sets</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/clothing/coats-jackets.html">COATS
                                            &amp; JACKETS</a></h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/coats-jackets.html">View
                                                        All</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/coats-jackets/bomber-jackets.html">Bomber
                                                        Jackets</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/coats-jackets/blazers.html">Blazers</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/coats-jackets/cropped-coats-jackets.html">Cropped
                                                        Coats</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/coats-jackets/faux-fur-coats.html">Faux
                                                        Fur Coats</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/coats-jackets/vests.html">Puffer
                                                        Vests</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/coats-jackets/puffer-jackets.html">Puffer
                                                        Jackets</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/coats-jackets/trench-coats.html">Trench
                                                        Coats</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/coats-jackets/varsity-jackets.html">Varsity
                                                        Jackets</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/clothing/sleepwear.html">SLEEPWEAR</a>
                                        </h4>
                                            <ul>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/sleepwear.html">View
                                                    All</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/sleepwear/pajamas.html">Pajamas</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/sleepwear/pajamas/satin.html">Satin
                                                        Pajamas</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/sleepwear/onesies.html">Onesies</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/sleepwear/robes.html">Robes</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/sleepwear/slippers.html">Slippers</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/sleepwear.html">Plus
                                                        Size Sleepwear</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a>SHOES &amp; ACCESSORIES</a></h4>
                                            <ul>
                                                <li><a
                                                    href="https://www.prettylittlething.us/accessories/hats.html">Hats</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/scarves-gloves.html">Scarves
                                                        &amp; Gloves</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/hosiery/tights.html">Tights</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shoes/boots.html">Boots</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shoes/boots/booties.html">Ankle
                                                    Booties</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shoes/boots/knee-high-boots.html">Knee
                                                        High Boots</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shoes/boots/flat-boots.html">Flat
                                                        Boots</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shoes/boots/heeled-boots.html">Heeled
                                                        Boots</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/shop-by/valentines-day.html">VALENTINE'S
                                            DAY</a></h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/valentines-day.html">View
                                                        All</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/valentines-day/date-night.html">Date
                                                        Night</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/outfit-ideas/first-date.html">First
                                                        Date Outfits</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/valentines-day/galentines.html">Galentine's
                                                        Day</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/valentines-day/dresses.html">Valentine's
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/valentines-day/lingerie.html">Valentine's
                                                        Lingerie</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/valentines-day/gifts.html">Valentine's
                                                        Gifts</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div><h3><a
                                    href="https://www.prettylittlething.us/shop-by/plus-size-clothing.html">PLUS</a>
                                </h3>
                                    <ul>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/shop-by/plus-size-clothing.html">PLT
                                            PLUS</a></h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing.html">View
                                                        All</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/basics.html">Basics</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/bodysuits.html">Bodysuits</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/coats-jackets.html">Coats
                                                        &amp; Jackets</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/plus-size-denim.html">Denim</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/jeans.html">Jeans</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/jumpsuits-rompers.html">Jumpsuits
                                                        &amp; Rompers</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/knitwear.html">Knitwear</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/lingerie.html">Lingerie</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/leggings.html">Leggings</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/loungewear.html">Loungewear</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/pants.html">Pants</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/shorts.html">Shorts</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/skirts.html">Skirts</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/sleepwear.html">Sleepwear</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/swimwear.html">Swimwear</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/joggers-sweatpants.html">Sweatpants</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/activewear.html">Workout
                                                        Clothes</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/shop-by/plus-size-clothing/dresses.html">DRESSES</a>
                                        </h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/dresses.html">View
                                                        All</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/dresses/black-dresses.html">Black
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/dresses/bodycon-dresses.html">Bodycon
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/dresses.html"
                                                       rel="nofollow">Dresses Under $10</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/dresses/maxi.html">Maxi
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/dresses/midi.html">Midi
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/dresses/prom.html">Prom
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/dresses/shift-dresses.html">Shift
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/dresses/wedding-guest-dresses.html">Wedding
                                                        Guest Dresses</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/shop-by/plus-size-clothing/tops.html">TOPS</a>
                                        </h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/tops.html">View
                                                        All</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/tops/blouses.html">Blouses</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/bodysuits.html">Bodysuits</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/tops/corset-tops.html">Corsets</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/tops/crop-tops.html">Crop
                                                        Tops</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/sweatshirts-hoodies.html">Sweatshirts</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/tops/t-shirts.html">T-Shirts</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/tops.html"
                                                       rel="nofollow">Tops Under $12</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/shop-by/special-occasions.html"
                                            rel="nofollow">OCCASIONS</a></h4>
                                            <ul>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shop-by/homecoming.html"
                                                    rel="nofollow">Homecoming</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/special-occasions.html"
                                                       rel="nofollow">Occasion Wear</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/dresses/occasion.html">Occasion
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/business-casual.html"
                                                       rel="nofollow">Office Wear</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shop-by/prom-shop.html"
                                                    rel="nofollow">Prom</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/season/spring-store.html"
                                                       rel="nofollow">Spring Shop</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/vacation-shop.html"
                                                       rel="nofollow">Vacation Shop</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/valentines-day.html"
                                                       rel="nofollow">Valentine's Day</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/shop-by/plus-size-clothing/two-piece-sets.html">TWO
                                            PIECE SETS</a></h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/two-piece-sets.html">View
                                                        All</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/two-piece-sets/skirt-sets.html">Skirt
                                                        Sets</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/suits.html">Suits</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/tracksuits.html">Sweat
                                                        Suits</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a href="https://www.prettylittlething.us/shop-by/trends.html"
                                                   rel="nofollow">TRENDS</a></h4>
                                            <ul>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shop-by/trends/cargo.html"
                                                    rel="nofollow">Cargo</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shop-by/corsets.html"
                                                    rel="nofollow">Corset</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shop-by/spring-break.html"
                                                    rel="nofollow">Spring Break</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/vacation-shop/beachwear.html"
                                                       rel="nofollow">Beachwear</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div><h3><a
                                    href="https://www.prettylittlething.us/shop-by/figure.html">FIGURE</a></h3>
                                    <ul>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/shop-by/plt-shape.html">PLT
                                            SHAPE</a></h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-shape/bodysuits.html">Bodysuits</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-shape/denim.html">Denim</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-shape/dresses.html">Dresses</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-shape/jumpsuits-rompers.html">Jumpsuits
                                                        &amp; Rompers</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-shape/pants.html">Pants</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-shape/shorts.html">Shorts</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-shape/skirts.html">Skirts</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-shape/swimwear.html">Swimwear</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-shape/tops.html">Tops</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-shape/two-piece-sets.html">Two
                                                        Piece Sets</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/shop-by/plt-tall.html">PLT
                                            TALL</a></h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-tall/coats-jackets.html">Coats
                                                        &amp; Jackets</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-tall/dresses.html">Dresses</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-tall/tall-jeans.html">Jeans</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-tall/jumpsuits-rompers.html">Jumpsuits
                                                        &amp; Rompers</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-tall/tops.html">Tops</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-tall/pants.html">Pants</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-tall/two-piece-sets.html">Two
                                                        Piece Sets</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-tall/leggings.html">Leggings</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-tall/tall-shorts.html">Shorts</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-tall/skirts.html">Skirts</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/shop-by/petite-clothing.html">PLT
                                            PETITE</a></h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/petite-clothing/bodysuits.html">Bodysuits</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/petite-clothing/coats-jackets.html">Coats
                                                        &amp; Jackets</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/petite-clothing/dresses.html">Dresses</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/petite-clothing/jeans.html">Jeans</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/petite-clothing/sweatpants-joggers.html">Joggers
                                                        &amp; Sweatpants</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/petite-clothing/jumpsuits-rompers.html">Jumpsuits
                                                        &amp; Rompers</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/petite-clothing/two-piece-sets.html">Two
                                                        Piece Sets</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/petite-clothing/pants.html">Pants</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/petite-clothing/skirts.html">Skirts</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/petite-clothing/shorts.html">Shorts</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/petite-clothing/swimwear.html">Swimwear</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/petite-clothing/tops.html">Tops</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/shop-by/maternity.html">PLT
                                            MATERNITY</a></h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/maternity/dresses.html">Dresses</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/maternity/jumpsuits-rompers.html">Jumpsuits
                                                        &amp; Rompers</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/maternity/leggings.html">Leggings</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/maternity/pajamas.html">Pajamas</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/maternity/pants.html">Pants</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/maternity/tops.html">Tops</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/maternity/loungewear.html">Loungewear</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/maternity/two-piece-set.html">Two
                                                        Piece Sets</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/maternity/occasion-wear.html">Maternity
                                                        Occasion Wear</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div><h3><a
                                    href="https://www.prettylittlething.us/clothing/dresses.html">DRESSES</a>
                                </h3>
                                    <ul>
                                        <li><h4><a>STYLE</a></h4>
                                            <ul>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/dresses.html">View
                                                    All Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/blazer-dresses.html">Blazer
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/bodycon-dresses.html">Bodycon
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/denim-dresses.html">Denim
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/jersey-dresses.html">Jersey
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/long-sleeve/dresses.html">Long
                                                        Sleeve Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/little-black-dresses.html">Little
                                                        Black Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/maxi-dresses.html">Maxi
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/midi-dresses.html">Midi
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/short-dresses.html">Short
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/shift-dresses.html">Shift
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/shirt-dresses.html">Shirt
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/skater-dresses.html">Skater
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/t-shirt-dresses.html">T-Shirt
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/sweater-dresses.html">Sweater
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/tea-length-dresses.html">Tea
                                                        Length Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/wrap/dresses.html">Wrap
                                                        Dresses</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shop-by/10-dresses.html">50
                                                    Dresses for $10</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a>OCCASIONS</a></h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/birthday/dresses.html">Birthday
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/cocktail-dresses.html">Cocktail
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/formal-dresses.html">Formal
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/going-out/dresses.html">Going
                                                        Out Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/graduation-shop/graduation-dresses.html">Graduation
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/homecoming/homecoming-dresses.html">Homecoming
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/party-dresses.html">Party
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/special-occasions/dresses.html">Special
                                                        Occasion Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/wedding-guest-dresses.html">Wedding
                                                        Guest Dresses</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a>RANGES</a></h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-collection/dresses.html">The
                                                        PLT Collection</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/petite-clothing/dresses.html">PLT
                                                        Petite Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/dresses.html">PLT
                                                        Plus Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-shape/dresses.html">PLT
                                                        Shape Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-tall/dresses.html">PLT
                                                        Tall Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/the-basics/dresses.html">Basic
                                                        Dresses</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a>TRENDING</a></h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/valentines-day/dresses.html">Valentine's
                                                        Day Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/backless/dresses.html">Backless
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/corset.html">Corset
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/cut-out-dresses.html">Cut
                                                        Out Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/trends/faux-leather/dresses.html">Faux
                                                        Leather Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/plisse-dresses.html">Plisse
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/trends/satin/dresses.html">Satin
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/summer-dresses.html">Summer
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/vacation-shop/vacation-dresses.html">Vacation
                                                        Dresses</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a>COLORS</a></h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/little-black-dresses.html">Black
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/blue.html">Blue
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/cream.html">Cream
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/gold.html">Gold
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/green.html">Green
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/grey.html">Grey
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/navy-dresses.html">Navy
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/nude.html">Nude
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/orange.html">Orange
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/pink.html">Pink
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/purple.html">Purple
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/red.html">Red
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/white-dresses.html">White
                                                        Dresses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/dresses/yellow.html">Yellow
                                                        Dresses</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div><h3><a href="https://www.prettylittlething.us/clothing/tops.html">TOPS</a>
                                </h3>
                                    <ul>
                                        <li><h4><a>STYLE</a></h4>
                                            <ul>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/tops.html">View
                                                    All Tops</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/bandeau/tops.html">Bandeau
                                                        Tops</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/tops/blouses.html">Blouses</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/tops/bodysuits.html">Bodysuits</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/tops/bralette-tops.html">Bralettes</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/tops/crop-tops.html">Crop
                                                        Tops</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/tops/camisole.html">Camisole
                                                        Tops</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/hoodies.html">Hoodies</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/the-basics/tops.html">Basic
                                                        Tops</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/tops/long-sleeve-tops.html">Long
                                                        Sleeve Tops</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/tops/shirts.html">Shirts</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/tops/sleeveless-tops.html">Sleeveless
                                                        Tops</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/sweatshirts.html">Sweatshirts</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/knits/sweaters.html">Sweaters</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/tops/t-shirts.html">T-Shirts</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/tops/tank-tops.html">Tank
                                                        Tops</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shop-by/wrap/tops.html">Wrap
                                                    Tops</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/tops.html"
                                                    rel="nofollow">Tops Under $12</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a>OCCASIONS</a></h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/tops/dressy-tops.html">Dressy
                                                        Tops</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/going-out/tops.html">Going
                                                        Out Tops</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/jeans-nice-top.html">Jeans
                                                        &amp; A Nice Top</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a>RANGES</a></h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-collection/tops.html">The
                                                        PLT Collection</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/petite-clothing/tops.html">PLT
                                                        Petite Tops</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plus-size-clothing/tops.html">PLT
                                                        Plus Size Tops</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-shape/tops.html">PLT
                                                        Shape Tops</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-tall/tops.html">PLT
                                                        Tall Tops</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/the-basics/tops.html">Basic
                                                        Tops</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a>TRENDING</a></h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/corsets/tops.html">Corset
                                                        Tops</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/tops/denim-tops.html">Denim
                                                        Tops</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/graphic/tees.html">Graphic
                                                        T-Shirts</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/oversized/t-shirts.html">Oversized
                                                        T-Shirts</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/trends/plaid/shirts.html">Plaid
                                                        Shirts</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/trends/puff-sleeve.html">Puff
                                                        Sleeve Tops</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shop-by/ruched/tops.html">Ruched
                                                    Tops</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/trends/satin/tops.html">Satin
                                                        Tops</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/tops/tube-tops.html">Tube
                                                        Tops</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a>COLORS</a></h4>
                                            <ul>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/tops/black.html">Black
                                                    Tops</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/tops/blue.html">Blue
                                                    Tops</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/tops/brown.html">Brown
                                                    Tops</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/tops/cream.html">Cream
                                                    Tops</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/tops/green.html">Green
                                                    Tops</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/tops/grey.html">Grey
                                                    Tops</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/tops/orange.html">Orange
                                                        Tops</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/tops/pink.html">Pink
                                                    Tops</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/tops/purple.html">Purple
                                                        Tops</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/tops/red.html">Red
                                                    Tops</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/clothing/tops/white.html">White
                                                    Tops</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/clothing/tops/yellow.html">Yellow
                                                        Tops</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div><h3><a href="https://www.prettylittlething.us/shoes.html">SHOES</a></h3>
                                    <ul>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/shoes/heels.html">HEELS</a>
                                        </h4>
                                            <ul>
                                                <li><a href="https://www.prettylittlething.us/shoes/heels.html">All
                                                    Heels</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shoes/heels/block-heels.html">Block
                                                        Heels</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shoes/mules/heeled-mules.html">Heeled
                                                        Mules</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shoes/sandals/heeled-sandals.html">Heeled
                                                        Sandals</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shoes/platform-shoes.html">Platforms</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shoes/sandals/platform-sandals.html">Platform
                                                        Sandals</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shoes/wedges.html">Wedges</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/shoes/boots.html">BOOTS</a>
                                        </h4>
                                            <ul>
                                                <li><a href="https://www.prettylittlething.us/shoes/boots.html">All
                                                    Boots</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shoes/boots/booties.html">Booties</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shoes/boots/biker.html">Biker
                                                    Boots</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shoes/boots/heeled-boots.html">Heeled
                                                        Boots</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shoes/boots/knee-high-boots.html">Knee
                                                        High Boots</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shoes/boots/thigh-high-boots.html">Thigh
                                                        High Boots</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shoes/boots/over-the-knee-boots.html">Over
                                                        The Knee Boots</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shoes/boots/sock-boots.html">Sock
                                                        Boots</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/shoes/flats.html">FLATS</a>
                                        </h4>
                                            <ul>
                                                <li><a href="https://www.prettylittlething.us/shoes/flats.html">All
                                                    Flats</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shoes/sandals/chunky-sandals.html">Chunky
                                                        Sandals</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shoes/sandals/espadrilles.html">Espadrilles</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shoes/sandals/flat-sandals.html">Flat
                                                        Sandals</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shoes/flatforms/flatform-sandals.html">Flatform
                                                        Sandals</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shoes/mules.html">Mules</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shoes/sandals/slides.html">Slides</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shoes/sneakers.html">Sneakers</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shoes/sandals.html">Sandals</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><h4><a href="https://www.prettylittlething.us/shoes/wide-fit.html">WIDE
                                            FIT</a></h4>
                                            <ul>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shoes/wide-fit.html">All
                                                    Wide Fit Shoes</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shoes/wide-fit/heels.html">Wide
                                                        Fit Heels</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shoes/wide-fit/boots.html">Wide
                                                        Fit Boots</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a>SHOE SIZE</a></h4>
                                            <ul>
                                                <li><a href="https://www.prettylittlething.us/shoes.html">View
                                                    All
                                                    Shoes</a></li>
                                                <li><a href="https://www.prettylittlething.us/shoes.html"
                                                       rel="nofollow">Shoes US 5</a></li>
                                                <li><a href="https://www.prettylittlething.us/shoes.html"
                                                       rel="nofollow">Shoes US 6</a></li>
                                                <li><a href="https://www.prettylittlething.us/shoes.html"
                                                       rel="nofollow">Shoes US 7</a></li>
                                                <li><a href="https://www.prettylittlething.us/shoes.html"
                                                       rel="nofollow">Shoes US 8</a></li>
                                                <li><a href="https://www.prettylittlething.us/shoes.html"
                                                       rel="nofollow">Shoes US 9</a></li>
                                                <li><a href="https://www.prettylittlething.us/shoes.html"
                                                       rel="nofollow">Shoes US 10</a></li>
                                                <li><a href="https://www.prettylittlething.us/shoes.html"
                                                       rel="nofollow">Shoes US 11</a></li>
                                                <li><a href="https://www.prettylittlething.us/shoes.html"
                                                       rel="nofollow">Shoes US 12</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a>HEEL COLOUR</a></h4>
                                            <ul>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shoes/heels/black.html">Black
                                                    Heels</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shoes/heels/clear.html">Clear
                                                    Heels</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shoes/heels/gold.html">Gold
                                                    Heels</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shoes/heels/green.html">Green
                                                    Heels</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shoes/heels/nude.html">Nude
                                                    Heels</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shoes/heels/pink.html">Pink
                                                    Heels</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shoes/heels/red.html">Red
                                                    Heels</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shoes/heels/silver.html">Silver
                                                    Heels</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shoes/heels/white.html">White
                                                    Heels</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a>TRENDING</a></h4>
                                            <ul>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shoes/metallic.html">Metallic
                                                    Heels &amp; Shoes</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/vacation-shop/beach-shoes.html">Beach
                                                        Shoes</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shoes/heels/bright.html">Bright
                                                    Heels</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shoes/casual-shoes.html">Casual
                                                    Shoes</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/special-occasions/shoes.html">Occasion
                                                        Shoes</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/party-shop/shoes.html">Party
                                                        Shoes</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shoes/heels/statement-heels.html">Statement
                                                        Heels</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shoes/brands.html">Shoe
                                                    Brands</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div><h3><a
                                    href="https://www.prettylittlething.us/accessories.html">ACCESSORIES</a>
                                </h3>
                                    <ul>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/accessories/jewelry.html">JEWELRY</a>
                                        </h4>
                                            <ul>
                                                <li><a
                                                    href="https://www.prettylittlething.us/accessories/jewelry.html">View
                                                    All Jewelry</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/jewelry/gold-plated-jewelry.html">Gold
                                                        Plated Jewelry</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/jewelry/earrings/statement.html">Statement
                                                        Earrings</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/jewelry/earrings/hoops.html">Hoop
                                                        Earrings</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/jewelry/anklets.html">Anklets</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/jewelry/body.html">Body
                                                        Jewelry</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/jewelry/bracelets.html">Bracelets</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/jewelry/earrings.html">Earrings</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/jewelry/necklaces.html">Necklaces</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/jewelry/rings.html">Rings</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/accessories/bags.html">BAGS
                                            &amp; PURSES</a></h4>
                                            <ul>
                                                <li><a
                                                    href="https://www.prettylittlething.us/accessories/bags.html">View
                                                    All</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/bags/mini.html">Mini
                                                        Bags</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/bags/clutches.html">Clutch
                                                        Bags</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/bags/evening-bags.html">Evening
                                                        Bags</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/bags/shoulder.html">Shoulder
                                                        Bags</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/bags/backpacks.html">Backpacks</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/bags/shoppers.html">Shoppers</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/bags/crossbody.html">Crossbody
                                                        Bags</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/accessories/belts.html">BELTS</a>
                                        </h4>
                                            <ul>
                                                <li><a
                                                    href="https://www.prettylittlething.us/accessories/belts.html">View
                                                    All</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/belts/chain.html">Chain
                                                        Belts</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/belts/faux-leather-belts.html">Leather
                                                        Belts</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/belts/waist.html">Waist
                                                        Belts</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/belts/black.html">Black
                                                        Belts</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/accessories/sunglasses.html">SUNGLASSES</a>
                                        </h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/sunglasses.html">View
                                                        All</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/sunglasses/aviator.html">Aviator
                                                        Sunglasses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/sunglasses/cat-eye-sunglasses.html">Cat
                                                        Eye Sunglasses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/sunglasses/colored-sunglasses.html">Colored
                                                        Sunglasses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/sunglasses/square.html">Square
                                                        Sunglasses</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/sunglasses/oversized.html">Oversized
                                                        Sunglasses</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/accessories/hair.html">HAIR</a>
                                        </h4>
                                            <ul>
                                                <li><a
                                                    href="https://www.prettylittlething.us/accessories/hair.html">View
                                                    All</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/hair-accessories/bandanas.html">Bandanas</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/hair/clips-pins.html">Hair
                                                        Clips &amp; Pins</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/hair/headbands.html">Headbands</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/shop-by/season/winter.html">WINTER</a>
                                        </h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/hats/beanies.html">Beanies</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/scarves-gloves.html">Scarves
                                                        &amp; Gloves</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/accessories/hats.html">Hats</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/accessories/hosiery.html">Hosiery</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/hosiery/socks.html">Socks</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/hosiery/tights.html">Tights</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><h4><a>OTHER</a></h4>
                                            <ul>
                                                <li><a href="https://www.prettylittlething.us/accessories.html">View
                                                    All
                                                    Accessories</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/vacation-shop/beach-accessories.html">Beach
                                                        Accessories</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/accessories/phone-accessories.html">Phone
                                                        Accessories</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/plt-pet-accessories.html">PLT
                                                        Pet</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div><h3><a href="https://www.prettylittlething.us/homeware.html">HOME</a></h3>
                                    <ul>
                                        <li><h4><a href="https://www.prettylittlething.us/homeware.html">PLT
                                            HOME</a>
                                        </h4>
                                            <ul>
                                                <li><a href="https://www.prettylittlething.us/homeware.html">View
                                                    All</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/homeware/winter-essentials.html">Winter
                                                        Essentials</a></li>
                                                <li><a href="https://www.prettylittlething.us/homeware.html"
                                                       rel="nofollow">Homeware Under $6</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/homeware/home-decor/astrology.html">Astrology
                                                        Décor</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/homeware/boho.html">Boho
                                                    Décor</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/homeware/minimalist.html">Minimalist
                                                    Décor</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/homeware/home-gifts.html">GIFTS</a>
                                        </h4>
                                            <ul>
                                                <li><a
                                                    href="https://www.prettylittlething.us/homeware/home-gifts.html">View
                                                    All Gifts</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/homeware/games.html">Games</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/homeware/party-decorations.html">Party
                                                        Decorations</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/homeware/home-gifts.html"
                                                    rel="nofollow">Gifts Under $6</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/homeware/home-gifts.html"
                                                    rel="nofollow">Gifts Under $12</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a>SOFT FURNISHINGS</a></h4>
                                            <ul>
                                                <li><a
                                                    href="https://www.prettylittlething.us/homeware/bedding.html">Bedding</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/homeware/cushions.html">Cushions</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/homeware/throws-blankets.html">Throws
                                                        &amp; Blankets</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/homeware/brands/sassy-b.html">Sassy
                                                        B</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/homeware/home-decor.html">HOME
                                            DÉCOR</a></h4>
                                            <ul>
                                                <li><a
                                                    href="https://www.prettylittlething.us/homeware/home-decor.html">View
                                                    All Home Décor</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/homeware/art-prints.html">Art
                                                    Prints</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/homeware/home-decor/coffee-table-books.html">Coffee
                                                        Table Books</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/homeware/vases-ornaments.html">Vases
                                                        &amp; Ornaments</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/homeware/female-body-decor.html">Female
                                                        Body Decor</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a>SHOP BY ROOM</a></h4>
                                            <ul>
                                                <li><a
                                                    href="https://www.prettylittlething.us/homeware/bathroom.html">Bathroom</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/homeware/bedroom.html">Bedroom</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/homeware/kitchen.html">Kitchen</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/homeware/living-room.html">Living
                                                        Room</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/homeware/college-dorm-essentials.html">College
                                                        Essentials</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a>SHOP BY COLOR</a></h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/homeware/black.html">Black</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/homeware/gold.html">Gold</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/homeware/grey.html">Grey</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/homeware/pop-of-pink.html">Pink</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/homeware/white-home-decor.html">White</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/homeware/neutral-home-decor.html">Neutrals</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div><h3><a href="https://www.prettylittlething.us/beauty.html">BEAUTY</a></h3>
                                    <ul>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/beauty/beauty-trending.html">TRENDING</a>
                                        </h4>
                                            <ul>
                                                <li><a
                                                    href="https://www.prettylittlething.us/new-in/beauty.html">New
                                                    In
                                                    Beauty</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/beauty-trending.html">Trending
                                                        Beauty</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/brands/plt-beauty/plt-x-amrezy.html">PLT
                                                        x Amrezy</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/beauty/beauty-gifts.html">Beauty
                                                    Gifts</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/beauty/exclusive.html">Beauty
                                                    Exclusives</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/beauty/premium.html">Premium
                                                    Beauty</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/accessories/hair-extensions.html">Hair
                                                        Extensions</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/shop-by/homecoming/homecoming-makeup.html">Homecoming
                                                        Makeup</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/beauty/brands/plt-beauty.html">PLT
                                            BEAUTY</a></h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/brands/plt-beauty/plt-skin-body-care.html">PLT
                                                        Skincare</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/brands/plt-beauty/makeup.html">PLT
                                                        Makeup</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/brands/plt-beauty/nails.html">PLT
                                                        Nails</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/brands/plt-beauty/false-eyelashes.html">PLT
                                                        False Eyelashes</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/beauty/makeup.html">MAKEUP</a>
                                        </h4>
                                            <ul>
                                                <li><a
                                                    href="https://www.prettylittlething.us/beauty/makeup.html">View
                                                    All Makeup</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/makeup/bronzers.html">Bronzer</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/makeup/concealers.html">Concealers</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/makeup/contouring.html">Contouring</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/makeup/eyebrows.html">Eyebrows</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/makeup/eyeliner.html">Eyeliner</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/makeup/eyeshadow.html">Eyeshadow</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/accessories/fake-eyelashes.html">False
                                                        Eyelashes</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/makeup/foundation.html">Foundation</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/makeup/highlighters.html">Highlighter</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/makeup/lip-gloss.html">Lip
                                                        Gloss</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/makeup/lip-liners.html">Lip
                                                        Liner</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/makeup/lip-plumper.html">Lip
                                                        Plumper</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/makeup/lipstick.html">Lipstick</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/makeup/mascara.html">Mascara</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/makeup/palettes.html">Palettes</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/makeup/primers.html">Primers</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/beauty/skincare-body.html">SKINCARE</a>
                                        </h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/skincare-body/acids.html">Acids</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/skincare-body/acne-skincare.html">Acne
                                                        Skincare</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/skincare-body/cleansers-scrubs.html">Cleansers</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/skincare-body/exfoliators.html">Exfoliators</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/skincare-body/masks.html">Masks</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/skincare-body/moisturizers.html">Moisturizers</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/skincare-body/toners-mists.html">Toners</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/skincare-body/tools.html">Skincare
                                                        Tools</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a>HAIR &amp; BODY</a></h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/skincare-body/body-care.html">Body
                                                        Care</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/beauty/hair-care.html">Hair
                                                    Care</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/accessories/hair-tools.html">Hair
                                                        Tools</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/beauty/tanning.html">Tanning</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><h4><a href="https://www.prettylittlething.us/beauty/brands.html">BEAUTY
                                            BRANDS</a></h4>
                                            <ul>
                                                <li><a
                                                    href="https://www.prettylittlething.us/beauty/our-brands">A-Z
                                                    of
                                                    Beauty Brands</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/brands/olaplex.html">OLAPLEX</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/brands/beauty-works.html">Beauty
                                                        Works</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/brands/doll-beauty.html">Doll
                                                        Beauty</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/brands/lullabellz.html">Lullabellz</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/brands/mario-badescu.html">Mario
                                                        Badescu</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/brands/morphe/view-all.html">Morphe</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/beauty/brands/nyx/view-all.html">NYX
                                                        PMU</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div><h3><a href="https://www.prettylittlething.us/the-edit">THE EDIT</a></h3>
                                    <ul>
                                        <li><h4><a href="https://www.prettylittlething.us/the-edit">THE EDIT</a>
                                        </h4>
                                            <ul>
                                                <li><a href="https://www.prettylittlething.us/the-edit">View The
                                                    Edit</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/the-edit/the-archive">Lookbooks</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/the-edit/ambassadors">Brand
                                                    Ambassadors</a></li>
                                                <li><a href="https://blog.prettylittlething.com">PLT Blog</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/sustainability">Sustainability</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><h4><a>CAMPAIGNS</a></h4>
                                            <ul>
                                                <li><a
                                                    href="https://www.prettylittlething.us/the-edit/2023/gemma-owen">PLT
                                                    X Gemma Owen</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/the-edit/2022/awaken-girlvscancer">PLT
                                                        X GirlVSCancer</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/the-edit/2022/molly-mae">PLT
                                                    X Molly-Mae</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/the-edit/2022/sunisa-lee">PLT
                                                    X Sunisa Lee</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a>TOP FEATURES</a></h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/the-edit/ambassadors/gemma-owen">Gemma
                                                        Owen</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/the-edit/2022/premium">Premium</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/the-edit/2022/latecia">Latecia</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/the-edit/2022/nella-rose">Nella
                                                    Rose</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/the-edit/2022/destination-swim/bohemia">Bohemia</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/the-edit/ambassadors/la-la-anthony">La
                                                        La Anthony</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/the-edit/ambassadors/martha-kalifatidis">Martha
                                                        Kalifatidis</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/the-edit/ambassadors/dearra-taylor">De'arra
                                                        Taylor</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/the-edit/2022/plt-presents/marilyn-melo">Marilyn
                                                        Melo</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/the-edit/2022/destination-swim/island-babes">Island
                                                        Babes</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/the-edit/ambassadors/jayda-cheaves">Jayda
                                                        Cheaves</a></li>
                                            </ul>
                                        </li>
                                        <li><h4><a
                                            href="https://www.prettylittlething.us/social-squad">SOCIAL</a></h4>
                                            <ul>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shoppable-instagram">Shop
                                                    Our Instagram</a></li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/everybody-in-plt">#EveryBODYinPLT</a>
                                                </li>
                                                <li><a
                                                    href="https://www.prettylittlething.us/shoppable-youtube">Watch
                                                    Our YouTube</a></li>
                                                <li>
                                                    <a href="https://www.prettylittlething.us/the-edit/behind-closed-doors">Behind
                                                        Closed Doors Podcast</a></li>
                                                <li><a href="https://www.prettylittlething.us/social-squad">Get
                                                    Social</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </header>
                <nav className="bg-white hidden lg:flex flex-wrap justify-center"><a
                    className="nav-link px-4 py-2 uppercase text-center sm:text-black hover:no-underline font-thin"
                    href="https://www.prettylittlething.us/new-in.html" data-testid="NAV_CATEGORY">
                    <div>NEW IN</div>
                </a><a
                    className="nav-link px-4 py-2 uppercase text-center sm:text-black hover:no-underline font-thin sm:text-red"
                    href="https://www.prettylittlething.us/sale.html" data-testid="NAV_CATEGORY">
                    <div>SALE</div>
                </a><a
                    className="nav-link px-4 py-2 uppercase text-center sm:text-black hover:no-underline font-thin"
                    href="https://www.prettylittlething.us/clothing.html" data-testid="NAV_CATEGORY">
                    <div>CLOTHING</div>
                </a><a
                    className="nav-link px-4 py-2 uppercase text-center sm:text-black hover:no-underline font-thin"
                    href="https://www.prettylittlething.us/shop-by/season/winter.html"
                    data-testid="NAV_CATEGORY">
                    <div>WINTER</div>
                </a><a
                    className="nav-link px-4 py-2 uppercase text-center sm:text-black hover:no-underline font-thin"
                    href="https://www.prettylittlething.us/shop-by/plus-size-clothing.html"
                    data-testid="NAV_CATEGORY">
                    <div>PLUS</div>
                </a><a
                    className="nav-link px-4 py-2 uppercase text-center sm:text-black hover:no-underline font-thin"
                    href="https://www.prettylittlething.us/shop-by/figure.html" data-testid="NAV_CATEGORY">
                    <div>FIGURE</div>
                </a><a
                    className="nav-link px-4 py-2 uppercase text-center sm:text-black hover:no-underline font-thin"
                    href="https://www.prettylittlething.us/clothing/dresses.html" data-testid="NAV_CATEGORY">
                    <div>DRESSES</div>
                </a><a
                    className="nav-link px-4 py-2 uppercase text-center sm:text-black hover:no-underline font-thin"
                    href="https://www.prettylittlething.us/clothing/tops.html" data-testid="NAV_CATEGORY">
                    <div>TOPS</div>
                </a><a
                    className="nav-link px-4 py-2 uppercase text-center sm:text-black hover:no-underline font-thin"
                    href="https://www.prettylittlething.us/shoes.html" data-testid="NAV_CATEGORY">
                    <div>SHOES</div>
                </a><a
                    className="nav-link px-4 py-2 uppercase text-center sm:text-black hover:no-underline font-thin"
                    href="https://www.prettylittlething.us/accessories.html" data-testid="NAV_CATEGORY">
                    <div>ACCESSORIES</div>
                </a><a
                    className="nav-link px-4 py-2 uppercase text-center sm:text-black hover:no-underline font-thin"
                    href="https://www.prettylittlething.us/homeware.html" data-testid="NAV_CATEGORY">
                    <div>HOME</div>
                </a><a
                    className="nav-link px-4 py-2 uppercase text-center sm:text-black hover:no-underline font-thin"
                    href="https://www.prettylittlething.us/beauty.html" data-testid="NAV_CATEGORY">
                    <div>BEAUTY</div>
                </a><a
                    className="nav-link px-4 py-2 uppercase text-center sm:text-black hover:no-underline font-thin"
                    href="https://www.prettylittlething.us/the-edit" data-testid="NAV_CATEGORY">
                    <div>THE EDIT</div>
                </a></nav>
            </div>
        </div>
    )
}