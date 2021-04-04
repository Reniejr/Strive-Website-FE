import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//REDUX IMPORTS
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "Store/user/actions";

//UTILITIES IMPORTS
import { convertText, getGithubRepos, doneHw } from "./utilities";
import { getProfile } from "Components/_Pages/2.LoginPage/utilities";

//BOOTSTRAP IMPORTS
import { Modal } from "react-bootstrap";

//STYLE IMPORTS
import "./Task.scss";

export default function Task({ state, functions }) {
  const userInfo = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const [repos, setRepos] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState({});
  const [listShow, setListShow] = useState(false);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [submitHw, setSubmitHw] = useState({
    id: state.hw._id,
    completed: false,
    githubRepo: state.hw.githubRepo ? state.hw.githubRepo : "",
  });
  const [repoBtn, setRepoBtn] = useState(null);

  useEffect(() => {
    (async () => {
      const repos = await getGithubRepos(userInfo.githubUsername);
      setRepos(repos);
      setFilteredRepos(repos);
    })();
  }, []);

  useEffect(() => {
    setSubmitHw({
      id: state.hw._id,
      completed: false,
      githubRepo: state.hw.githubRepo ? state.hw.githubRepo : "",
    });
  }, [state.hw]);

  const filterRepos = async (e) => {
    if (e.currentTarget.value === "") {
      setFilteredRepos(repos);
    } else {
      setFilteredRepos(
        repos.filter((repo) =>
          repo.name.toLowerCase().includes(e.currentTarget.value)
        )
      );
    }
  };

  const submitHwDone = async () => {
    let body = {
      completed: true,
      githubRepo: submitHw.githubRepo,
    };
    await doneHw(body, submitHw.id);
    const updateProfile = await getProfile(
      localStorage.getItem("access_token")
    );
    dispatch(selectUser(updateProfile));
    functions.handleClose(false);
  };

  const confirmRepo = (url) => {
    setSubmitHw({ ...submitHw, githubRepo: url });
    setRepoBtn(null);
    setListShow(false);
  };

  return (
    <Modal
      show={state.show}
      onHide={() => functions.handleClose(false)}
      className="task"
    >
      <Modal.Body>
        <button
          onClick={() => functions.handleClose(false)}
          className="closeButton"
        >
          x
        </button>
        <Modal
          show={listShow}
          onHide={() => setListShow(false)}
          className="github-links"
        >
          <Modal.Body>
            <input
              type="text"
              onChange={filterRepos}
              placeholder="Search For..."
            />
            <button onClick={() => setListShow(false)} className="closeButton">
              x
            </button>
            <ul>
              {filteredRepos.length > 0 ? (
                filteredRepos.map((r, rI) => {
                  return (
                    <li key={rI} onClick={() => setRepoBtn(rI)}>
                      {r.name}{" "}
                      <button
                        onClick={() => confirmRepo(r.html_url)}
                        style={{ display: repoBtn === rI ? "" : "none" }}
                        className="confirm-btn"
                      >
                        Confirm
                      </button>
                    </li>
                  );
                })
              ) : (
                <p>No results</p>
              )}
            </ul>
          </Modal.Body>
        </Modal>
        <code>{convertText(state.hw.task.content)}</code>
        <div className="controls">
          <button
            onClick={() => {
              setListShow(true);
            }}
          >
            Link Github Repository
          </button>

          <button onClick={() => submitHwDone()}>Submit</button>
        </div>
        <Link to={submitHw.githubUsername}>{submitHw.githubRepo}</Link>
      </Modal.Body>
    </Modal>
  );
}
