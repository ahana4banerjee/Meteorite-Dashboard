export function getUsers() {
  return JSON.parse(localStorage.getItem("users") || "[]");
}

export function saveUser(user:any) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

export function validateUser(email:string, password:string) {
  const users = getUsers();
  return users.find((u:any) => u.email === email && u.password === password);
}
