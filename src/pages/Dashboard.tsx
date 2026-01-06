import { useQuery } from "@apollo/client/react";
import { GET_USERS } from "../graphql/operations/userQueries";
import { useMutation } from "@apollo/client/react";
import { CREATE_USER, DELETE_USER, UPDATE_USER } from "../graphql/operations/userMutations";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";




export default function Dashboard() {
  const { data, loading, error } = useQuery<any>(GET_USERS);
  const [editUser, setEditUser] = useState<any>(null);

  const navigate = useNavigate();

useEffect(() => {
  if (!localStorage.getItem("auth")) navigate("/");
}, []);



  const [deleteUser] = useMutation(DELETE_USER, {
    refetchQueries: [GET_USERS],
  });

  const [form, setForm] = useState({
    Name: "",
    email: "",
    phone: "",
  });

  const [createUser] = useMutation(CREATE_USER, {
    refetchQueries: [GET_USERS],
  });

  const [updateUser] = useMutation(UPDATE_USER, {
    refetchQueries: [GET_USERS],
  });





  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Dashboard</h2>
      <form
  onSubmit={(e) => {
  e.preventDefault();
  createUser({
    variables: {
      Name: form.Name,
      email: form.email,
      phone: Number(form.phone),
    },
  });
}}

>
  <input placeholder="Name" onChange={e=>setForm({...form, Name:e.target.value})}/>
  <input placeholder="Email" onChange={e=>setForm({...form, email:e.target.value})}/>
  <input placeholder="Phone" onChange={e=>setForm({...form, phone:e.target.value})}/>
  <button>Add User</button>
</form>

{editUser && (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      updateUser({
        variables: {
          documentId: editUser.documentId,
          Name: editUser.Name,
          email: editUser.email,
        },
      });
      setEditUser(null);
    }}
  >
    <input
      value={editUser.Name}
      onChange={(e) => setEditUser({ ...editUser, Name: e.target.value })}
    />
    <input
      value={editUser.email}
      onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
    />
    <button>Update</button>
  </form>
)}




      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Active</th>
          </tr>
        </thead>

        <tbody>
          {data.userDbs.map((u: any) => (
            <tr key={u.documentId}>
              <td>{u.Name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>
                <button onClick={() => deleteUser({ variables: { documentId: u.documentId } })}>
                  Delete
                </button>
              </td>
              <td>
                <button onClick={() => setEditUser(u)}>Edit</button>


              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
