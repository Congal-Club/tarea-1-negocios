import styles from './App.module.css'
import { useState } from 'react'
import { ReactComponent as Delete } from './delete.svg'
import { ReactComponent as Edit} from './edit.svg'
export default function App () {
  const [title,setTitle] = useState('Agregar Producto')
  const [isAdding, setIsAdding] = useState(true)
  const [products, setProducts] = useState([
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
                            <label className={styles.Label} htmlFor='product'>Producto</label>
                            <input className={styles.input} type='text' id='product' placeholder='Producto...'/>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.Label} htmlFor='description'>Descripción</label>
                            <textarea className={styles.input} id='description' placeholder='Descripción...'/>
                        </div>
                        <button className={styles.button}>
                            {isAdding ? 'Agregar' : 'Editar'}
                        </button>
                    </div>

                </form>
            </section>
            <section className={styles.tableContainer}>
                <h3>Productos</h3>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Editar</th>
                            <th>Borrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product =>(
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>
                                    <button className={styles.iconButton}>
                                        <Edit className={styles.actionEditIcon}/>
                                    </button>
                                </td>
                                <td>
                                    <button className={styles.iconButton}>
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
