import React, { useState } from "react";
import { uploadChapter } from "../../service/MovieServices";

export const AddChapter = () => {
  const [chapter, setChapter] = useState(null);

  const handleFileChange = (e) => {
    setChapter(e.target.files[0]);
  };

  const upload = () => {
    const formData = new FormData();
    formData.append('file', chapter);

    uploadChapter(formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
          <form>
            <input type="file" name="file" id="file" onChange={handleFileChange} />
            <button type="button" onClick={upload}>Upload</button>
          </form>
  );
};