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
    <div className="min-h-screen bg-gray-900 text-white p-10 flex justify-center">
      <div className="w-full max-w-6xl">
        <div style={{ padding: "20px" }}>
      <h2 className="text-2xl font-semibold mb-6 text-center">User Dashboard</h2>
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
    setForm({ Name: "", email: "", phone: "" });
  }}
  className="bg-gray-800 p-6 rounded-xl shadow-md flex gap-4 items-center"
>
  <input
    className="input bg-gray-700 text-white"
    placeholder="Name"
    value={form.Name}
    onChange={(e) => setForm({ ...form, Name: e.target.value })}
  />

  <input
    className="input bg-gray-700 text-white"
    placeholder="Email"
    value={form.email}
    onChange={(e) => setForm({ ...form, email: e.target.value })}
  />

  <input
    className="input bg-gray-700 text-white"
    placeholder="Phone"
    value={form.phone}
    onChange={(e) => setForm({ ...form, phone: e.target.value })}
  />

  <button className="btn px-10">Add User</button>
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




      <table className="w-full border-collapse mt-6 bg-gray-800 rounded-xl overflow-hidden">

        <thead>
          <tr>
            <th className="p-3 text-left bg-gray-700">Name</th>

           <th className="p-3 text-left bg-gray-700">Email</th>

            <th className="p-3 text-left bg-gray-700">Phone</th>
          </tr>
        </thead>

        <tbody>
          {data.userDbs.map((u: any) => (
            <tr key={u.documentId}>
              <td className="p-3 border-b border-gray-700">
{u.Name}</td>
              <td className="p-3 border-b border-gray-700">
{u.email}</td>
              <td className="p-3 border-b border-gray-700">
{u.phone}</td>
              <td className="p-3 border-b border-gray-700">

                <button className="btn mr-2" onClick={() => deleteUser({ variables: { documentId: u.documentId } })}>
                  Delete
                </button>
              </td>
              <td>
                <button className="btn" onClick={() => setEditUser(u)}>Edit</button>


              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
</div>
  )  
}
