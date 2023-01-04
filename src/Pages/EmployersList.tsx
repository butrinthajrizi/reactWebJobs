import { useEffect, useState } from "react";
import { Employee, SingleEmployer} from "../Components/Employers/SingleEmployer";

export function EmployersList() {
  const [employers, setEmployers] = useState<Employee[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/employers")
      .then((r) => r.json())
      .then((employersFromDb) => setEmployers(employersFromDb));
  }, []);


  const filteredEmployers = employers.filter((employer) =>
  employer.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div>
     <form>
      <input
        className="search-employer"
        type="text"
        placeholder="Search by name"
        onChange={(filteredEmployers) => {
          setSearch(filteredEmployers.target.value);
        }}
      />
    </form>
      <ul>
        {filteredEmployers.map((employer) => (
          <SingleEmployer key={employer.id} employer={employer} />
        ))}
      </ul>
    </div>
  );
}
