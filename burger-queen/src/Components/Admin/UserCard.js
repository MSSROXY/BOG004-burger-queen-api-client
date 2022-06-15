export const UserCard = ({user}) => {


return (
    <div key={user.id} className="user-card">
    <h5>Nombre : {user.name}</h5>
    <h5>Id : {user.id}</h5>
    <h5>Email : {user.email}</h5>
   <h5>Rol: {user.roles.admin === true ? "Administrador" : "Colaborador"}</h5>
   <div className="user-footer">
    <button className="btn-green">Editar</button>
    <button className="btn-red">Eliminar</button>
   </div>
  </div>

)
}