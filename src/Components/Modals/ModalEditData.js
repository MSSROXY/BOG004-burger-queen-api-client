import { EditUser } from "./EditUser";
import { EditProduct } from "./EditProduct";

export const ModalEditData = ({ setShowModalEdit, editInfo, listData }) => {
  return (
    <div className="modal-background">
      <div className="container-modal">
        <h3>Editar información</h3>
        {editInfo.email !== undefined ? (
          <EditUser setShowModalEdit={setShowModalEdit} editInfo={editInfo} listData={listData}/>
        ) : (
          <EditProduct setShowModalEdit={setShowModalEdit} editInfo={editInfo} listData={listData}/>
        )}
      </div>
    </div>
  );
};
