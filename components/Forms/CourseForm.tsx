import { Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";
import styles from "./Forms.module.css";

const CourseForm = ({
  toggleModal,
}: {
  toggleModal: () => void;
}): JSX.Element => {
  const [course, setCourse] = useState({
    name: "",
    trainerId: 1,
    description: "",
    duration: "",
    price: "",
    personal: true,
    image:""
  });

  const handleSubmit = () => {console.log("course: ",course)};

  return (
    <div>
      <form className={styles.addForm} onSubmit={handleSubmit}>
        <header className="headerAddDay">
          <h2>new course</h2>
        </header>
        <div className={styles.formControl}>
          <label>Name: </label>
          <input
            type="text"
            placeholder="name the day"
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
        </div>
        <div className={styles.formControl}>
          <label>Image: </label>
          <input
            type="text"
            placeholder="name the day"
            value={course.image}
            onChange={(e) => setCourse({ ...course, image: e.target.value })}
          />
        </div>
        <div className={styles.formControl}>
          <label>Description: </label>
          <input
            type="text"
            placeholder="name the day"
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </div>
        <div className={styles.formControl}>
          <label>Duration: </label>
          <input
            type="text"
            placeholder="name the day"
            value={course.duration}
            onChange={(e) => setCourse({ ...course, duration: e.target.value })}
          />
        </div>
        <div className={styles.formControl}>
          <label>Price: </label>
          <input
            type="text"
            placeholder="name the day"
            value={course.price}
            onChange={(e) => setCourse({ ...course, price: e.target.value })}
          />
        </div>
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
          style={{
            width: "100%",
            justifyContent: "center",
            marginTop: "1rem",
          }}>
          <Button
            type="submit"
            className="btnTask btn-block"
            style={{ width: "50%" }}
            color="success">
            Add
          </Button>
          <Button
            className="btnTask btn-block"
            onClick={toggleModal}
            color="error"
            style={{ width: "50%" }}>
            Cancel
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
};

export default CourseForm;
