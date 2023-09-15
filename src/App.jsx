import styles from './App.module.css'

import { useState } from 'react'
import { ReactComponent as Delete } from "./delete.svg" 
import { ReactComponent as Edit } from "./edit.svg" 

export default function App() {
  const [title, setTitle] = useState('Agregar Producto')
  const [isAdding, setIsAdding] = useState(true)
const[products,setProducts] = useState([
  {
    id:"001",
    name: "Chiva cola",
    description: "La mejor soda que existe"
  },
  {
    id:"002",
    name: "Cerveza Napoli",
    description: "La mejor cerveza que existe"
  }
])



  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.container}>
        <section className={styles.formContainer}>
          <form className={styles.form}>
            <h3 className={styles.formTitle}>Información del Producto</h3>

            <div className={styles.formContent}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor='product'>Producto</label>
                <input className={styles.input} type='text' id='product' placeholder='Producto...' />
              </div>

              <div  className={styles.formGroup}>
                <label className={styles.label} htmlFor='description'>Descripción</label>
                <textarea id='description' placeholder='Descripcion...' />
              </div>

              <button className={styles.buttom}>
                {isAdding ? 'Agregar' : 'Editar'}
              </button>
            </div>
          </form>
        </section>

        <section className={styles.tableContainer}>
          <h3>Productos</h3>

          <table className={styles.table}>
            <thead>I
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
                    <button className={styles.button}>
                    <Edit className={styles.actionEditIcon}/>
                    </button>
                  </td>
                  <td>
                    <button className={styles.button}>
                    <Delete className={styles.actionDeleteIcon}/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </section>
      </div>
    </main>
  )
}
