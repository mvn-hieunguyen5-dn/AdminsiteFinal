import React, { useState } from "react";
import Storge from "../../../core/FireStorage/FireBaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Progress } from "antd";
export default function UploadImgForm(props) {
  // const [file, getFile] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [progress, setProgress] = useState(0);

  // Create a reference to 'images/mountains.jpg'

  const updateToUpload = (file) => {
    const storageRef = ref(Storge, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            alert("Something in the way");
        }
      },
      (error) => {
        alert("Upload Fail");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImgUrl(downloadURL);
          props.setImg(downloadURL);
        });
      }
    );
  };

  const handleChange = (val) => {
    updateToUpload(val.target.files[0]);
  };
  return (
    <div className="w-full">
      <input
        type="file"
        id="img"
        name="img"
        accept="image/*"
        className=""
        onChange={handleChange}
      />
      {/* <button onClick={updateToUpload}></button> */}

      {progress === 100 ? (
        <img src={imgUrl} alt="" className="h-72 w-full object-cover" />
      ) : (
        <Progress
          strokeColor={{
            from: "#108ee9",
            to: "#87d068",
          }}
          percent={progress}
          status="active"
        />
      )}
    </div>
  );
}
