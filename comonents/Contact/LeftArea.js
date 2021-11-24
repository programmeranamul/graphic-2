import style from "../../styles/contact/contact.module.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";

function ContactLeftArea() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <p>
          To contact with us you have to just fill the form below to reach us
          and you will get a reply within a few minutes. Other ways to reach us
          are through our office address, email and phone number all available
          on this page.
        </p>
        <h4>Message us</h4>
        <Row>
          <Col md>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control
                type="text"
                placeholder="Your name *"
                {...register("name", { required: true })}
                className={style.my_input}
              />
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="text"
                placeholder="Email address *"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                className={style.my_input}
              />
              
              {errors.email?.type === "required" && (
                <span className="text-danger">This field is required </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="text-danger">Invalide email address </span>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md>
            <Form.Group className="mb-3" controlId="website">
              <Form.Control
                type="text"
                placeholder="Website (optional)"
                {...register("website")}
                className={style.my_input}
              />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3" controlId="phone">
              <Form.Control
                type="number"
                placeholder="Phone (optional)"
                {...register("phone")}
                className={style.my_input}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="subject">
          <Form.Control
            type="text"
            placeholder="Subject (optional)"
            {...register("subject")}
            className={style.my_input}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Message *"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="text-danger">This field is required</span>
          )}
        </Form.Group>

        <Button variant="primary" type="submit" className={style.send}>
          Send Now
        </Button>
      </Form>
    </div>
  );
}

export default ContactLeftArea;
