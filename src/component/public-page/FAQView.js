import React from "react";
const data = [
  {
    id: 1,
    question: "cara install anti virus",
    answer:
      "Suspendisse non tortor iaculis, lacinia lectus vitae, porttitor orci. Nullam massa erat, sodales eu viverra in, tincidunt vehicula nisi. Maecenas eu sodales nulla. In diam urna, aliquam nec justo at, fringilla laoreet mi. Etiam sodales ante luctus, faucibus erat eget, sagittis velit. Sed eu turpis at nibh scelerisque lobortis in non lectus. Praesent ornare lacus nunc, nec mollis leo fermentum vitae. Nam ligula leo, pharetra eu accumsan eu, iaculis eu mi. Donec mollis placerat rhoncus. In pellentesque lobortis ligula, et pharetra tortor iaculis nec. Fusce augue arcu, malesuada non felis nec, porttitor tempor eros. Cras nunc tellus, luctus quis interdum in, pretium quis ligula. Vivamus aliquet lorem at risus imperdiet, sit amet suscipit ex faucibus. Donec vulputate turpis vel justo semper semper.",
  },
  {
    id: 2,
    question: "cara install ulang windows",
    answer:
      "Suspendisse non tortor iaculis, lacinia lectus vitae, porttitor orci. Nullam massa erat, sodales eu viverra in, tincidunt vehicula nisi. Maecenas eu sodales nulla. In diam urna, aliquam nec justo at, fringilla laoreet mi. Etiam sodales ante luctus, faucibus erat eget, sagittis velit. Sed eu turpis at nibh scelerisque lobortis in non lectus. Praesent ornare lacus nunc, nec mollis leo fermentum vitae. Nam ligula leo, pharetra eu accumsan eu, iaculis eu mi. Donec mollis placerat rhoncus. In pellentesque lobortis ligula, et pharetra tortor iaculis nec. Fusce augue arcu, malesuada non felis nec, porttitor tempor eros. Cras nunc tellus, luctus quis interdum in, pretium quis ligula. Vivamus aliquet lorem at risus imperdiet, sit amet suscipit ex faucibus. Donec vulputate turpis vel justo semper semper.",
  },
  {
    id: 3,
    question: "cara update antivirus",
    answer:
      "Suspendisse non tortor iaculis, lacinia lectus vitae, porttitor orci. Nullam massa erat, sodales eu viverra in, tincidunt vehicula nisi. Maecenas eu sodales nulla. In diam urna, aliquam nec justo at, fringilla laoreet mi. Etiam sodales ante luctus, faucibus erat eget, sagittis velit. Sed eu turpis at nibh scelerisque lobortis in non lectus. Praesent ornare lacus nunc, nec mollis leo fermentum vitae. Nam ligula leo, pharetra eu accumsan eu, iaculis eu mi. Donec mollis placerat rhoncus. In pellentesque lobortis ligula, et pharetra tortor iaculis nec. Fusce augue arcu, malesuada non felis nec, porttitor tempor eros. Cras nunc tellus, luctus quis interdum in, pretium quis ligula. Vivamus aliquet lorem at risus imperdiet, sit amet suscipit ex faucibus. Donec vulputate turpis vel justo semper semper.",
  },
];
function FAQView() {
  return (
    <React.Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>FAQ View</h2>
          </div>
          {data.map((item) => (
            <div key={item.id} className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="card">
                  <div className="header bg-red">
                    <h2>{item.question}</h2>
                    <ul className="header-dropdown m-r--5"></ul>
                  </div>
                  <div className="body">{item.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}

export default FAQView;
