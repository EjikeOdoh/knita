import { useState } from "react";
import "./jobs.css";
import { Link } from "react-router-dom";
import { savedJobs } from "../data";
import { HeartBroken, SearchOffOutlined, Verified } from "@mui/icons-material";
import { Rating } from "@mui/material";

const Jobs = () => {
  const [showrj, setRJ] = useState(true);
  const [shows, setShows] = useState(null);
  const [color, setColor] = useState(false);

  return (
    <>
      <section className="search-post">
        <div className="jobsearch">
          <form className="jobform">
            <input />
            <button type="submit">
              <SearchOffOutlined />
            </button>
          </form>
        </div>

        <div className="jobpost">
          <Link className="button">POST A JOB</Link>
        </div>
      </section>

      <section className="job-section">
        <div className="toggle-btns">
          <div>
            <button
              href="#"
              onClick={() => {
                setShows(false);
                setRJ(true);
                console.log(shows);
              }}
            >
              recent jobs
            </button>
          </div>
          <div>
            <button
              href="#"
              onClick={() => {
                setShows(true);
                setRJ(false);
                console.log(shows);
              }}
            >
              saved jobs
            </button>
          </div>
        </div>

        <div className={`recent-jobs ${showrj ? "" : "hide"}`}>
          {savedJobs.map((job) => (
            <div className="job" key={job.id}>
              <div className="job-title">
                <h3>{job.title}</h3>
                <HeartBroken
                  id={job.id}
                  onClick={(e) => {
                    if ((e.target.id = job.id)) {
                      // setColor(!color);
                      console.log(job.id);
                      e.target.classList.add = ".color";
                    } else return;
                  }}
                />
              </div>
              <div className="job-desc">{job.desc}</div>
              <div className="rating">
                <div className="stars">
                  <div className="verify">
                    <Verified />
                    <span>Verified</span>
                  </div>
                  <div className="stars-rating">
                    <span>Review</span>
                    <Rating
                      size="small"
                      name="simple-controlled"
                      value={job.rating}
                      readOnly
                      // onChange={(event, newValue) => {
                      //   setValue(newValue);
                      // }}
                    />
                  </div>
                </div>
                <div className="apply">
                  <Link className="button">APPLY FOR JOB</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={`saved-jobs ${shows ? "show" : ""}`}>saved jobs</div>
      </section>
    </>
  );
};

export default Jobs;
