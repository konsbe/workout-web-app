type Base64<imageType extends string> =
  `data:image/${imageType};base64${string}`;

export const uploadImage = async (
  e: React.ChangeEvent<HTMLInputElement> | any,
  setBaseImage: (arg: any) => void
) => {
  const file = e.target.files[0];
  const base64: Base64<"png" | "jpg" | "jpeg"> | any = await convertBase64(
    file
  );
  setBaseImage(base64);
};

export const convertBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
