const ActiveMenu = () => {
  let activeMenu = [];
  const pathname = window.location.pathname.toUpperCase().replace("/", "");

  if (pathname === `MAILINGLIST`) activeMenu["EMAIL"] = "toggled";
  if (pathname === `PUBLICEMAIL`) activeMenu["EMAIL"] = "toggled";
  if (pathname === `USERLIST`) activeMenu["EMAIL"] = "toggled";
  if (pathname === `MAILINGLISTMEMBER`) activeMenu["EMAIL"] = "toggled";
  if (pathname === `FAQ`) {
    activeMenu["MASTER"] = "toggled";
    activeMenu["PUBLIC"] = "toggled";
  }
  if (pathname === `TIPSANDTRICK`) {
    activeMenu["MASTER"] = "toggled";
    activeMenu["PUBLIC"] = "toggled";
  }
  if (pathname === `MEDIAANDDOWNLOAD`) {
    activeMenu["MASTER"] = "toggled";
    activeMenu["PUBLIC"] = "toggled";
  }
  if (pathname === `SUPPLIERVENDOR`) {
    activeMenu["MASTER"] = "toggled";
  }
  if (pathname === `SOFTWARE`) {
    activeMenu["MASTER"] = "toggled";
  }
  if (pathname === `FORM-PERMINTAAN`) {
    activeMenu["MASTER"] = "toggled";
  }
  if (pathname === `HARDWARE-SPEC`) {
    activeMenu["MASTER"] = "toggled";
    activeMenu["HARDWARE"] = "toggled";
  }
  if (pathname === `PERBAIKAN-HARDWARE`) {
    activeMenu["MASTER"] = "toggled";
    activeMenu["HARDWARE"] = "toggled";
  }
  return activeMenu;
};

export default ActiveMenu;
