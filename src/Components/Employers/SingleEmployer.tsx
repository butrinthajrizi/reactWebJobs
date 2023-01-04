import { Link, useParams } from "react-router-dom";
import "./SingleEmployer.css";

export type Employee = {
  id: number;
  email: string;
  name: string;
  profilePic: string;
  salary: number;
  workspace: {
    department: string;
    icon: string;
    contract: string;
    role: string;
    verified: boolean;
  };
  createdAt: string;
  updatedAt: string;
  jobs: {
    jobsCount: number;
    positions: string[];
  };
};

type Props = {
  employer: Employee;
};

export function SingleEmployer({ employer }: Props) {
  const params = useParams();

  return (
    <li>
      <Link className="link" to={`/employers/${employer.id}`}>
        <div className="wrapper">
          <div className="employer-data">
            <img
              className="profile-pic"
              src={employer.profilePic}
              alt={employer.name}
            />
            <span>
              <h3>Name: {employer.name}</h3>
              <h4>E-mail: {employer.email}</h4>
            </span>
          </div>
          <img className="icon" src={employer.workspace.icon} alt="" />
          <div className="workspace">
            <p>Department: {employer.workspace.department}</p>
            <p>Role: {employer.workspace.role}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
