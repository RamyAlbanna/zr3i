import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

export default function DesignElements() {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Check
            type="checkbox"
            id={`default-checkbox-1`}
            label={`check me `}
          />

          <Form.Check
            type="checkbox"
            id={`default-checkbox-2`}
            label={`and check me`}
          />

          <Form.Check
            type="checkbox"
            id={`default-checkbox-3`}
            label={`and check me`}
          />
        </Form.Group>

        {/* RADIO BTN NOT WORK START */}

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Check
            type={"radio"}
            id={`default-radio-1`}
            label={`check me `}
          />

          <Form.Check
            type={"radio"}
            id={`default-radio-2`}
            label={`OR check me`}
          />

          <Form.Check
            type={"radio"}
            id={`default-radio-3`}
            label={`OR check me`}
          />
        </Form.Group>

        {/* RADIO BTN NOT WORK END z */}

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Check
            type="switch"
            id={`default-switch-1`}
            label={`i am just switch`}
          />
        </Form.Group>
      </Form>
      <hr />
      <p>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit{" "}
        <a href="#" className="color-primary">
          {" "}
          read more{" "}
        </a>{" "}
      </p>
      <hr />
      <div className="d-flex align-items-center gap-2">
        <i className="fa fa-home"></i>

        <i className="fa fa-home fa-sm"></i>

        <i className="fa fa-home fa-lg"></i>

        <i className="fa fa-home fa-lg color-primary"></i>

        <a href="#" className="btn-action btn-primary">
          <i className="fa fa-pen"></i>
        </a>

        <a href="#" className="btn-action btn-secondary">
          <i className="fa fa-check"></i>
        </a>

        <a href="#" className="btn-action btn-success">
          <i className="fa fa-check"></i>
        </a>

        <a href="#" className="btn-action btn-warning">
          <i className="fa fa-exclamation"></i>
        </a>

        <a href="#" className="btn-action btn-danger">
          <i className="fa fa-trash"></i>
        </a>
      </div>
      <hr />
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      <hr />
      <Button disabled variant="primary">
        Primary
      </Button>{" "}
      <Button disabled variant="secondary">
        Secondary
      </Button>{" "}
      <Button disabled variant="success">
        Success
      </Button>{" "}
      <Button disabled variant="warning">
        Warning
      </Button>{" "}
      <Button disabled variant="danger">
        Danger
      </Button>{" "}
      <Button disabled variant="info">
        Info
      </Button>{" "}
      <Button disabled variant="light">
        Light
      </Button>{" "}
      <Button disabled variant="dark">
        Dark
      </Button>
      <Button disabled variant="link">
        Link
      </Button>
      <hr />
      <Button variant="outline-primary">Primary</Button>{" "}
      <Button variant="outline-secondary">Secondary</Button>{" "}
      <Button variant="outline-success">Success</Button>{" "}
      <Button variant="outline-warning">Warning</Button>{" "}
      <Button variant="outline-danger">Danger</Button>{" "}
      <Button variant="outline-info">Info</Button>{" "}
      <Button variant="outline-light">Light</Button>{" "}
      <Button variant="outline-dark">Dark</Button>
      <hr />
      <Button disabled variant="outline-primary">
        Primary
      </Button>{" "}
      <Button disabled variant="outline-secondary">
        Secondary
      </Button>{" "}
      <Button disabled variant="outline-success">
        Success
      </Button>{" "}
      <Button disabled variant="outline-warning">
        Warning
      </Button>{" "}
      <Button disabled variant="outline-danger">
        Danger
      </Button>{" "}
      <Button disabled variant="outline-info">
        Info
      </Button>{" "}
      <Button disabled variant="outline-light">
        Light
      </Button>{" "}
      <Button disabled variant="outline-dark">
        Dark
      </Button>
      <hr />
      <div className="row mb-5">
        <div className="col-md-6">
          <Card>
            <Card.Body>
              <Table responsive striped className="border-rounded ">
                <thead>
                  <tr>
                    <th>#</th>
                    <th> Name</th>
                    <th> Name </th>
                    <th>Username</th>
                    <th>Username</th>
                    <th>Username</th>
                    <th>Username</th>
                    <th>Username</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6"></div>
        <div className="col-md-6"></div>
        <div className="col-md-6"></div>
      </div>
    </Container>
  );
}
