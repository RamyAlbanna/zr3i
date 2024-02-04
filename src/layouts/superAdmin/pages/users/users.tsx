import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axiosHttp from "../../../../core/interceptor";
import IUser from "../../../../core/models/user.model";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable, { SelectRowProps } from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosHttp
      .get("users")
      .then((response) => setUsers(response?.data))
      .catch(() => {});
  }, []);

  const columns = [
    { dataField: "id", text: "Id", sort: true },
    { dataField: "name", text: "Name", sort: true },
    { dataField: "email", text: "Email", sort: true },
    { dataField: "phone", text: "Phone", sort: true },
    { dataField: "website", text: "Website", sort: true },
  ];

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: "next",
    prePageText: "previous",
    alwaysShowAllBtns: true,
    hideSizePerPage: true,
  });

  const selectRow: SelectRowProps<any> = {
    mode: "checkbox",
    onSelect: (row: IUser, isSelected: boolean) => {
      setSelectedRows((prev) => {
        if (isSelected) {
          return [...prev.filter((item) => item !== row.id), row.id];
        } else {
          return [...prev.filter((item) => item !== row.id)];
        }
      });
    },
    onSelectAll(isSelect, rows: IUser[]) {
      isSelect
        ? setSelectedRows([...rows.map((row) => row.id)])
        : setSelectedRows([]);
    },
  };

  const table = (
    <div className="row mb-5">
      <div className="col-md-12">
        <div className="title-with-button mb-5">
          <h2>Users</h2>
          <button
            onClick={() => navigate("create-user")}
            className="btn btn-primary"
          >
            Add User
          </button>
        </div>
        <BootstrapTable
          bootstrap4
          keyField="id"
          striped
          data={users}
          columns={columns}
          selectRow={selectRow}
          pagination={pagination}
        />
        selected rows:{selectedRows}
      </div>
    </div>
  );
  return table;
}
