import { Avatar, Button, ButtonGroup, TextField } from "@mui/material";
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
    image: "",
  });

  const handleSubmit = () => {
    console.log("course: ", course);
  };

  return (
    <section className={styles.section}>
      <header className={styles.headerAddDay}>
        <h2>new course</h2>
      </header>
      <div className={styles.formCourseContainer}>
        <div className={styles.avatar}>
          <Avatar sx={{ bgcolor: "green", height: '100%', width: '100px' }} variant="rounded"></Avatar>
        </div>
        <div>
          <form className={styles.addForm} onSubmit={handleSubmit}>
            <div className={styles.formControl}>
              <label className={styles.formLabel}>Name: </label>
              <TextField
                id="outlined-basic"
                value={course.name}
                onChange={(e) => setCourse({ ...course, name: e.target.value })}
                label="name.."
                variant="outlined"
              />
            </div>
            <div className={styles.formControl}>
              <label className={styles.formLabel}>Image: </label>
              <TextField
                id="outlined-basic"
                value={course.image}
                onChange={(e) =>
                  setCourse({ ...course, image: e.target.value })
                }
                label="image.."
                variant="outlined"
              />
            </div>
            <div className={styles.formControl}>
              <label className={styles.formLabel}>Duration: </label>
              <TextField
                id="outlined-basic"
                value={course.duration}
                onChange={(e) =>
                  setCourse({ ...course, duration: e.target.value })
                }
                label="duration.."
                variant="outlined"
              />
            </div>
            <div className={styles.formControl}>
              <label className={styles.formLabel}>Price: </label>
              <TextField
                id="outlined-basic"
                value={course.price}
                onChange={(e) =>
                  setCourse({ ...course, price: e.target.value })
                }
                label="Price in $.."
                variant="outlined"
              />
            </div>
            <div className={styles.formControl}>
              <label className={styles.formLabel} style={{ alignSelf: "flex-start", marginTop: "8px" }}>
                Description:{" "}
              </label>
              <TextField
                id="standard-multiline-static"
                multiline
                rows={6}
                label="description.."
                value={course.description}
                onChange={(e) =>
                  setCourse({ ...course, description: e.target.value })
                }
                style={{ width: "235px" }}
                variant="outlined"
              />
            </div>
          </form>
        </div>
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
    </section>
  );
};

export default CourseForm;
