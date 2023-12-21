import React, { useEffect, useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [taskData, setTaskData] = useState([]);
  const [showData, setShowData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      status: e.target.status.value,
    };
    setTaskData((prevTaskData) => [...prevTaskData, data]);
    setShowData(taskData)
  };

  useEffect(()=> {
    console.log(show);
    if(show === "active"){
        const activeTask = taskData?.filter(DT => DT?.status.toLowerCase() === "active")
        setShowData(activeTask);
    }
    else if(show === "completed"){
        const completedTask = taskData?.filter(DT => DT?.status.toLowerCase() === "completed")
        setShowData(completedTask);
    }else{
        const activeTask = taskData?.filter(DT => DT?.status.toLowerCase() === "active")
        const completedTask = taskData?.filter(DT => DT?.status.toLowerCase() === "completed")
        const otherTask = taskData?.filter(DT => DT?.status.toLowerCase() !== "completed" && DT?.status.toLowerCase() !== "active")
        setShowData([ ...activeTask, ...completedTask, ...otherTask])
    }
  }, [show])

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                name="status"
                type="text"
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => setShow("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => setShow("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => setShow("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {showData?.map((TD, idx) => (
                <tr key={idx}>
                  <td>{TD?.name}</td>
                  <td>{TD?.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
