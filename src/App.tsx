import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import { EmployersList } from "./Pages/EmployersList";
import { Header } from "./Header/Header";
import { SignIn, User } from "./Header/NavigationList/SignIn";
import { SignUpForm } from "./Pages/SignUp";
import { EmployerDetails } from "./Pages/EmployerDetails";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import { useEffect, useState } from "react";
import { Job } from "./Components/Advertisement/JobsAdv";

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [user, setUser] = useState< User | null>(null);

  const navigate = useNavigate();

  function signIn(user: User) {
    localStorage.id = user.id;
    setUser(user);
  }

 
  useEffect(() => {
    const userId = localStorage.id;
    if (userId) {
      fetch(`http://localhost:4000/users/${userId}`)
        .then((r) => r.json())
        .then((userFromServer) => {
          setUser(userFromServer);
        });
    } else {
      navigate("/home");
    }
  }, [localStorage.id]);


  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route index element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={<Home jobs={jobs} setJobs={setJobs} />}
          />
          <Route path="/employers" element={<EmployersList />} />
          <Route path="/employers/:id" element={<EmployerDetails />} />
          <Route path="/signUp" element={<SignUpForm />} />
          <Route path="/signIn" element={<SignIn signIn={signIn} />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
