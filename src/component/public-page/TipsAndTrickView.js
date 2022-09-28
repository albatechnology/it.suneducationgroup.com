import React from "react";
const data = {
  id: 1,
  title: "cara merawat baterai",
  content:
    "Suspendisse non tortor iaculis, lacinia lectus vitae, porttitor orci. Nullam massa erat, sodales eu viverra in, tincidunt vehicula nisi. Maecenas eu sodales nulla. In diam urna, aliquam nec justo at, fringilla laoreet mi. Etiam sodales ante luctus, faucibus erat eget, sagittis velit. Sed eu turpis at nibh scelerisque lobortis in non lectus. Praesent ornare lacus nunc, nec mollis leo fermentum vitae. Nam ligula leo, pharetra eu accumsan eu, iaculis eu mi. Donec mollis placerat rhoncus. In pellentesque lobortis ligula, et pharetra tortor iaculis nec. Fusce augue arcu, malesuada non felis nec, porttitor tempor eros. Cras nunc tellus, luctus quis interdum in, pretium quis ligula. Vivamus aliquet lorem at risus imperdiet, sit amet suscipit ex faucibus. Donec vulputate turpis vel justo semper semper.",
  media_url:
    "https://img.inews.co.id/media/822/files/inews_new/2020/12/17/hemat_baterai2.png",
};
function TipsAndTrickView() {
  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>FAQ View</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header bg-red">
                  <h2>{data.title}</h2>
                  <ul className="header-dropdown m-r--5"></ul>
                </div>
                <div className="body">
                  <div>
                    <img src={data.media_url} />
                  </div>
                  <br />
                  <div>{data.content}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default TipsAndTrickView;
