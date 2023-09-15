import styles from "./TableOfProducts.module.css"
import { ReactComponent as Delete } from "../delete.svg";
import { ReactComponent as Edit } from "../edit.svg";

export default function TableOfProducts({products,handleEdit,handleDelete}){
    return (
        <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Editar</th>
                <th>Borrar</th>  
              </tr>   
            </thead>

            <tbody>
              {products.map(product=>(
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>
                    <button className={styles.iconButton} onClick={()=>handleEdit(product)}>
                      <Edit className={styles.actionEditIcon}/>
                    </button>
                  </td>
                  <td>
                    <button className={styles.iconButton} onClick={()=>handleDelete(product)}>
                      <Delete className={styles.actionDeleteIcon}/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
    )
}