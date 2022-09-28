import React, { useEffect, useState } from "react";
import AuthenticationService from "./../../logic/AuthenticationService";
import ActiveMenu from "./SideMenu.data";

function SideMenu({ user }) {
  //const [activeMenu, setActiveMenu] = useState("");
  const userData = AuthenticationService.getLocalCredential();
  const activeMenu = ActiveMenu();
  //console.log("userData", userData.token);
  //console.log("ActiveMenu", ActiveMenu);
  return (
    <section>
      <aside id="leftsidebar" className="sidebar">
        <div className="user-info">
          <div className="image">
            <img
              src={
                userData.profile_image !== "0"
                  ? userData.profile_image
                  : "../../images/user.png"
              }
              width="48"
              height="48"
              alt="User"
            />
          </div>
          <div className="info-container">
            <div
              className="name"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {userData.userName}
            </div>
            <div className="email">{userData.email}</div>
            <div className="btn-group user-helper-dropdown">
              <i
                className="material-icons"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                keyboard_arrow_down
              </i>
              <ul className="dropdown-menu pull-right">
                <li>
                  <a href="">
                    <i className="material-icons">person</i>Profile
                  </a>
                </li>
                <li role="separator" className="divider"></li>

                <li>
                  <a href="/my-inventory">
                    <i className="material-icons"></i>My Inventory
                  </a>
                  <a href="/logout">
                    <i className="material-icons"></i>Logout
                  </a>
                </li>
                {/*    
                <li>
                  <a href="">
                    <i className="material-icons">group</i>Followers
                  </a>
                </li>             
                <li>
                  <a href="">
                    <i className="material-icons">shopping_cart</i>Sales
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="material-icons">favorite</i>Likes
                  </a>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <a href="">
                    <i className="material-icons">input</i>Sign Out
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="menu">
          <ul className="list">
            <li className="header">MAIN NAVIGATION</li>
            {/* <li>
              <a href="../../index.html">
                <i className="material-icons">home</i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="../../pages/typography.html">
                <i className="material-icons">text_fields</i>
                <span>Typography</span>
              </a>
            </li>
            <li>
              <a href="../../pages/helper-classNamees.html">
                <i className="material-icons">layers</i>
                <span>Helper classNamees</span>
              </a>
            </li> */}
            <li>
              <a href="#" className={`menu-toggle ${activeMenu["EMAIL"]}`}>
                <i className="material-icons"></i>
                <span>Email </span>
              </a>
              <ul className="ml-menu">
                <li>
                  <a href="/mailinglist">
                    <span>Mailing List</span>
                  </a>
                </li>
                <li>
                  <a href="/publicemail">
                    <span>Public Email</span>
                  </a>
                </li>
                <li>
                  <a href="/userlist">
                    <span>User List</span>
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className={`menu-toggle ${activeMenu["MASTER"]}`}>
                <i className="material-icons"></i>
                <span>Master</span>
              </a>
              <ul className="ml-menu">
                <li>
                  <a href="#" className={`menu-toggle ${activeMenu["PUBLIC"]}`}>
                    <i className="material-icons"></i>
                    <span>Public Page</span>
                  </a>
                  <ul className="ml-menu">
                    <li>
                      <a href="/faq">
                        <span>FAQ</span>
                      </a>
                    </li>
                    <li>
                      <a href="/tipsandtrick">
                        <span>Tips and Trick</span>
                      </a>
                    </li>
                    <li>
                      <a href="/mediaanddownload">
                        <span>Media and Download</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="/suppliervendor">
                    <span>Supplier/Vendor</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`menu-toggle ${activeMenu["HARDWARE"]}`}
                  >
                    <i className="material-icons"></i>
                    <span>Hardware</span>
                  </a>
                  <ul className="ml-menu">
                    <li>
                      <a href="/hardware-spec">
                        <span>Hardware Specification</span>
                      </a>
                    </li>
                    <li>
                      <a href="/perbaikan-hardware">
                        <span>Perbaikan Hardware</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="/software">
                    <span>Software</span>
                  </a>
                </li>
                <li>
                  <a href="/form-permintaan">
                    <span>Form Permintaan</span>
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className={`menu-toggle ${activeMenu["TICKET"]}`}>
                <i className="material-icons"></i>
                <span>Ticket</span>
              </a>
              <ul className="ml-menu">
                <li>
                  <a href="/ticket-list">
                    <span>Ticket List (Admin)</span>
                  </a>
                </li>
                <li>
                  <a href="/my-ticket-list">
                    <span>My Ticket List </span>
                  </a>
                </li>
                <li>
                  <a href="/my-staff-ticket-list">
                    <span>My Staff Ticket List</span>
                  </a>
                </li>
                <li>
                  <a href="/ticket-open">
                    <span>Open Ticket</span>
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/faq-preview">
                <span>FAQ</span>
              </a>
            </li>

            <li>
              <a href="/tipsandtrick-preview">
                <span>Tips and Trick</span>
              </a>
            </li>

            <li>
              <a href="/mediaanddownload-preview">
                <span>Media and Download</span>
              </a>
            </li>

            {/* <li>
              <a href="javascript:void(0);" className="menu-toggle">
                <i className="material-icons">swap_calls</i>
                <span>User Interface (UI)</span>
              </a>
              <ul className="ml-menu">
                <li>
                  <a href="../../pages/ui/alerts.html">Alerts</a>
                </li>
                <li>
                  <a href="../../pages/ui/animations.html">Animations</a>
                </li>
                <li>
                  <a href="../../pages/ui/badges.html">Badges</a>
                </li>

                <li>
                  <a href="../../pages/ui/breadcrumbs.html">Breadcrumbs</a>
                </li>
                <li>
                  <a href="../../pages/ui/buttons.html">Buttons</a>
                </li>
                <li>
                  <a href="../../pages/ui/collapse.html">Collapse</a>
                </li>
                <li>
                  <a href="../../pages/ui/colors.html">Colors</a>
                </li>
                <li>
                  <a href="../../pages/ui/dialogs.html">Dialogs</a>
                </li>
                <li>
                  <a href="../../pages/ui/icons.html">Icons</a>
                </li>
                <li>
                  <a href="../../pages/ui/labels.html">Labels</a>
                </li>
                <li>
                  <a href="../../pages/ui/list-group.html">List Group</a>
                </li>
                <li>
                  <a href="../../pages/ui/media-object.html">Media Object</a>
                </li>
                <li>
                  <a href="../../pages/ui/modals.html">Modals</a>
                </li>
                <li>
                  <a href="../../pages/ui/notifications.html">Notifications</a>
                </li>
                <li>
                  <a href="../../pages/ui/pagination.html">Pagination</a>
                </li>
                <li>
                  <a href="../../pages/ui/preloaders.html">Preloaders</a>
                </li>
                <li>
                  <a href="../../pages/ui/progressbars.html">Progress Bars</a>
                </li>
                <li>
                  <a href="../../pages/ui/range-sliders.html">Range Sliders</a>
                </li>
                <li>
                  <a href="../../pages/ui/sortable-nestable.html">
                    Sortable & Nestable
                  </a>
                </li>
                <li>
                  <a href="../../pages/ui/tabs.html">Tabs</a>
                </li>
                <li>
                  <a href="../../pages/ui/thumbnails.html">Thumbnails</a>
                </li>
                <li>
                  <a href="../../pages/ui/tooltips-popovers.html">
                    Tooltips & Popovers
                  </a>
                </li>
                <li>
                  <a href="../../pages/ui/waves.html">Waves</a>
                </li>
              </ul>
            </li>
            <li className="active">
              <a href="javascript:void(0);" className="menu-toggle">
                <i className="material-icons">assignment</i>
                <span>Forms</span>
              </a>
              <ul className="ml-menu">
                <li className="active">
                  <a href="../../pages/forms/basic-form-elements.html">
                    Basic Form Elements
                  </a>
                </li>
                <li>
                  <a href="../../pages/forms/advanced-form-elements.html">
                    Advanced Form Elements
                  </a>
                </li>
                <li>
                  <a href="../../pages/forms/form-examples.html">
                    Form Examples
                  </a>
                </li>
                <li>
                  <a href="../../pages/forms/form-validation.html">
                    Form Validation
                  </a>
                </li>
                <li>
                  <a href="../../pages/forms/form-wizard.html">Form Wizard</a>
                </li>
                <li>
                  <a href="../../pages/forms/editors.html">Editors</a>
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
                  <a href="../../pages/tables/normal-tables.html">
                    Normal Tables
                  </a>
                </li>
                <li>
                  <a href="../../pages/tables/jquery-datatable.html">
                    Jquery Datatables
                  </a>
                </li>
                <li>
                  <a href="../../pages/tables/editable-table.html">
                    Editable Tables
                  </a>
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
                  <a href="../../pages/medias/image-gallery.html">
                    Image Gallery
                  </a>
                </li>
                <li>
                  <a href="../../pages/medias/carousel.html">Carousel</a>
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
                  <a href="../../pages/charts/morris.html">Morris</a>
                </li>
                <li>
                  <a href="../../pages/charts/flot.html">Flot</a>
                </li>
                <li>
                  <a href="../../pages/charts/chartjs.html">ChartJS</a>
                </li>
                <li>
                  <a href="../../pages/charts/sparkline.html">Sparkline</a>
                </li>
                <li>
                  <a href="../../pages/charts/jquery-knob.html">Jquery Knob</a>
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
                  <a href="../../pages/examples/profile.html">Profile</a>
                </li>
                <li>
                  <a href="../../pages/examples/sign-in.html">Sign In</a>
                </li>
                <li>
                  <a href="../../pages/examples/sign-up.html">Sign Up</a>
                </li>
                <li>
                  <a href="../../pages/examples/forgot-password.html">
                    Forgot Password
                  </a>
                </li>
                <li>
                  <a href="../../pages/examples/blank.html">Blank Page</a>
                </li>
                <li>
                  <a href="../../pages/examples/404.html">404 - Not Found</a>
                </li>
                <li>
                  <a href="../../pages/examples/500.html">500 - Server Error</a>
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
                  <a href="../../pages/maps/google.html">Google Map</a>
                </li>
                <li>
                  <a href="../../pages/maps/yandex.html">YandexMap</a>
                </li>
                <li>
                  <a href="../../pages/maps/jvectormap.html">jVectorMap</a>
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
              <a href="../changelogs.html">
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
          */}
          </ul>
        </div>
        <div className="legal">
          <div className="copyright">
            &copy; 2016 - 2017 <a href="">AdminBSB - Material Design</a>.
          </div>
          <div className="version">
            <b>Version: </b> 1.0.5
          </div>
        </div>
      </aside>
      {/*       
      <aside id="rightsidebar" className="right-sidebar">
        <ul className="nav nav-tabs tab-nav-right" role="tablist">
          <li role="presentation" className="active">
            <a href="#skins" data-toggle="tab">
              SKINS
            </a>
          </li>
          <li role="presentation">
            <a href="#settings" data-toggle="tab">
              SETTINGS
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div
            role="tabpanel"
            className="tab-pane fade in active in active"
            id="skins"
          >
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
                    <label>
                      <input type="checkbox" checked />
                      <span className="lever"></span>
                    </label>
                  </div>
                </li>
                <li>
                  <span>Email Redirect</span>
                  <div className="switch">
                    <label>
                      <input type="checkbox" />
                      <span className="lever"></span>
                    </label>
                  </div>
                </li>
              </ul>
              <p>SYSTEM SETTINGS</p>
              <ul className="setting-list">
                <li>
                  <span>Notifications</span>
                  <div className="switch">
                    <label>
                      <input type="checkbox" checked />
                      <span className="lever"></span>
                    </label>
                  </div>
                </li>
                <li>
                  <span>Auto Updates</span>
                  <div className="switch">
                    <label>
                      <input type="checkbox" checked />
                      <span className="lever"></span>
                    </label>
                  </div>
                </li>
              </ul>
              <p>ACCOUNT SETTINGS</p>
              <ul className="setting-list">
                <li>
                  <span>Offline</span>
                  <div className="switch">
                    <label>
                      <input type="checkbox" />
                      <span className="lever"></span>
                    </label>
                  </div>
                </li>
                <li>
                  <span>Location Permission</span>
                  <div className="switch">
                    <label>
                      <input type="checkbox" checked />
                      <span className="lever"></span>
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
       */}
    </section>
  );
}

export default React.memo(SideMenu);
