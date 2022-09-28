import React, { useEffect } from "react";
import $ from "jquery";
import "datatables.net";

function HardwareInventoriAssign({
  hardwareInventoryData,
  assignInventori,
  setFieldValue,
  assignDetailData,
}) {
  console.log("assignDetailData", assignDetailData);
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

                {hardwareInventoryData[assignDetailData.hardware_spec_id] !==
                undefined
                  ? hardwareInventoryData[
                      assignDetailData.hardware_spec_id
                    ].specField.map((i) => <th key={`th${i}`}>{i}</th>)
                  : null}

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {hardwareInventoryData[assignDetailData.hardware_spec_id] !==
              undefined
                ? hardwareInventoryData[
                    assignDetailData.hardware_spec_id
                  ].inventoris.map((i) => (
                    <tr key={i.id}>
                      <td>{i.no_asset}</td>
                      <td>{i.serial_number}</td>
                      <td>{i.merek}</td>
                      <td>{i.tipe}</td>
                      {hardwareInventoryData[
                        assignDetailData.hardware_spec_id
                      ] !== undefined
                        ? hardwareInventoryData[
                            assignDetailData.hardware_spec_id
                          ].specField.map((f) => (
                            <td key={`td${i.id}-${f}`}>{i.spesifikasi[f]}</td>
                          ))
                        : null}
                      <td>
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => {
                            assignInventori(
                              {
                                hardwareInventoriId: i.id,
                                ticketDetailId: assignDetailData.id,
                              },
                              setFieldValue
                            );
                          }}
                        >
                          Assign
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

export default HardwareInventoriAssign;
