import React from "react";

function FormPage() {
  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>BASIC FORM ELEMENTS</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>
                    INPUT
                    <small>Different sizes and widths</small>
                  </h2>
                  <ul className="header-dropdown m-r--5">
                    <li className="dropdown">
                      <a
                        href="javascript:void(0);"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a href="javascript:void(0);">Action</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Another action</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Something else here</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="body">
                  <h2 className="card-inside-title">Basic Examples</h2>
                  <div className="row clearfix">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="file"
                            className="form-control"
                            placeholder="file"
                            name="file"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="card-inside-title">Different Widths</h2>
                  <div className="row clearfix">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="col-sm-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="col-sm-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row clearfix">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="col-sm-4"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="col-sm-4"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="col-sm-4"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row clearfix">
                    <div className="col-sm-3">
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="col-sm-3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="col-sm-3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="col-sm-3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="col-sm-3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="card-inside-title">Different Sizes</h2>
                  <div className="row clearfix">
                    <div className="col-sm-12">
                      <div className="form-group form-group-lg">
                        <div className="form-line">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Large Input"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Default Input"
                          />
                        </div>
                      </div>
                      <div className="form-group form-group-sm">
                        <div className="form-line">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Small Input"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="card-inside-title">Floating Label Examples</h2>
                  <div className="row clearfix">
                    <div className="col-sm-12">
                      <div className="form-group form-float">
                        <div className="form-line">
                          <input type="text" className="form-control" />
                          <label className="form-label">Username</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group form-float">
                        <div className="form-line">
                          <input type="file" className="form-control" />
                          <label className="form-label">Upload File</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group form-float">
                        <div className="form-line">
                          <input type="password" className="form-control" />
                          <label className="form-label">Password</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group form-float form-group-lg">
                        <div className="form-line">
                          <input type="text" className="form-control" />
                          <label className="form-label">Large Input</label>
                        </div>
                      </div>
                      <div className="form-group form-float">
                        <div className="form-line">
                          <input type="text" className="form-control" />
                          <label className="form-label">Default Input</label>
                        </div>
                      </div>
                      <div className="form-group form-float form-group-sm">
                        <div className="form-line">
                          <input type="text" className="form-control" />
                          <label className="form-label">Small Input</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="card-inside-title">Input Status</h2>
                  <div className="row clearfix">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <div className="form-line focused">
                          <input
                            type="text"
                            className="form-control"
                            value="Focused"
                            placeholder="Statu Focused"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <div className="form-line disabled">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Disabled"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>TEXTAREA</h2>
                  <ul className="header-dropdown m-r--5">
                    <li className="dropdown">
                      <a
                        href="javascript:void(0);"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a href="javascript:void(0);">Action</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Another action</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Something else here</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="body">
                  <h2 className="card-inside-title">Basic Example</h2>
                  <div className="row clearfix">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <div className="form-line">
                          <textarea
                            rows="4"
                            className="form-control no-resize"
                            placeholder="Please type what you want..."
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="card-inside-title">
                    Auto Growing Vertical Direction
                    <small>
                      Taken from{" "}
                      <a
                        href="https://github.com/jackmoore/autosize/tree/master"
                        target="_blank"
                      >
                        github.com/jackmoore/autosize/tree/master
                      </a>
                    </small>
                  </h2>
                  <div className="form-group">
                    <div className="form-line">
                      <textarea
                        rows="1"
                        className="form-control no-resize auto-growth"
                        placeholder="Please type what you want... And please don't forget the ENTER key press multiple times :)"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>
                    SELECT
                    <small>
                      Taken from{" "}
                      <a
                        href="https://silviomoreto.github.io/bootstrap-select/"
                        target="_blank"
                      >
                        silviomoreto.github.io/bootstrap-select
                      </a>
                    </small>
                  </h2>
                  <ul className="header-dropdown m-r--5">
                    <li className="dropdown">
                      <a
                        href="javascript:void(0);"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a href="javascript:void(0);">Action</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Another action</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Something else here</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="body">
                  <div className="row clearfix">
                    <div className="col-sm-6">
                      <select className="form-control show-tick">
                        <option value="">-- Please select --</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                      </select>
                    </div>
                    <div className="col-sm-6">
                      <select className="form-control" disabled>
                        <option value="">Disabled</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>
                    BOOTSTRAP DATE PICKER
                    <small>
                      Taken from{" "}
                      <a
                        href="https://github.com/uxsolutions/bootstrap-datepicker"
                        target="_blank"
                      >
                        github.com/uxsolutions/bootstrap-datepicker
                      </a>
                    </small>
                  </h2>
                  <ul className="header-dropdown m-r--5">
                    <li className="dropdown">
                      <a
                        href="javascript:void(0);"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a href="javascript:void(0);">Action</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Another action</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Something else here</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="body">
                  <div className="row clearfix">
                    <div className="col-xs-3">
                      <h2 className="card-inside-title">Text Input</h2>
                      <div className="form-group">
                        <div className="form-line" id="bs_datepicker_container">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Please choose a date..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-3">
                      <h2 className="card-inside-title">Component</h2>
                      <div
                        className="input-group date"
                        id="bs_datepicker_component_container"
                      >
                        <div className="form-line">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Please choose a date..."
                          />
                        </div>
                        <span className="input-group-addon">
                          <i className="material-icons">date_range</i>
                        </span>
                      </div>
                    </div>
                    <div className="col-xs-6">
                      <h2 className="card-inside-title">Range</h2>
                      <div
                        className="input-daterange input-group"
                        id="bs_datepicker_range_container"
                      >
                        <div className="form-line">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Date start..."
                          />
                        </div>
                        <span className="input-group-addon">to</span>
                        <div className="form-line">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Date end..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>
                    DATETIME PICKER
                    <small>
                      Taken from{" "}
                      <a
                        href="https://github.com/T00rk/bootstrap-material-datetimepicker"
                        target="_blank"
                      >
                        github.com/T00rk/bootstrap-material-datetimepicker
                      </a>{" "}
                      with{" "}
                      <a href="http://momentjs.com/" target="_blank">
                        momentjs.com
                      </a>
                    </small>
                  </h2>
                  <ul className="header-dropdown m-r--5">
                    <li className="dropdown">
                      <a
                        href="javascript:void(0);"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a href="javascript:void(0);">Action</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Another action</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Something else here</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="body">
                  <div className="row clearfix">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            className="datepicker form-control"
                            placeholder="Please choose a date..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            className="timepicker form-control"
                            placeholder="Please choose a time..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            className="datetimepicker form-control"
                            placeholder="Please choose date & time..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>
                    CHECKBOX
                    <small>
                      Taken from{" "}
                      <a href="http://materializecss.com/" target="_blank">
                        materializecss.com
                      </a>
                    </small>
                  </h2>
                  <ul className="header-dropdown m-r--5">
                    <li className="dropdown">
                      <a
                        href="javascript:void(0);"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a href="javascript:void(0);">Action</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Another action</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Something else here</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="body">
                  <h2 className="card-inside-title">Basic Examples</h2>
                  <div className="demo-checkbox">
                    <input type="checkbox" id="basic_checkbox_1" checked />
                    <label for="basic_checkbox_1">Default</label>
                    <input
                      type="checkbox"
                      id="basic_checkbox_2"
                      className="filled-in"
                      checked
                    />
                    <label for="basic_checkbox_2">Filled In</label>
                    <input
                      type="checkbox"
                      id="basic_checkbox_3"
                      checked
                      disabled
                    />
                    <label for="basic_checkbox_3">Default - Disabled</label>
                    <input
                      type="checkbox"
                      id="basic_checkbox_4"
                      className="filled-in"
                      checked
                      disabled
                    />
                    <label for="basic_checkbox_4">Filled In - Disabled</label>
                  </div>

                  <h2 className="card-inside-title">
                    With Material Design Colors
                  </h2>
                  <div className="demo-checkbox">
                    <input
                      type="checkbox"
                      id="md_checkbox_1"
                      className="chk-col-red"
                      checked
                    />
                    <label for="md_checkbox_1">RED</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_2"
                      className="chk-col-pink"
                      checked
                    />
                    <label for="md_checkbox_2">PINK</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_3"
                      className="chk-col-purple"
                      checked
                    />
                    <label for="md_checkbox_3">PURPLE</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_4"
                      className="chk-col-deep-purple"
                      checked
                    />
                    <label for="md_checkbox_4">DEEP PURPLE</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_5"
                      className="chk-col-indigo"
                      checked
                    />
                    <label for="md_checkbox_5">INDIGO</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_6"
                      className="chk-col-blue"
                      checked
                    />
                    <label for="md_checkbox_6">BLUE</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_7"
                      className="chk-col-light-blue"
                      checked
                    />
                    <label for="md_checkbox_7">LIGHT BLUE</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_8"
                      className="chk-col-cyan"
                      checked
                    />
                    <label for="md_checkbox_8">CYAN</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_9"
                      className="chk-col-teal"
                      checked
                    />
                    <label for="md_checkbox_9">TEAL</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_10"
                      className="chk-col-green"
                      checked
                    />
                    <label for="md_checkbox_10">GREEN</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_11"
                      className="chk-col-light-green"
                      checked
                    />
                    <label for="md_checkbox_11">LIGHT GREEN</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_12"
                      className="chk-col-lime"
                      checked
                    />
                    <label for="md_checkbox_12">LIME</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_13"
                      className="chk-col-yellow"
                      checked
                    />
                    <label for="md_checkbox_13">YELLOW</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_14"
                      className="chk-col-amber"
                      checked
                    />
                    <label for="md_checkbox_14">AMBER</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_15"
                      className="chk-col-orange"
                      checked
                    />
                    <label for="md_checkbox_15">ORANGE</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_16"
                      className="chk-col-deep-orange"
                      checked
                    />
                    <label for="md_checkbox_16">DEEP ORANGE</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_17"
                      className="chk-col-brown"
                      checked
                    />
                    <label for="md_checkbox_17">BROWN</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_18"
                      className="chk-col-grey"
                      checked
                    />
                    <label for="md_checkbox_18">GREY</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_19"
                      className="chk-col-blue-grey"
                      checked
                    />
                    <label for="md_checkbox_19">BLUE GREY</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_20"
                      className="chk-col-black"
                      checked
                    />
                    <label for="md_checkbox_20">BLACK</label>
                  </div>

                  <h2 className="card-inside-title">
                    With Material Design Colors - Filled In
                  </h2>
                  <div className="demo-checkbox">
                    <input
                      type="checkbox"
                      id="md_checkbox_21"
                      className="filled-in chk-col-red"
                      checked
                    />
                    <label for="md_checkbox_21">RED</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_22"
                      className="filled-in chk-col-pink"
                      checked
                    />
                    <label for="md_checkbox_22">PINK</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_23"
                      className="filled-in chk-col-purple"
                      checked
                    />
                    <label for="md_checkbox_23">PURPLE</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_24"
                      className="filled-in chk-col-deep-purple"
                      checked
                    />
                    <label for="md_checkbox_24">DEEP PURPLE</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_25"
                      className="filled-in chk-col-indigo"
                      checked
                    />
                    <label for="md_checkbox_25">INDIGO</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_26"
                      className="filled-in chk-col-blue"
                      checked
                    />
                    <label for="md_checkbox_26">BLUE</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_27"
                      className="filled-in chk-col-light-blue"
                      checked
                    />
                    <label for="md_checkbox_27">LIGHT BLUE</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_28"
                      className="filled-in chk-col-cyan"
                      checked
                    />
                    <label for="md_checkbox_28">CYAN</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_29"
                      className="filled-in chk-col-teal"
                      checked
                    />
                    <label for="md_checkbox_29">TEAL</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_30"
                      className="filled-in chk-col-green"
                      checked
                    />
                    <label for="md_checkbox_30">GREEN</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_31"
                      className="filled-in chk-col-light-green"
                      checked
                    />
                    <label for="md_checkbox_31">LIGHT GREEN</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_32"
                      className="filled-in chk-col-lime"
                      checked
                    />
                    <label for="md_checkbox_32">LIME</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_33"
                      className="filled-in chk-col-yellow"
                      checked
                    />
                    <label for="md_checkbox_33">YELLOW</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_34"
                      className="filled-in chk-col-amber"
                      checked
                    />
                    <label for="md_checkbox_34">AMBER</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_35"
                      className="filled-in chk-col-orange"
                      checked
                    />
                    <label for="md_checkbox_35">ORANGE</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_36"
                      className="filled-in chk-col-deep-orange"
                      checked
                    />
                    <label for="md_checkbox_36">DEEP ORANGE</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_37"
                      className="filled-in chk-col-brown"
                      checked
                    />
                    <label for="md_checkbox_37">BROWN</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_38"
                      className="filled-in chk-col-grey"
                      checked
                    />
                    <label for="md_checkbox_38">GREY</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_39"
                      className="filled-in chk-col-blue-grey"
                      checked
                    />
                    <label for="md_checkbox_39">BLUE GREY</label>
                    <input
                      type="checkbox"
                      id="md_checkbox_40"
                      className="filled-in chk-col-black"
                      checked
                    />
                    <label for="md_checkbox_40">BLACK</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>
                    RADIO
                    <small>
                      Taken from{" "}
                      <a href="http://materializecss.com/" target="_blank">
                        materializecss.com
                      </a>
                    </small>
                  </h2>
                  <ul className="header-dropdown m-r--5">
                    <li className="dropdown">
                      <a
                        href="javascript:void(0);"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a href="javascript:void(0);">Action</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Another action</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Something else here</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="body">
                  <h2 className="card-inside-title">Basic Examples</h2>
                  <div className="demo-radio-button">
                    <input name="group1" type="radio" id="radio_1" checked />
                    <label for="radio_1">Radio - 1</label>
                    <input name="group1" type="radio" id="radio_2" />
                    <label for="radio_2">Radio - 2</label>
                    <input
                      name="group1"
                      type="radio"
                      className="with-gap"
                      id="radio_3"
                    />
                    <label for="radio_3">Radio - With Gap</label>
                    <input
                      name="group1"
                      type="radio"
                      id="radio_4"
                      className="with-gap"
                    />
                    <label for="radio_4">Radio - With Gap</label>
                    <input
                      name="group2"
                      type="radio"
                      id="radio_5"
                      checked
                      disabled
                    />
                    <label for="radio_5">Radio - Disabled</label>
                    <input
                      name="group3"
                      type="radio"
                      id="radio_6"
                      className="with-gap"
                      checked
                      disabled
                    />
                    <label for="radio_6">Radio - Disabled</label>
                  </div>

                  <h2 className="card-inside-title">
                    With Material Design Colors
                    <small>
                      You can use material design colors which examples are{" "}
                      <code>.radio-col-pink, .radio-col-cyan</code> className
                    </small>
                  </h2>
                  <div className="demo-radio-button">
                    <input
                      name="group4"
                      type="radio"
                      id="radio_7"
                      className="radio-col-red"
                      checked
                    />
                    <label for="radio_7">RED</label>
                    <input
                      name="group4"
                      type="radio"
                      id="radio_8"
                      className="radio-col-pink"
                    />
                    <label for="radio_8">PINK</label>
                    <input
                      name="group4"
                      type="radio"
                      id="radio_9"
                      className="radio-col-purple"
                    />
                    <label for="radio_9">PURPLE</label>
                    <input
                      name="group4"
                      type="radio"
                      id="radio_10"
                      className="radio-col-deep-purple"
                    />
                    <label for="radio_10">DEEP PURPLE</label>
                    <input
                      name="group4"
                      type="radio"
                      id="radio_11"
                      className="radio-col-indigo"
                    />
                    <label for="radio_11">INDIGO</label>
                    <input
                      name="group4"
                      type="radio"
                      id="radio_12"
                      className="radio-col-blue"
                    />
                    <label for="radio_12">BLUE</label>
                    <input
                      name="group4"
                      type="radio"
                      id="radio_13"
                      className="radio-col-light-blue"
                    />
                    <label for="radio_13">LIGHT BLUE</label>
                    <input
                      name="group4"
                      type="radio"
                      id="radio_14"
                      className="radio-col-cyan"
                    />
                    <label for="radio_14">CYAN</label>
                    <input
                      name="group4"
                      type="radio"
                      id="radio_15"
                      className="radio-col-teal"
                    />
                    <label for="radio_15">TEAL</label>
                    <input
                      name="group4"
                      type="radio"
                      id="radio_16"
                      className="radio-col-green"
                    />
                    <label for="radio_16">GREEN</label>
                    <input
                      name="group4"
                      type="radio"
                      id="radio_17"
                      className="radio-col-light-green"
                    />
                    <label for="radio_17">LIGHT GREEN</label>
                    <input
                      name="group4"
                      type="radio"
                      id="radio_18"
                      className="radio-col-lime"
                    />
                    <label for="radio_18">LIME</label>
                    <input
                      name="group4"
                      type="radio"
                      id="radio_19"
                      className="radio-col-yellow"
                    />
                    <label for="radio_19">YELLOW</label>
                    <input
                      name="group4"
                      type="radio"
                      id="radio_20"
                      className="radio-col-amber"
                    />
                    <label for="radio_20">AMBER</label>
                    <input
                      name="group4"
                      type="radio"
                      id="radio_21"
                      className="radio-col-orange"
                    />
                    <label for="radio_21">ORANGE</label>
                    <input
                      name="group4"
                      type="radio"
                      id="radio_22"
                      className="radio-col-deep-orange"
                    />
                    <label for="radio_22">DEEP ORANGE</label>
                    <input
                      name="group4"
                      type="radio"
                      id="radio_23"
                      className="radio-col-brown"
                    />
                    <label for="radio_23">BROWN</label>
                    <input
                      name="group4"
                      type="radio"
                      id="radio_24"
                      className="radio-col-grey"
                    />
                    <label for="radio_24">GREY</label>
                    <input
                      name="group4"
                      type="radio"
                      id="radio_25"
                      className="radio-col-blue-grey"
                    />
                    <label for="radio_25">BLUE GREY</label>
                    <input
                      name="group4"
                      type="radio"
                      id="radio_26"
                      className="radio-col-black"
                    />
                    <label for="radio_26">BLACK</label>
                  </div>

                  <h2 className="card-inside-title">
                    With Material Design Colors - With Gap
                    <small>
                      Add to <code>.with-gap</code> className
                    </small>
                  </h2>
                  <div className="demo-radio-button">
                    <input
                      name="group5"
                      type="radio"
                      id="radio_30"
                      className="with-gap radio-col-red"
                      checked
                    />
                    <label for="radio_30">RED</label>
                    <input
                      name="group5"
                      type="radio"
                      id="radio_31"
                      className="with-gap radio-col-pink"
                    />
                    <label for="radio_31">PINK</label>
                    <input
                      name="group5"
                      type="radio"
                      id="radio_32"
                      className="with-gap radio-col-purple"
                    />
                    <label for="radio_32">PURPLE</label>
                    <input
                      name="group5"
                      type="radio"
                      id="radio_33"
                      className="with-gap radio-col-deep-purple"
                    />
                    <label for="radio_33">DEEP PURPLE</label>
                    <input
                      name="group5"
                      type="radio"
                      id="radio_34"
                      className="with-gap radio-col-indigo"
                    />
                    <label for="radio_34">INDIGO</label>
                    <input
                      name="group5"
                      type="radio"
                      id="radio_35"
                      className="with-gap radio-col-blue"
                    />
                    <label for="radio_35">BLUE</label>
                    <input
                      name="group5"
                      type="radio"
                      id="radio_36"
                      className="with-gap radio-col-light-blue"
                    />
                    <label for="radio_36">LIGHT BLUE</label>
                    <input
                      name="group5"
                      type="radio"
                      id="radio_37"
                      className="with-gap radio-col-cyan"
                    />
                    <label for="radio_37">CYAN</label>
                    <input
                      name="group5"
                      type="radio"
                      id="radio_38"
                      className="with-gap radio-col-teal"
                    />
                    <label for="radio_38">TEAL</label>
                    <input
                      name="group5"
                      type="radio"
                      id="radio_39"
                      className="with-gap radio-col-green"
                    />
                    <label for="radio_39">GREEN</label>
                    <input
                      name="group5"
                      type="radio"
                      id="radio_40"
                      className="with-gap radio-col-light-green"
                    />
                    <label for="radio_40">LIGHT GREEN</label>
                    <input
                      name="group5"
                      type="radio"
                      id="radio_41"
                      className="with-gap radio-col-lime"
                    />
                    <label for="radio_41">LIME</label>
                    <input
                      name="group5"
                      type="radio"
                      id="radio_42"
                      className="with-gap radio-col-yellow"
                    />
                    <label for="radio_42">YELLOW</label>
                    <input
                      name="group5"
                      type="radio"
                      id="radio_43"
                      className="with-gap radio-col-amber"
                    />
                    <label for="radio_43">AMBER</label>
                    <input
                      name="group5"
                      type="radio"
                      id="radio_44"
                      className="with-gap radio-col-orange"
                    />
                    <label for="radio_44">ORANGE</label>
                    <input
                      name="group5"
                      type="radio"
                      id="radio_45"
                      className="with-gap radio-col-deep-orange"
                    />
                    <label for="radio_45">DEEP ORANGE</label>
                    <input
                      name="group5"
                      type="radio"
                      id="radio_46"
                      className="with-gap radio-col-brown"
                    />
                    <label for="radio_46">BROWN</label>
                    <input
                      name="group5"
                      type="radio"
                      id="radio_47"
                      className="with-gap radio-col-grey"
                    />
                    <label for="radio_47">GREY</label>
                    <input
                      name="group5"
                      type="radio"
                      id="radio_48"
                      className="with-gap radio-col-blue-grey"
                    />
                    <label for="radio_48">BLUE GREY</label>
                    <input
                      name="group5"
                      type="radio"
                      id="radio_49"
                      className="with-gap radio-col-black"
                    />
                    <label for="radio_49">BLACK</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>
                    SWITCH BUTTON
                    <small>
                      Taken from{" "}
                      <a href="http://materializecss.com/" target="_blank">
                        materializecss.com
                      </a>
                    </small>
                  </h2>
                  <ul className="header-dropdown m-r--5">
                    <li className="dropdown">
                      <a
                        href="javascript:void(0);"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a href="javascript:void(0);">Action</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Another action</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Something else here</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="body">
                  <h2 className="card-inside-title">Basic Examples</h2>
                  <div className="demo-switch">
                    <div className="switch">
                      <label>
                        OFF
                        <input type="checkbox" checked />
                        <span className="lever"></span>ON
                      </label>
                    </div>
                    <div className="switch">
                      <label>
                        DISABLED
                        <input type="checkbox" disabled />
                        <span className="lever"></span>
                      </label>
                    </div>
                  </div>

                  <h2 className="card-inside-title">
                    With Material Design Colors
                    <small>
                      You can use material design colors which examples are{" "}
                      <code>.switch-col-pink, .switch-col-teal</code> className
                    </small>
                  </h2>
                  <div className="demo-switch">
                    <div className="row clearfix">
                      <div className="col-sm-3">
                        <div className="demo-switch-title">RED</div>
                        <div className="switch">
                          <label>
                            <input type="checkbox" checked />
                            <span className="lever switch-col-red"></span>
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="demo-switch-title">PINK</div>
                        <div className="switch">
                          <label>
                            <input type="checkbox" checked />
                            <span className="lever switch-col-pink"></span>
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="demo-switch-title">PURPLE</div>
                        <div className="switch">
                          <label>
                            <input type="checkbox" checked />
                            <span className="lever switch-col-purple"></span>
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="demo-switch-title">DEEP PURPLE</div>
                        <div className="switch">
                          <label>
                            <input type="checkbox" checked />
                            <span className="lever switch-col-deep-purple"></span>
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="demo-switch-title">INDIGO</div>
                        <div className="switch">
                          <label>
                            <input type="checkbox" checked />
                            <span className="lever switch-col-indigo"></span>
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="demo-switch-title">BLUE</div>
                        <div className="switch">
                          <label>
                            <input type="checkbox" checked />
                            <span className="lever switch-col-blue"></span>
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="demo-switch-title">LIGHT BLUE</div>
                        <div className="switch">
                          <label>
                            <input type="checkbox" checked />
                            <span className="lever switch-col-light-blue"></span>
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="demo-switch-title">CYAN</div>
                        <div className="switch">
                          <label>
                            <input type="checkbox" checked />
                            <span className="lever switch-col-cyan"></span>
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="demo-switch-title">TEAL</div>
                        <div className="switch">
                          <label>
                            <input type="checkbox" checked />
                            <span className="lever switch-col-teal"></span>
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="demo-switch-title">GREEN</div>
                        <div className="switch">
                          <label>
                            <input type="checkbox" checked />
                            <span className="lever switch-col-green"></span>
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="demo-switch-title">LIGHT GREEN</div>
                        <div className="switch">
                          <label>
                            <input type="checkbox" checked />
                            <span className="lever switch-col-light-green"></span>
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="demo-switch-title">LIME</div>
                        <div className="switch">
                          <label>
                            <input type="checkbox" checked />
                            <span className="lever switch-col-lime"></span>
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="demo-switch-title">YELLOW</div>
                        <div className="switch">
                          <label>
                            <input type="checkbox" checked />
                            <span className="lever switch-col-yellow"></span>
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="demo-switch-title">AMBER</div>
                        <div className="switch">
                          <label>
                            <input type="checkbox" checked />
                            <span className="lever switch-col-amber"></span>
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="demo-switch-title">ORANGE</div>
                        <div className="switch">
                          <label>
                            <input type="checkbox" checked />
                            <span className="lever switch-col-orange"></span>
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="demo-switch-title">DEEP ORANGE</div>
                        <div className="switch">
                          <label>
                            <input type="checkbox" checked />
                            <span className="lever switch-col-deep-orange"></span>
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="demo-switch-title">BROWN</div>
                        <div className="switch">
                          <label>
                            <input type="checkbox" checked />
                            <span className="lever switch-col-brown"></span>
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="demo-switch-title">GREY</div>
                        <div className="switch">
                          <label>
                            <input type="checkbox" checked />
                            <span className="lever switch-col-grey"></span>
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="demo-switch-title">BLUE GREY</div>
                        <div className="switch">
                          <label>
                            <input type="checkbox" checked />
                            <span className="lever switch-col-blue-grey"></span>
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="demo-switch-title">BLACK</div>
                        <div className="switch">
                          <label>
                            <input type="checkbox" checked />
                            <span className="lever switch-col-black"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default FormPage;
