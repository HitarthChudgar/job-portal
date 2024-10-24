import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJob from "./pages/AddJob";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  // add job
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newJob),
    });
    console.log(res);
    return res; // Optionally return the response if needed
  };

  // delete job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    console.log(res);
    return res;
  };

  // update job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(job),
    });
    console.log(res);
    return res; // Optionally return the response if needed
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route path="/add-job" element={<AddJob addJobSubmit={addJob} />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
