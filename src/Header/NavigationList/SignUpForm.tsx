import { useEffect, useState } from "react";
import Button from "../../Components/Buttons/Buton";
import "./SignUp.css";

type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

export function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const [users, setUsers] = useState<User[]>([]);

  function createNewUser() {
    let newUser = {
      name: name,
      username: username,
      password: password,
    };

    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((resp) => resp.json())

      .then((newUser) => {
        setUsers([...users, newUser]);
      });
  }

  const handleChange = (e: any) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleConfPasswordChange = (e: any) => {
    setConfPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    if (password != confPassword) {
      alert("password Not Match");
    }
    e.preventDefault();
  };

  return (
    <div className="signUp-form">
      <header className="signUp-form-header">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h2> Welcome to HR Solutions</h2>
          <h3> Please fill the form </h3>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />
          <label>Password:</label>
          <br />
          <input
            type="password"
            value={password}
            required
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />
          <br />
          <label>Confirm Password:</label>
          <br />
          <input
            type="password"
            value={confPassword}
            required
            onChange={(e) => {
              handleConfPasswordChange(e);
            }}
          />
          <br />
          <label>Username:</label>
          <br />
          <input
            type="text"
            value={username}
            required
            onChange={(e) => {
              handleAgeChange(e);
            }}
          />
          <br />
          <Button
            //@ts-ignore
            onClick={() => {
              createNewUser();
            }}
            variant="signIn"
          >
            Submit
          </Button>
        </form>
      </header>
    </div>
  );
}
