import React, { useEffect } from "react";
import $ from "jquery";
import "datatables.net";

function TicketPerbaikanInventoriAssign({
  hardwareInventoriData,
  assignInventori,
  setFieldValue,
  inventoriPush,
}) {
  useEffect(async () => {
    $(".js-mailing-list").DataTable({
      responsive: true,
    });
  }, []);
  return (
    <div className="row clearfix">
      <div className="col-sm-12">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover js-mailing-list dataTable button-demo">
            <thead>
              <tr>
                <th>Nomor Asset</th>
                <th>Nomor Seri</th>
                <th>Merek</th>
                <th>Tipe</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {hardwareInventoriData.list[0] !== undefined
                ? hardwareInventoriData.list.map((i) => (
                    <tr key={i.id}>
                      <td>{i.no_asset}</td>
                      <td>{i.serial_number}</td>
                      <td>{i.merek}</td>
                      <td>{i.tipe}</td>

                      <td>
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => {
                            assignInventori(
                              {
                                hardwareInventoriId: i.id,
                              },
                              setFieldValue
                            );
                          }}
                        >
                          [+]
                        </button>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TicketPerbaikanInventoriAssign;
