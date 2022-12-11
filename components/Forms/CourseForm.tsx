import { Avatar, Button, ButtonGroup, TextField, Input } from "@mui/material";
import React, { useState } from "react";
import { COURSEPOST } from "../../env";
import { TypeErrorItem } from "../../types/types";
import { uploadImage } from "./forms";
import styles from "./Forms.module.css";
import { CourseType } from "./types";

const CourseForm = ({
  toggleModal,
}: {
  toggleModal: () => void;
}): JSX.Element => {
  const [baseImage, setBaseImage] = useState("");
  const [errorField, setErrorField] = useState<any[]>([]);

  const [course, setCourse] = useState<CourseType>({
    name: "",
    trainerId: 1,
    description: "",
    duration: 1,
    price: 0,
    personal: true,
    image: "",
  });

  const handleSubmit = async () => {
    const response = await fetch(`http://${COURSEPOST}/courses/insertCourse`, {
      method: "POST",
      body: JSON.stringify({
        name: course.name,
        trainerId: course.trainerId,
        description: course.description,
        duration: course.duration,
        price: course.price,
        personal: course.personal,
      }),
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
      },
    });
    const data = await response.json();
    if (response.status > 399) {
      let arr: any[] = [];
      data.detail.map((item: TypeErrorItem) => arr.push(...item.loc));
      setErrorField([...arr]);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.formCourseContainer}>
        <div className={styles.avatar}>
          <Avatar
            sx={{ bgcolor: "grey", height: "100%", width: "200px" }}
            variant="rounded"
            src={baseImage}
          />
        </div>
        <div>
          <form className={styles.addForm} onSubmit={handleSubmit}>
            <div className={styles.formControl}>
              {/* <label className={styles.formLabel}>Name: </label> */}
              <TextField
                id="outlined-basic"
                value={course.name}
                onChange={(e) => setCourse({ ...course, name: e.target.value })}
                label="name.."
                variant="outlined"
              />
            </div>
            <div className={styles.formControl}>
              {/* <label className={styles.formLabel}>Image: </label> */}
              <Input
                error={errorField.join(" ").includes("image") ? true : false}
                id="standard-basic"
                type="file"
                // value={baseImage}
                onChange={(e) => {
                  uploadImage(e, setBaseImage);
                  setCourse({ ...course, image: baseImage });
                }}
                style={{ marginBottom: "1rem", width: "235px" }}
              />
            </div>
            <div className={styles.formControl}>
              {/* <label className={styles.formLabel}>Duration: </label> */}
              <TextField
                id="outlined-basic"
                value={course.duration}
                type="number"
                onChange={(e) =>
                  setCourse({ ...course, duration: e.target.value })
                }
                label="duration.."
                variant="outlined"
              />
            </div>
            <div className={styles.formControl}>
              {/* <label className={styles.formLabel}>Price: </label> */}
              <TextField
                id="outlined-basic"
                value={course.price}
                type="number"
                onChange={(e) =>
                  setCourse({ ...course, price: e.target.value })
                }
                label="Price in $.."
                variant="outlined"
              />
            </div>
            <div className={styles.formControl}>
              {/* <label className={styles.formLabel} style={{ alignSelf: "flex-start", marginTop: "8px" }}>
                Description:{" "}
              </label> */}
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
          color="success"
          onClick={handleSubmit}>
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
