import { Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";
import styles from "./Forms.module.css";

const ExerciseForm = ({
  toggleModal,
}: {
  toggleModal: () => void;
}): JSX.Element => {
  const [exercise, setExercise] = useState({
    name: "",
    video: "",
    image: "",
    category: "",
    equipment: "",
  });

  const handleSubmit = () => {};

  return (
    <div>
      <form className={styles.addForm} onSubmit={handleSubmit}>
        <div className={styles.formControl}>
          <label>Name: </label>
          <input
            type="text"
            placeholder="exercise name.."
            value={exercise.name}
            onChange={(e) => setExercise({ ...exercise, name: e.target.value })}
          />
        </div>
        <div className={styles.formControl}>
          <label>Video: </label>
          <input
            type="text"
            placeholder="exercise video.."
            value={exercise.video}
            onChange={(e) =>
              setExercise({ ...exercise, video: e.target.value })
            }
          />
        </div>
        <div className={styles.formControl}>
          <label>Image: </label>
          <input
            type="text"
            placeholder="exercise image.."
            value={exercise.image}
            onChange={(e) =>
              setExercise({ ...exercise, image: e.target.value })
            }
          />
        </div>
        <div className={styles.formControl}>
          <label>Equipment: </label>
          <input
            type="text"
            placeholder="available equipment.."
            value={exercise.equipment}
            onChange={(e) =>
              setExercise({ ...exercise, equipment: e.target.value })
            }
          />
        </div>
        <div className={styles.formControl}>
          <label>Image: </label>
          <input
            type="text"
            placeholder="exercise category.."
            value={exercise.category}
            onChange={(e) =>
              setExercise({ ...exercise, category: e.target.value })
            }
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

export default ExerciseForm;
