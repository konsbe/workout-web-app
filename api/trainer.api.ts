import { ITrainerData } from "../types/types";

export const createTrainer = async (trainerData:ITrainerData, route:string ) => {
  const response = await fetch(`http://localhost:24550/${route}`, {
    method: "POST",
    body: JSON.stringify({ ...trainerData }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};





  // const submitButton = async () => {
  //   const response = await createTrainer(trainerData,"write_trainer");
  //   const data = await response.json();
  //   if (response.status > 399) {
  //     let arr: any[] = [];
  //     await data.detail.map((item: TypeErrorItem) => arr.push(...item.loc));
  //     setErrorField([...arr]);
  //     console.log("Error data: ",data);
  //   } else {
  //     console.log("data: ",data);
  //     dispatch({ type: "AUTH", data: trainerData });
  //   }
  // };
