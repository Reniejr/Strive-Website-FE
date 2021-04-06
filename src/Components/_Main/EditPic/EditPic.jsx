import React from "react";

//STYLE IMPORTS
import "./EditPic.scss";

export default function EditPic({ info, functions }) {
  return (
    <div class="image-upload">
      <label for="profile">
        <img src={info.info.profile} alt="" />
        <div className="edit-icon">
          <i className="fas fa-pen"></i>
        </div>
      </label>
      <input
        className="profile-upload-img"
        id="profile"
        type="file"
        onChange={(e) =>
          functions.setInfo({
            ...info.info,
            profile: URL.createObjectURL(e.currentTarget.files[0]),
          })
        }
      />
      <button
        type="button"
        style={{ display: info.imgConfirm ? "" : "none" }}
        onClick={(e) => functions.photoConfirm(e)}
      >
        Confirm
      </button>
    </div>
  );
}
