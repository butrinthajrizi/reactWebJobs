import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Employee } from "../Components/Employers/SingleEmployer";

export function EmployerDetails() {
  const [employer, setEmployer] = useState<null | Employee>(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/employers/${params.id}`)
      .then((r) => r.json())
      .then((employerFromDb) => setEmployer(employerFromDb));
  }, []);

  if (employer === null) return <p>Loading...</p>;

  return (
    <section className="employer-wrapper">
      <img src={employer.profilePic} alt={employer.name} />
      <div
        className="employer-wrapper__side"
      >
        <h1>Name: {employer.name}</h1>
        <h2>Role: {employer.workspace.role}</h2>
        <h3>Department: {employer.workspace.department}</h3>
        <p>Contract: {employer.workspace.contract}</p>

        <p>E-mail: {employer.email}</p>
        <p>Salary: {employer.salary} $</p>
        <p>Started date: {employer.updatedAt}</p>
        <p>Interview date: {employer.createdAt}</p>

        <p> Experience: { " "}
        {employer.jobs.positions
          ? employer.jobs.positions.map((job) => <span>{job}</span>)
          : ""}
        </p>

       
      </div>
    </section>
  );
}
