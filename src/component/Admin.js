import React from 'react'

function Admin() {
    return (
        <React.Fragment>
            <div className="page-loader-wrapper">
                <div className="loader">
                    <div className="preloader">
                        <div className="spinner-layer pl-red">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div>
                            <div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                    <p>Please wait...</p>
                </div>
            </div>
            <div className="overlay"></div>
            <div className="search-bar">
                <div className="search-icon">
                    <i className="material-icons">search</i>
                </div>
                <input type="text" placeholder="START TYPING..."/>
                <div className="close-search">
                    <i className="material-icons">close</i>
                </div>
            </div>
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a href="javascript:void(0);" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false"></a>
                        <a href="javascript:void(0);" className="bars"></a>
                        <a className="navbar-brand" href="index.html">ADMINBSB - MATERIAL DESIGN</a>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="javascript:void(0);" className="js-search" data-close="true"><i className="material-icons">search</i></a></li>
                            <li className="dropdown">
                                <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button">
                                    <i className="material-icons">notifications</i>
                                    <span className="label-count">7</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">NOTIFICATIONS</li>
                                    <li className="body">
                                        <ul className="menu">
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <div className="icon-circle bg-light-green">
                                                        <i className="material-icons">person_add</i>
                                                    </div>
                                                    <div className="menu-info">
                                                        <h4>12 new members joined</h4>
                                                        <p>
                                                            <i className="material-icons">access_time</i> 14 mins ago
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <div className="icon-circle bg-cyan">
                                                        <i className="material-icons">add_shopping_cart</i>
                                                    </div>
                                                    <div className="menu-info">
                                                        <h4>4 sales made</h4>
                                                        <p>
                                                            <i className="material-icons">access_time</i> 22 mins ago
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <div className="icon-circle bg-red">
                                                        <i className="material-icons">delete_forever</i>
                                                    </div>
                                                    <div className="menu-info">
                                                        <h4><b>Nancy Doe</b> deleted account</h4>
                                                        <p>
                                                            <i className="material-icons">access_time</i> 3 hours ago
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <div className="icon-circle bg-orange">
                                                        <i className="material-icons">mode_edit</i>
                                                    </div>
                                                    <div className="menu-info">
                                                        <h4><b>Nancy</b> changed name</h4>
                                                        <p>
                                                            <i className="material-icons">access_time</i> 2 hours ago
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <div className="icon-circle bg-blue-grey">
                                                        <i className="material-icons">comment</i>
                                                    </div>
                                                    <div className="menu-info">
                                                        <h4><b>John</b> commented your post</h4>
                                                        <p>
                                                            <i className="material-icons">access_time</i> 4 hours ago
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <div className="icon-circle bg-light-green">
                                                        <i className="material-icons">cached</i>
                                                    </div>
                                                    <div className="menu-info">
                                                        <h4><b>John</b> updated status</h4>
                                                        <p>
                                                            <i className="material-icons">access_time</i> 3 hours ago
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <div className="icon-circle bg-purple">
                                                        <i className="material-icons">settings</i>
                                                    </div>
                                                    <div className="menu-info">
                                                        <h4>Settings updated</h4>
                                                        <p>
                                                            <i className="material-icons">access_time</i> Yesterday
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer">
                                        <a href="javascript:void(0);">View All Notifications</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button">
                                    <i className="material-icons">flag</i>
                                    <span className="label-count">9</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">TASKS</li>
                                    <li className="body">
                                        <ul className="menu tasks">
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <h4>
                                                        Footer display issue
                                                        <small>32%</small>
                                                    </h4>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-pink" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "32%"}}>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <h4>
                                                        Make new buttons
                                                        <small>45%</small>
                                                    </h4>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-cyan" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "45%"}}>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <h4>
                                                        Create new dashboard
                                                        <small>54%</small>
                                                    </h4>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-teal" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "54%"}}>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <h4>
                                                        Solve transition issue
                                                        <small>65%</small>
                                                    </h4>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-orange" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "65%"}}>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <h4>
                                                        Answer GitHub questions
                                                        <small>92%</small>
                                                    </h4>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-purple" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "92%"}}>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer">
                                        <a href="javascript:void(0);">View All Tasks</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="pull-right"><a href="javascript:void(0);" className="js-right-sidebar" data-close="true"><i className="material-icons">more_vert</i></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section>
                <aside id="leftsidebar" className="sidebar">
                    <div className="user-info">
                        <div className="image">
                            <img src="images/user.png" width="48" height="48" alt="User" />
                        </div>
                        <div className="info-container">
                            <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">John Doe</div>
                            <div className="email">john.doe@example.com</div>
                            <div className="btn-group user-helper-dropdown">
                                <i className="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
                                <ul className="dropdown-menu pull-right">
                                    <li><a href="javascript:void(0);"><i className="material-icons">person</i>Profile</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="javascript:void(0);"><i className="material-icons">group</i>Followers</a></li>
                                    <li><a href="javascript:void(0);"><i className="material-icons">shopping_cart</i>Sales</a></li>
                                    <li><a href="javascript:void(0);"><i className="material-icons">favorite</i>Likes</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="javascript:void(0);"><i className="material-icons">input</i>Sign Out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="menu">
                        <ul className="list">
                            <li className="header">MAIN NAVIGATION</li>
                            <li className="active">
                                <a href="index.html">
                                    <i className="material-icons">home</i>
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="pages/typography.html">
                                    <i className="material-icons">text_fields</i>
                                    <span>Typography</span>
                                </a>
                            </li>
                            <li>
                                <a href="pages/helper-classNamees.html">
                                    <i className="material-icons">layers</i>
                                    <span>Helper classNamees</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" className="menu-toggle">
                                    <i className="material-icons">widgets</i>
                                    <span>Widgets</span>
                                </a>
                                <ul className="ml-menu">
                                    <li>
                                        <a href="javascript:void(0);" className="menu-toggle">
                                            <span>Cards</span>
                                        </a>
                                        <ul className="ml-menu">
                                            <li>
                                                <a href="pages/widgets/cards/basic.html">Basic</a>
                                            </li>
                                            <li>
                                                <a href="pages/widgets/cards/colored.html">Colored</a>
                                            </li>
                                            <li>
                                                <a href="pages/widgets/cards/no-header.html">No Header</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" className="menu-toggle">
                                            <span>Infobox</span>
                                        </a>
                                        <ul className="ml-menu">
                                            <li>
                                                <a href="pages/widgets/infobox/infobox-1.html">Infobox-1</a>
                                            </li>
                                            <li>
                                                <a href="pages/widgets/infobox/infobox-2.html">Infobox-2</a>
                                            </li>
                                            <li>
                                                <a href="pages/widgets/infobox/infobox-3.html">Infobox-3</a>
                                            </li>
                                            <li>
                                                <a href="pages/widgets/infobox/infobox-4.html">Infobox-4</a>
                                            </li>
                                            <li>
                                                <a href="pages/widgets/infobox/infobox-5.html">Infobox-5</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0);" className="menu-toggle">
                                    <i className="material-icons">swap_calls</i>
                                    <span>User Interface (UI)</span>
                                </a>
                                <ul className="ml-menu">
                                    <li>
                                        <a href="pages/ui/alerts.html">Alerts</a>
                                    </li>
                                    <li>
                                        <a href="pages/ui/animations.html">Animations</a>
                                    </li>
                                    <li>
                                        <a href="pages/ui/badges.html">Badges</a>
                                    </li>

                                    <li>
                                        <a href="pages/ui/breadcrumbs.html">Breadcrumbs</a>
                                    </li>
                                    <li>
                                        <a href="pages/ui/buttons.html">Buttons</a>
                                    </li>
                                    <li>
                                        <a href="pages/ui/collapse.html">Collapse</a>
                                    </li>
                                    <li>
                                        <a href="pages/ui/colors.html">Colors</a>
                                    </li>
                                    <li>
                                        <a href="pages/ui/dialogs.html">Dialogs</a>
                                    </li>
                                    <li>
                                        <a href="pages/ui/icons.html">Icons</a>
                                    </li>
                                    <li>
                                        <a href="pages/ui/labels.html">Labels</a>
                                    </li>
                                    <li>
                                        <a href="pages/ui/list-group.html">List Group</a>
                                    </li>
                                    <li>
                                        <a href="pages/ui/media-object.html">Media Object</a>
                                    </li>
                                    <li>
                                        <a href="pages/ui/modals.html">Modals</a>
                                    </li>
                                    <li>
                                        <a href="pages/ui/notifications.html">Notifications</a>
                                    </li>
                                    <li>
                                        <a href="pages/ui/pagination.html">Pagination</a>
                                    </li>
                                    <li>
                                        <a href="pages/ui/preloaders.html">Preloaders</a>
                                    </li>
                                    <li>
                                        <a href="pages/ui/progressbars.html">Progress Bars</a>
                                    </li>
                                    <li>
                                        <a href="pages/ui/range-sliders.html">Range Sliders</a>
                                    </li>
                                    <li>
                                        <a href="pages/ui/sortable-nestable.html">Sortable & Nestable</a>
                                    </li>
                                    <li>
                                        <a href="pages/ui/tabs.html">Tabs</a>
                                    </li>
                                    <li>
                                        <a href="pages/ui/thumbnails.html">Thumbnails</a>
                                    </li>
                                    <li>
                                        <a href="pages/ui/tooltips-popovers.html">Tooltips & Popovers</a>
                                    </li>
                                    <li>
                                        <a href="pages/ui/waves.html">Waves</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0);" className="menu-toggle">
                                    <i className="material-icons">assignment</i>
                                    <span>Forms</span>
                                </a>
                                <ul className="ml-menu">
                                    <li>
                                        <a href="pages/forms/basic-form-elements.html">Basic Form Elements</a>
                                    </li>
                                    <li>
                                        <a href="pages/forms/advanced-form-elements.html">Advanced Form Elements</a>
                                    </li>
                                    <li>
                                        <a href="pages/forms/form-examples.html">Form Examples</a>
                                    </li>
                                    <li>
                                        <a href="pages/forms/form-validation.html">Form Validation</a>
                                    </li>
                                    <li>
                                        <a href="pages/forms/form-wizard.html">Form Wizard</a>
                                    </li>
                                    <li>
                                        <a href="pages/forms/editors.html">Editors</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0);" className="menu-toggle">
                                    <i className="material-icons">view_list</i>
                                    <span>Tables</span>
                                </a>
                                <ul className="ml-menu">
                                    <li>
                                        <a href="pages/tables/normal-tables.html">Normal Tables</a>
                                    </li>
                                    <li>
                                        <a href="pages/tables/jquery-datatable.html">Jquery Datatables</a>
                                    </li>
                                    <li>
                                        <a href="pages/tables/editable-table.html">Editable Tables</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0);" className="menu-toggle">
                                    <i className="material-icons">perm_media</i>
                                    <span>Medias</span>
                                </a>
                                <ul className="ml-menu">
                                    <li>
                                        <a href="pages/medias/image-gallery.html">Image Gallery</a>
                                    </li>
                                    <li>
                                        <a href="pages/medias/carousel.html">Carousel</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0);" className="menu-toggle">
                                    <i className="material-icons">pie_chart</i>
                                    <span>Charts</span>
                                </a>
                                <ul className="ml-menu">
                                    <li>
                                        <a href="pages/charts/morris.html">Morris</a>
                                    </li>
                                    <li>
                                        <a href="pages/charts/flot.html">Flot</a>
                                    </li>
                                    <li>
                                        <a href="pages/charts/chartjs.html">ChartJS</a>
                                    </li>
                                    <li>
                                        <a href="pages/charts/sparkline.html">Sparkline</a>
                                    </li>
                                    <li>
                                        <a href="pages/charts/jquery-knob.html">Jquery Knob</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0);" className="menu-toggle">
                                    <i className="material-icons">content_copy</i>
                                    <span>Example Pages</span>
                                </a>
                                <ul className="ml-menu">
                                    <li>
                                        <a href="pages/examples/profile.html">Profile</a>
                                    </li>
                                    <li>
                                        <a href="pages/examples/sign-in.html">Sign In</a>
                                    </li>
                                    <li>
                                        <a href="pages/examples/sign-up.html">Sign Up</a>
                                    </li>
                                    <li>
                                        <a href="pages/examples/forgot-password.html">Forgot Password</a>
                                    </li>
                                    <li>
                                        <a href="pages/examples/blank.html">Blank Page</a>
                                    </li>
                                    <li>
                                        <a href="pages/examples/404.html">404 - Not Found</a>
                                    </li>
                                    <li>
                                        <a href="pages/examples/500.html">500 - Server Error</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0);" className="menu-toggle">
                                    <i className="material-icons">map</i>
                                    <span>Maps</span>
                                </a>
                                <ul className="ml-menu">
                                    <li>
                                        <a href="pages/maps/google.html">Google Map</a>
                                    </li>
                                    <li>
                                        <a href="pages/maps/yandex.html">YandexMap</a>
                                    </li>
                                    <li>
                                        <a href="pages/maps/jvectormap.html">jVectorMap</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0);" className="menu-toggle">
                                    <i className="material-icons">trending_down</i>
                                    <span>Multi Level Menu</span>
                                </a>
                                <ul className="ml-menu">
                                    <li>
                                        <a href="javascript:void(0);">
                                            <span>Menu Item</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <span>Menu Item - 2</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" className="menu-toggle">
                                            <span>Level - 2</span>
                                        </a>
                                        <ul className="ml-menu">
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <span>Menu Item</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" className="menu-toggle">
                                                    <span>Level - 3</span>
                                                </a>
                                                <ul className="ml-menu">
                                                    <li>
                                                        <a href="javascript:void(0);">
                                                            <span>Level - 4</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="pages/changelogs.html">
                                    <i className="material-icons">update</i>
                                    <span>Changelogs</span>
                                </a>
                            </li>
                            <li className="header">LABELS</li>
                            <li>
                                <a href="javascript:void(0);">
                                    <i className="material-icons col-red">donut_large</i>
                                    <span>Important</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <i className="material-icons col-amber">donut_large</i>
                                    <span>Warning</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <i className="material-icons col-light-blue">donut_large</i>
                                    <span>Information</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="legal">
                        <div className="copyright">
                            &copy; 2016 - 2017 <a href="javascript:void(0);">AdminBSB - Material Design</a>.
                        </div>
                        <div className="version">
                            <b>Version: </b> 1.0.5
                        </div>
                    </div>
                </aside>
                <aside id="rightsidebar" className="right-sidebar">
                    <ul className="nav nav-tabs tab-nav-right" role="tablist">
                        <li role="presentation" className="active"><a href="#skins" data-toggle="tab">SKINS</a></li>
                        <li role="presentation"><a href="#settings" data-toggle="tab">SETTINGS</a></li>
                    </ul>
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane fade in active in active" id="skins">
                            <ul className="demo-choose-skin">
                                <li data-theme="red" className="active">
                                    <div className="red"></div>
                                    <span>Red</span>
                                </li>
                                <li data-theme="pink">
                                    <div className="pink"></div>
                                    <span>Pink</span>
                                </li>
                                <li data-theme="purple">
                                    <div className="purple"></div>
                                    <span>Purple</span>
                                </li>
                                <li data-theme="deep-purple">
                                    <div className="deep-purple"></div>
                                    <span>Deep Purple</span>
                                </li>
                                <li data-theme="indigo">
                                    <div className="indigo"></div>
                                    <span>Indigo</span>
                                </li>
                                <li data-theme="blue">
                                    <div className="blue"></div>
                                    <span>Blue</span>
                                </li>
                                <li data-theme="light-blue">
                                    <div className="light-blue"></div>
                                    <span>Light Blue</span>
                                </li>
                                <li data-theme="cyan">
                                    <div className="cyan"></div>
                                    <span>Cyan</span>
                                </li>
                                <li data-theme="teal">
                                    <div className="teal"></div>
                                    <span>Teal</span>
                                </li>
                                <li data-theme="green">
                                    <div className="green"></div>
                                    <span>Green</span>
                                </li>
                                <li data-theme="light-green">
                                    <div className="light-green"></div>
                                    <span>Light Green</span>
                                </li>
                                <li data-theme="lime">
                                    <div className="lime"></div>
                                    <span>Lime</span>
                                </li>
                                <li data-theme="yellow">
                                    <div className="yellow"></div>
                                    <span>Yellow</span>
                                </li>
                                <li data-theme="amber">
                                    <div className="amber"></div>
                                    <span>Amber</span>
                                </li>
                                <li data-theme="orange">
                                    <div className="orange"></div>
                                    <span>Orange</span>
                                </li>
                                <li data-theme="deep-orange">
                                    <div className="deep-orange"></div>
                                    <span>Deep Orange</span>
                                </li>
                                <li data-theme="brown">
                                    <div className="brown"></div>
                                    <span>Brown</span>
                                </li>
                                <li data-theme="grey">
                                    <div className="grey"></div>
                                    <span>Grey</span>
                                </li>
                                <li data-theme="blue-grey">
                                    <div className="blue-grey"></div>
                                    <span>Blue Grey</span>
                                </li>
                                <li data-theme="black">
                                    <div className="black"></div>
                                    <span>Black</span>
                                </li>
                            </ul>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="settings">
                            <div className="demo-settings">
                                <p>GENERAL SETTINGS</p>
                                <ul className="setting-list">
                                    <li>
                                        <span>Report Panel Usage</span>
                                        <div className="switch">
                                            <label><input type="checkbox" checked /><span className="lever"></span></label>
                                        </div>
                                    </li>
                                    <li>
                                        <span>Email Redirect</span>
                                        <div className="switch">
                                            <label><input type="checkbox" /><span className="lever"></span></label>
                                        </div>
                                    </li>
                                </ul>
                                <p>SYSTEM SETTINGS</p>
                                <ul className="setting-list">
                                    <li>
                                        <span>Notifications</span>
                                        <div className="switch">
                                            <label><input type="checkbox" checked /><span className="lever"></span></label>
                                        </div>
                                    </li>
                                    <li>
                                        <span>Auto Updates</span>
                                        <div className="switch">
                                            <label><input type="checkbox" checked /><span className="lever"></span></label>
                                        </div>
                                    </li>
                                </ul>
                                <p>ACCOUNT SETTINGS</p>
                                <ul className="setting-list">
                                    <li>
                                        <span>Offline</span>
                                        <div className="switch">
                                            <label><input type="checkbox" /><span className="lever"></span></label>
                                        </div>
                                    </li>
                                    <li>
                                        <span>Location Permission</span>
                                        <div className="switch">
                                            <label><input type="checkbox" checked /><span className="lever"></span></label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </aside>
            </section>

            <section className="content">
                <div className="container-fluid">
                    <div className="block-header">
                        <h2>DASHBOARD</h2>
                    </div>

                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box bg-pink hover-expand-effect">
                                <div className="icon">
                                    <i className="material-icons">playlist_add_check</i>
                                </div>
                                <div className="content">
                                    <div className="text">NEW TASKS</div>
                                    <div className="number count-to" data-from="0" data-to="125" data-speed="15" data-fresh-interval="20"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box bg-cyan hover-expand-effect">
                                <div className="icon">
                                    <i className="material-icons">help</i>
                                </div>
                                <div className="content">
                                    <div className="text">NEW TICKETS</div>
                                    <div className="number count-to" data-from="0" data-to="257" data-speed="1000" data-fresh-interval="20"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box bg-light-green hover-expand-effect">
                                <div className="icon">
                                    <i className="material-icons">forum</i>
                                </div>
                                <div className="content">
                                    <div className="text">NEW COMMENTS</div>
                                    <div className="number count-to" data-from="0" data-to="243" data-speed="1000" data-fresh-interval="20"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box bg-orange hover-expand-effect">
                                <div className="icon">
                                    <i className="material-icons">person_add</i>
                                </div>
                                <div className="content">
                                    <div className="text">NEW VISITORS</div>
                                    <div className="number count-to" data-from="0" data-to="1225" data-speed="1000" data-fresh-interval="20"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="card">
                                <div className="header">
                                    <div className="row clearfix">
                                        <div className="col-xs-12 col-sm-6">
                                            <h2>CPU USAGE (%)</h2>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 align-right">
                                            <div className="switch panel-switch-btn">
                                                <span className="m-r-10 font-12">REAL TIME</span>
                                                <label>OFF<input type="checkbox" id="realtime" checked /><span className="lever switch-col-cyan"></span>ON</label>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="header-dropdown m-r--5">
                                        <li className="dropdown">
                                            <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                <i className="material-icons">more_vert</i>
                                            </a>
                                            <ul className="dropdown-menu pull-right">
                                                <li><a href="javascript:void(0);">Action</a></li>
                                                <li><a href="javascript:void(0);">Another action</a></li>
                                                <li><a href="javascript:void(0);">Something else here</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <div id="real_time_chart" className="dashboard-flot-chart"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="card">
                                <div className="body bg-pink">
                                    <div className="sparkline" data-type="line" data-spot-Radius="4" data-highlight-Spot-Color="rgb(233, 30, 99)" data-highlight-Line-Color="#fff"
                                        data-min-Spot-Color="rgb(255,255,255)" data-max-Spot-Color="rgb(255,255,255)" data-spot-Color="rgb(255,255,255)"
                                        data-offset="90" data-width="100%" data-height="92px" data-line-Width="2" data-line-Color="rgba(255,255,255,0.7)"
                                        data-fill-Color="rgba(0, 188, 212, 0)">
                                        12,10,9,6,5,6,10,5,7,5,12,13,7,12,11
                                    </div>
                                    <ul className="dashboard-stat-list">
                                        <li>
                                            TODAY
                                            <span className="pull-right"><b>1 200</b> <small>USERS</small></span>
                                        </li>
                                        <li>
                                            YESTERDAY
                                            <span className="pull-right"><b>3 872</b> <small>USERS</small></span>
                                        </li>
                                        <li>
                                            LAST WEEK
                                            <span className="pull-right"><b>26 582</b> <small>USERS</small></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="card">
                                <div className="body bg-cyan">
                                    <div className="m-b--35 font-bold">LATEST SOCIAL TRENDS</div>
                                    <ul className="dashboard-stat-list">
                                        <li>
                                            #socialtrends
                                            <span className="pull-right">
                                                <i className="material-icons">trending_up</i>
                                            </span>
                                        </li>
                                        <li>
                                            #materialdesign
                                            <span className="pull-right">
                                                <i className="material-icons">trending_up</i>
                                            </span>
                                        </li>
                                        <li>#adminbsb</li>
                                        <li>#freeadmintemplate</li>
                                        <li>#bootstraptemplate</li>
                                        <li>
                                            #freehtmltemplate
                                            <span className="pull-right">
                                                <i className="material-icons">trending_up</i>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="card">
                                <div className="body bg-teal">
                                    <div className="font-bold m-b--35">ANSWERED TICKETS</div>
                                    <ul className="dashboard-stat-list">
                                        <li>
                                            TODAY
                                            <span className="pull-right"><b>12</b> <small>TICKETS</small></span>
                                        </li>
                                        <li>
                                            YESTERDAY
                                            <span className="pull-right"><b>15</b> <small>TICKETS</small></span>
                                        </li>
                                        <li>
                                            LAST WEEK
                                            <span className="pull-right"><b>90</b> <small>TICKETS</small></span>
                                        </li>
                                        <li>
                                            LAST MONTH
                                            <span className="pull-right"><b>342</b> <small>TICKETS</small></span>
                                        </li>
                                        <li>
                                            LAST YEAR
                                            <span className="pull-right"><b>4 225</b> <small>TICKETS</small></span>
                                        </li>
                                        <li>
                                            ALL
                                            <span className="pull-right"><b>8 752</b> <small>TICKETS</small></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row clearfix">
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                            <div className="card">
                                <div className="header">
                                    <h2>TASK INFOS</h2>
                                    <ul className="header-dropdown m-r--5">
                                        <li className="dropdown">
                                            <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                <i className="material-icons">more_vert</i>
                                            </a>
                                            <ul className="dropdown-menu pull-right">
                                                <li><a href="javascript:void(0);">Action</a></li>
                                                <li><a href="javascript:void(0);">Another action</a></li>
                                                <li><a href="javascript:void(0);">Something else here</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <div className="table-responsive">
                                        <table className="table table-hover dashboard-task-infos">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Task</th>
                                                    <th>Status</th>
                                                    <th>Manager</th>
                                                    <th>Progress</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Task A</td>
                                                    <td><span className="label bg-green">Doing</span></td>
                                                    <td>John Doe</td>
                                                    <td>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-green" role="progressbar" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100" style={{width: "62%"}}></div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Task B</td>
                                                    <td><span className="label bg-blue">To Do</span></td>
                                                    <td>John Doe</td>
                                                    <td>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-blue" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}></div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Task C</td>
                                                    <td><span className="label bg-light-blue">On Hold</span></td>
                                                    <td>John Doe</td>
                                                    <td>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-light-blue" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" style={{width: "72%"}}></div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Task D</td>
                                                    <td><span className="label bg-orange">Wait Approvel</span></td>
                                                    <td>John Doe</td>
                                                    <td>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-orange" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}></div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Task E</td>
                                                    <td>
                                                        <span className="label bg-red">Suspended</span>
                                                    </td>
                                                    <td>John Doe</td>
                                                    <td>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-red" role="progressbar" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100" style={{width: "87%"}}></div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="card">
                                <div className="header">
                                    <h2>BROWSER USAGE</h2>
                                    <ul className="header-dropdown m-r--5">
                                        <li className="dropdown">
                                            <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                <i className="material-icons">more_vert</i>
                                            </a>
                                            <ul className="dropdown-menu pull-right">
                                                <li><a href="javascript:void(0);">Action</a></li>
                                                <li><a href="javascript:void(0);">Another action</a></li>
                                                <li><a href="javascript:void(0);">Something else here</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <div id="donut_chart" className="dashboard-donut-chart"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Admin
