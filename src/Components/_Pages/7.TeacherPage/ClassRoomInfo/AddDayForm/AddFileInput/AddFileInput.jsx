import React from "react";

//STYLE IMPORTS
import "./AddFileInput.scss";

export default function AddFileInput({ info, functions }) {
  return (
    <div class="file-upload">
      <label for="homework">
        <i className="far fa-file-alt"></i>
        Task
      </label>
      <input
        className="profile-upload-img"
        id="homework"
        type="file"
        onChange={(e) =>
          functions.setInfo({
            ...info.info,
            homework: URL.createObjectURL(e.currentTarget.files[0]),
          })
        }
      />
      <button
        type="button"
        style={{ display: info.uploadConfirm ? "" : "none" }}
        onClick={(e) => functions.fileConfirm(e)}
      >
        Confirm
      </button>
    </div>
  );
}
