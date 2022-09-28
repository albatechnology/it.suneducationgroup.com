import { Route, useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import config from "./config.json";

import AuthenticationService from "./logic/AuthenticationService";
import DashBoard from "./component/public/DashBoard";
import FormPage from "./component/FormPage";
import TopMenu from "./component/public/TopMenu";
import SideMenu from "./component/public/SideMenu";
import TablePage from "./component/TablePage";
//import Authentication from "./component/public/Authentication";
import MailingList from "./component/email/MailingList";
import MailingListMember from "./component/email/MailingListMember";
import PublicEmail from "./component/email/PublicEmail";
import PublicEmailAdmin from "./component/email/PublicEmailAdmin";
import UserList from "./component/email/UserList";
import UserView from "./component/email/UserView";
import FAQ from "./component/public-page/FAQ";
import FAQPreview from "./component/public-page/FAQPreview";
import TipsAndTrick from "./component/public-page/TipsAndTrick";
import TipsAndTrickPreview from "./component/public-page/TipsAndTrickPreview";
import MediaAndDownload from "./component/public-page/MediaAndDownload";
import MediaAndDownloadPreview from "./component/public-page/MediaAndDownloadPreview";
import SupplierVendor from "./component/master/SupplierVendor";
import HardwareSpec from "./component/master/HardwareSpec";
import HardwareInventory from "./component/master/HardwareInventory";
import React, { useState, useEffect } from "react";
import ConnectionLost from "./component/public/ConnectionLost";
import HardwareInventoryAddStock from "./component/master/HardwareInventoryAddStock";
import Software from "./component/master/Software";
import FormPermintaan from "./component/master/FormPermintaan";
import TicketList from "./component/Ticket/TicketList";
import TicketAdd from "./component/Ticket/TicketAdd";
import Ticket from "./component/Ticket/Ticket";
import MyInventory from "./component/user/MyInventory";
import PerbaikanHardware from "./component/master/PerbaikanHardware";
import TestPDF from "./component/email/TestPDF";
import TestEmail from "./component/email/TestEmail";
import HardwareInventoryView from "./component/master/HardwareInventoryView";
import Logout from "./component/Logout";

function App() {
  //console.log(RouteConfig);
  const [dbConnection, setDbConnection] = useState(false);
  const [user, setUser] = useState({});
  const [authen, setAuthen] = useState(false);

  const { pathname, search } = useLocation();
  const history = useHistory();
  const userLogin = AuthenticationService.getLocalCredential();
  //console.log("location", location);
  useEffect(async () => {
    if (pathname === "/authentication") {
      const params = new URLSearchParams(search);
      const login_token = params.get("login_token");
      const userData = await AuthenticationService.authentication(login_token);
      console.log(userData);
      history.push("/");
    }
    /*
    const axiosConfig = AuthenticationService.getAxiosConfig();
    console.log("app");
    try {
      //const res = await axios.get(`${config.SERVER_URL}validate`, axiosConfig);
      //console.log("val res", res.data);
      const userLogin = AuthenticationService.getLocalCredential();
      if (userLogin.id !== "") {
        setUser(userLogin);
        //setAuthen(true);
        //AuthenticationService.setToken(res.data.token);
      }
    } catch (err) {
      console.log(err);
    }

    */
    /*

    if (pathname === "/authentication") {
      const params = new URLSearchParams(search);
      const login_token = params.get("login_token");
      const userData = await AuthenticationService.authentication(login_token);
      console.log(userData);
    }*/
    //login
    /*
      const axiosConfig = AuthenticationService.getAxiosConfig();
      console.log("config", axiosConfig);
      console.log("authen", authen);
      try {
        const res = await axios.get(
          `${config.SERVER_URL}validate`,
          axiosConfig
        );
        console.log(res.data);
        if (res.status == 200) {
          setDbConnection(res.data.DBConnection);
          setUser(res.data.user);
          setAuthen(true);
          //AuthenticationService.setToken(res.data.token);
        }
      } catch (err) {
        console.log(err);
      }*/
  }, []);
  return (
    <div className="App">
      {userLogin.id !== undefined ? (
        <React.Fragment>
          <TopMenu />
          <SideMenu user={userLogin} />

          <React.Fragment>
            <Route exact path="/" component={UserView} />
            {/* <Route exact path="/" component={DashBoard} /> */}
            <Route exact path="/testpdf" component={TestPDF} />
            <Route exact path="/testemail" component={TestEmail} />
            <Route exact path="/formpage" component={FormPage} />
            <Route exact path="/tablepage" component={TablePage} />
            <Route exact path="/mailinglist" component={MailingList} />
            <Route
              exact
              path="/mailinglistmember/:id"
              component={MailingListMember}
            />
            <Route exact path="/publicemail" component={PublicEmail} />
            <Route
              exact
              path="/publicemailadmin/:id"
              component={PublicEmailAdmin}
            />
            <Route exact path="/userlist" component={UserList} />
            <Route exact path="/userview/:id" component={UserView} />

            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/faq-preview" component={FAQPreview} />
            <Route exact path="/tipsandtrick" component={TipsAndTrick} />
            <Route
              exact
              path="/tipsandtrick-preview"
              component={TipsAndTrickPreview}
            />
            <Route
              exact
              path="/mediaanddownload"
              component={MediaAndDownload}
            />
            <Route
              exact
              path="/mediaanddownload-preview"
              component={MediaAndDownloadPreview}
            />
            <Route exact path="/suppliervendor" component={SupplierVendor} />

            <Route exact path="/hardware-spec" component={HardwareSpec} />
            <Route
              exact
              path="/hardware-inventori/:id"
              component={HardwareInventory}
            />
            <Route
              exact
              path="/hardware-inventori-view/:id"
              component={HardwareInventoryView}
            />
            <Route
              exact
              path="/hardware-inventori-add-stock/:id"
              component={HardwareInventoryAddStock}
            />
            <Route exact path="/software" component={Software} />
            <Route exact path="/form-permintaan" component={FormPermintaan} />
            <Route
              exact
              path="/perbaikan-hardware"
              component={PerbaikanHardware}
            />
            <Route exact path="/ticket-list">
              <Ticket user="ADMIN" />
            </Route>
            <Route exact path="/my-ticket-list">
              <Ticket user="USER" />
            </Route>
            <Route exact path="/my-staff-ticket-list">
              <Ticket user="SUPERVISOR" />
            </Route>

            <Route exact path="/ticket-open" component={TicketAdd} />
            <Route exact path="/my-inventory" component={MyInventory} />
            <Route exact path="/logout" component={Logout} />
          </React.Fragment>
        </React.Fragment>
      ) : (
        <ConnectionLost user={userLogin} />
      )}
    </div>
  );
}

export default App;
