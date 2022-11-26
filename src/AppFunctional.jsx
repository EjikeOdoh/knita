import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./UI/Card";

const AppFunctional = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://randomuser.me/api/?page=${page}&results=10`
        );

        setUsers([...users, ...response.data.results]);
        setErrorMsg("");
      } catch (error) {
        setErrorMsg("Error while loading data. Try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    loadUsers();
  }, [page]);

  const loadMore = () => {
    setPage((page) => page + 1);
    console.log(users);
  };

  return (
    <div className="main-section">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      {users.map((user, index) => {
        return <Card key={index} />;
      })}
      <div className="load-more">
        <button onClick={loadMore} className="btn-grad">
          {isLoading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default AppFunctional;
