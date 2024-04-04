import { convertStyleToReact } from "utils/helper.function";
import "./friends.css";
export default function Friends() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div id="content" className="content content-full-width">
            <div className="profile">
              <div className="profile-header">
                <div className="profile-header-cover"></div>
                <div className="profile-header-content">
                  <div className="profile-header-img">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt=""
                    />
                  </div>
                  <div className="profile-header-info">
                    <h4 className="m-t-10 m-b-5">Sean Ngu</h4>
                    <p className="m-b-10">UXUI + Frontend Developer</p>
                    <a href="#" className="btn btn-xs btn-yellow">
                      Edit Profile
                    </a>
                  </div>
                </div>
                <ul className="profile-header-tab nav nav-tabs">
                  <li className="nav-item">
                    <a
                      href="https://www.bootdey.com/snippets/view/bs4-profile-with-timeline-posts"
                      target="__blank"
                      className="nav-link_"
                    >
                      POSTS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.bootdey.com/snippets/view/bs4-profile-about"
                      target="__blank"
                      className="nav-link_"
                    >
                      ABOUT
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.bootdey.com/snippets/view/profile-photos"
                      target="__blank"
                      className="nav-link_"
                    >
                      PHOTOS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.bootdey.com/snippets/view/profile-videos"
                      target="__blank"
                      className="nav-link_"
                    >
                      VIDEOS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.bootdey.com/snippets/view/bs4-profile-friend-list"
                      target="__blank"
                      className="nav-link_ active show"
                    >
                      FRIENDS
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="profile-content">
              <div className="tab-content p-0">
                <div
                  className="tab-pane fade in active show"
                  id="profile-friends"
                >
                  <h4 className="m-t-0 m-b-20">Friend List (14)</h4>
                  <div className="row row-space-2">
                    <div className="col-md-6 m-b-2">
                      <div className="p-10 bg-white">
                        <div className="media media-xs overflow-visible">
                          <a className="media-left" href="javascript:;">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar1.png"
                              alt=""
                              className="media-object img-circle"
                            />
                          </a>
                          <div className="media-body valign-middle">
                            <b className="text-inverse">James Pittman</b>
                          </div>
                          <div className="media-body valign-middle text-right overflow-visible">
                            <div className="btn-group dropdown">
                              <a
                                href="javascript:;"
                                className="btn btn-default"
                              >
                                Friends
                              </a>
                              <a
                                href="javascript:;"
                                data-toggle="dropdown"
                                className="btn btn-default dropdown-toggle"
                                aria-expanded="false"
                              ></a>
                              <ul
                                className="dropdown-menu dropdown-menu-right"
                                x-placement="bottom-end"
                                style={convertStyleToReact(
                                  "position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(101px, 34px, 0px);"
                                )}
                              >
                                <li>
                                  <a href="javascript:;">Action 1</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 2</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 3</a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                  <a href="javascript:;">Action 4</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 m-b-2">
                      <div className="p-10 bg-white">
                        <div className="media media-xs overflow-visible">
                          <a className="media-left" href="javascript:;">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar2.png"
                              alt=""
                              className="media-object img-circle"
                            />
                          </a>
                          <div className="media-body valign-middle">
                            <b className="text-inverse">Mitchell Ashcroft</b>
                          </div>
                          <div className="media-body valign-middle text-right overflow-visible">
                            <div className="btn-group dropdown">
                              <a
                                href="javascript:;"
                                className="btn btn-default"
                              >
                                Friends
                              </a>
                              <a
                                href="javascript:;"
                                data-toggle="dropdown"
                                className="btn btn-default dropdown-toggle"
                              ></a>
                              <ul className="dropdown-menu dropdown-menu-right">
                                <li>
                                  <a href="javascript:;">Action 1</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 2</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 3</a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                  <a href="javascript:;">Action 4</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 m-b-2">
                      <div className="p-10 bg-white">
                        <div className="media media-xs overflow-visible">
                          <a className="media-left" href="javascript:;">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar3.png"
                              alt=""
                              className="media-object img-circle"
                            />
                          </a>
                          <div className="media-body valign-middle">
                            <b className="text-inverse">Ella Cabena</b>
                          </div>
                          <div className="media-body valign-middle text-right overflow-visible">
                            <div className="btn-group dropdown">
                              <a
                                href="javascript:;"
                                className="btn btn-default"
                              >
                                Friends
                              </a>
                              <a
                                href="javascript:;"
                                data-toggle="dropdown"
                                className="btn btn-default dropdown-toggle"
                                aria-expanded="false"
                              ></a>
                              <ul
                                className="dropdown-menu dropdown-menu-right"
                                x-placement="top-end"
                                style={convertStyleToReact(
                                  "position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(101px, -2px, 0px);"
                                )}
                              >
                                <li>
                                  <a href="javascript:;">Action 1</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 2</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 3</a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                  <a href="javascript:;">Action 4</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 m-b-2">
                      <div className="p-10 bg-white">
                        <div className="media media-xs overflow-visible">
                          <a className="media-left" href="javascript:;">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar4.png"
                              alt=""
                              className="media-object img-circle"
                            />
                          </a>
                          <div className="media-body valign-middle">
                            <b className="text-inverse">Declan Dyson</b>
                          </div>
                          <div className="media-body valign-middle text-right overflow-visible">
                            <div className="btn-group dropdown">
                              <a
                                href="javascript:;"
                                className="btn btn-default"
                              >
                                Friends
                              </a>
                              <a
                                href="javascript:;"
                                data-toggle="dropdown"
                                className="btn btn-default dropdown-toggle"
                              ></a>
                              <ul className="dropdown-menu dropdown-menu-right">
                                <li>
                                  <a href="javascript:;">Action 1</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 2</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 3</a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                  <a href="javascript:;">Action 4</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 m-b-2">
                      <div className="p-10 bg-white">
                        <div className="media media-xs overflow-visible">
                          <a className="media-left" href="javascript:;">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar5.png"
                              alt=""
                              className="media-object img-circle"
                            />
                          </a>
                          <div className="media-body valign-middle">
                            <b className="text-inverse">George Seyler</b>
                          </div>
                          <div className="media-body valign-middle text-right overflow-visible">
                            <div className="btn-group dropdown">
                              <a
                                href="javascript:;"
                                className="btn btn-default"
                              >
                                Friends
                              </a>
                              <a
                                href="javascript:;"
                                data-toggle="dropdown"
                                className="btn btn-default dropdown-toggle"
                              ></a>
                              <ul className="dropdown-menu dropdown-menu-right">
                                <li>
                                  <a href="javascript:;">Action 1</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 2</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 3</a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                  <a href="javascript:;">Action 4</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 m-b-2">
                      <div className="p-10 bg-white">
                        <div className="media media-xs overflow-visible">
                          <a className="media-left" href="javascript:;">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar6.png"
                              alt=""
                              className="media-object img-circle"
                            />
                          </a>
                          <div className="media-body valign-middle">
                            <b className="text-inverse">Patrick Musgrove</b>
                          </div>
                          <div className="media-body valign-middle text-right overflow-visible">
                            <div className="btn-group dropdown">
                              <a
                                href="javascript:;"
                                className="btn btn-default"
                              >
                                Friends
                              </a>
                              <a
                                href="javascript:;"
                                data-toggle="dropdown"
                                className="btn btn-default dropdown-toggle"
                              ></a>
                              <ul className="dropdown-menu dropdown-menu-right">
                                <li>
                                  <a href="javascript:;">Action 1</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 2</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 3</a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                  <a href="javascript:;">Action 4</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 m-b-2">
                      <div className="p-10 bg-white">
                        <div className="media media-xs overflow-visible">
                          <a className="media-left" href="javascript:;">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar7.png"
                              alt=""
                              className="media-object img-circle"
                            />
                          </a>
                          <div className="media-body valign-middle">
                            <b className="text-inverse">Taj Connal</b>
                          </div>
                          <div className="media-body valign-middle text-right overflow-visible">
                            <div className="btn-group dropdown">
                              <a
                                href="javascript:;"
                                className="btn btn-default"
                              >
                                Friends
                              </a>
                              <a
                                href="javascript:;"
                                data-toggle="dropdown"
                                className="btn btn-default dropdown-toggle"
                              ></a>
                              <ul className="dropdown-menu dropdown-menu-right">
                                <li>
                                  <a href="javascript:;">Action 1</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 2</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 3</a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                  <a href="javascript:;">Action 4</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 m-b-2">
                      <div className="p-10 bg-white">
                        <div className="media media-xs overflow-visible">
                          <a className="media-left" href="javascript:;">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar1.png"
                              alt=""
                              className="media-object img-circle"
                            />
                          </a>
                          <div className="media-body valign-middle">
                            <b className="text-inverse">Laura Pollock</b>
                          </div>
                          <div className="media-body valign-middle text-right overflow-visible">
                            <div className="btn-group dropdown">
                              <a
                                href="javascript:;"
                                className="btn btn-default"
                              >
                                Friends
                              </a>
                              <a
                                href="javascript:;"
                                data-toggle="dropdown"
                                className="btn btn-default dropdown-toggle"
                              ></a>
                              <ul className="dropdown-menu dropdown-menu-right">
                                <li>
                                  <a href="javascript:;">Action 1</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 2</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 3</a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                  <a href="javascript:;">Action 4</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 m-b-2">
                      <div className="p-10 bg-white">
                        <div className="media media-xs overflow-visible">
                          <a className="media-left" href="javascript:;">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar2.png"
                              alt=""
                              className="media-object img-circle"
                            />
                          </a>
                          <div className="media-body valign-middle">
                            <b className="text-inverse">Dakota Mannix</b>
                          </div>
                          <div className="media-body valign-middle text-right overflow-visible">
                            <div className="btn-group dropdown">
                              <a
                                href="javascript:;"
                                className="btn btn-default"
                              >
                                Friends
                              </a>
                              <a
                                href="javascript:;"
                                data-toggle="dropdown"
                                className="btn btn-default dropdown-toggle"
                              ></a>
                              <ul className="dropdown-menu dropdown-menu-right">
                                <li>
                                  <a href="javascript:;">Action 1</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 2</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 3</a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                  <a href="javascript:;">Action 4</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 m-b-2">
                      <div className="p-10 bg-white">
                        <div className="media media-xs overflow-visible">
                          <a className="media-left" href="javascript:;">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar1.png"
                              alt=""
                              className="media-object img-circle"
                            />
                          </a>
                          <div className="media-body valign-middle">
                            <b className="text-inverse">Timothy Woolley</b>
                          </div>
                          <div className="media-body valign-middle text-right overflow-visible">
                            <div className="btn-group dropdown">
                              <a
                                href="javascript:;"
                                className="btn btn-default"
                              >
                                Friends
                              </a>
                              <a
                                href="javascript:;"
                                data-toggle="dropdown"
                                className="btn btn-default dropdown-toggle"
                              ></a>
                              <ul className="dropdown-menu dropdown-menu-right">
                                <li>
                                  <a href="javascript:;">Action 1</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 2</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 3</a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                  <a href="javascript:;">Action 4</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 m-b-2">
                      <div className="p-10 bg-white">
                        <div className="media media-xs overflow-visible">
                          <a className="media-left" href="javascript:;">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar5.png"
                              alt=""
                              className="media-object img-circle"
                            />
                          </a>
                          <div className="media-body valign-middle">
                            <b className="text-inverse">Benjamin Congreve</b>
                          </div>
                          <div className="media-body valign-middle text-right overflow-visible">
                            <div className="btn-group dropdown">
                              <a
                                href="javascript:;"
                                className="btn btn-default"
                              >
                                Friends
                              </a>
                              <a
                                href="javascript:;"
                                data-toggle="dropdown"
                                className="btn btn-default dropdown-toggle"
                              ></a>
                              <ul className="dropdown-menu dropdown-menu-right">
                                <li>
                                  <a href="javascript:;">Action 1</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 2</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 3</a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                  <a href="javascript:;">Action 4</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 m-b-2">
                      <div className="p-10 bg-white">
                        <div className="media media-xs overflow-visible">
                          <a className="media-left" href="javascript:;">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar1.png"
                              alt=""
                              className="media-object img-circle"
                            />
                          </a>
                          <div className="media-body valign-middle">
                            <b className="text-inverse">Mariam Maddock</b>
                          </div>
                          <div className="media-body valign-middle text-right overflow-visible">
                            <div className="btn-group dropdown">
                              <a
                                href="javascript:;"
                                className="btn btn-default"
                              >
                                Friends
                              </a>
                              <a
                                href="javascript:;"
                                data-toggle="dropdown"
                                className="btn btn-default dropdown-toggle"
                              ></a>
                              <ul className="dropdown-menu dropdown-menu-right">
                                <li>
                                  <a href="javascript:;">Action 1</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 2</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 3</a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                  <a href="javascript:;">Action 4</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 m-b-2">
                      <div className="p-10 bg-white">
                        <div className="media media-xs overflow-visible">
                          <a className="media-left" href="javascript:;">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar3.png"
                              alt=""
                              className="media-object img-circle"
                            />
                          </a>
                          <div className="media-body valign-middle">
                            <b className="text-inverse">Blake Gerrald</b>
                          </div>
                          <div className="media-body valign-middle text-right overflow-visible">
                            <div className="btn-group dropdown">
                              <a
                                href="javascript:;"
                                className="btn btn-default"
                              >
                                Friends
                              </a>
                              <a
                                href="javascript:;"
                                data-toggle="dropdown"
                                className="btn btn-default dropdown-toggle"
                              ></a>
                              <ul className="dropdown-menu dropdown-menu-right">
                                <li>
                                  <a href="javascript:;">Action 1</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 2</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 3</a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                  <a href="javascript:;">Action 4</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 m-b-2">
                      <div className="p-10 bg-white">
                        <div className="media media-xs overflow-visible">
                          <a className="media-left" href="javascript:;">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar4.png"
                              alt=""
                              className="media-object img-circle"
                            />
                          </a>
                          <div className="media-body valign-middle">
                            <b className="text-inverse">Gabrielle Bunton</b>
                          </div>
                          <div className="media-body valign-middle text-right overflow-visible">
                            <div className="btn-group dropdown">
                              <a
                                href="javascript:;"
                                className="btn btn-default"
                              >
                                Friends
                              </a>
                              <a
                                href="javascript:;"
                                data-toggle="dropdown"
                                className="btn btn-default dropdown-toggle"
                              ></a>
                              <ul className="dropdown-menu dropdown-menu-right">
                                <li>
                                  <a href="javascript:;">Action 1</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 2</a>
                                </li>
                                <li>
                                  <a href="javascript:;">Action 3</a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                  <a href="javascript:;">Action 4</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
