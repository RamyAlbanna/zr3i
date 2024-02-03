import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axiosHttp from "../../../core/interceptor";
import IUser from "../../../core/models/user.model";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import Table from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

export default function Admin() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    axiosHttp
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data));
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

  const table = (
    <div className="row mb-5">
      <div className="col-md-8">
        <h2>Users</h2>
        <Card>
          <Card.Body>
            <Table
              keyField="id"
              data={users}
              columns={columns}
              pagination={pagination}
            />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
  return table;
}
