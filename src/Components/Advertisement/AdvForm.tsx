import { useState } from "react";
import { Props } from "./JobsAdv";
import './AdvForm.css'
import Button from "../Buttons/Buton";



export function AdvForm({jobs, setJobs}: Props) {
    const [logo, setLogo] = useState("");
    const [position, setPosition] = useState("");
    const [role, setRole] = useState("");
    const [level, setLevel] = useState("");
    const [contract, setContract] = useState("");

function createNewJob () {
    let newJob = {
        logo: logo,
        position: position,
        role:  role,
        level: level,
        contract: contract,
    }


    fetch("http://localhost:4000/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
      })
        .then((res) => res.json())
        .then((newJob) => {
          setJobs([...jobs, newJob]);
        });

    }


const handleLogoChange = (e: any) => {
    setLogo(e.target.value);
  };

  const handlePositionChange = (e: any) => {
    setPosition(e.target.value);
  };

  const handleRoleChange =(e: any) => {
      setRole(e.target.value)
  }

  const handleLevelChange =(e: any) => {
    setLevel(e.target.value)
}

const handleContractChange =(e: any) => {
    setContract(e.target.value)
}

  return (
    <form
      className="jobs-form"
      onSubmit={(event) => {
        event.preventDefault();
        createNewJob()
        //@ts-ignore
        event.target.reset()
      }
    }
    >
        <input
        type="url"
        name="logo"
        placeholder="Department logo"
        required
            onChange={(e) => {
              handleLogoChange(e);
            }}
      />
      <input
        type="text"
        name="position"
        placeholder="Position"
        required
        onChange={(e) => {
          handlePositionChange(e);
        }}
      />
       <input
        type="text"
        name="role"
        placeholder="Role"
        required
        onChange={(e) => {
          handleRoleChange(e);
        }}
      />
      <input
        type="text"
        name="level"
        placeholder="Level"
        required
        onChange={(e) => {
          handleLevelChange(e);
        }}
      />
      <input
        type="text"
        name="contract"
        placeholder="Contract"
        required
        onChange={(e) => {
          handleContractChange(e);
        }}
      />
      
      <Button variant="logIn" >Add Job</Button>
    </form>
  );
}
