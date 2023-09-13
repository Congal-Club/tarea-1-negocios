import styles from './App.module.css'
import { useState } from 'react'

export default function App() {
    const [tittle, setTittle] = useState('Agregar Producto')
    const [isAdding, setIsAdding] = useState(true)
    return (
        <main className={styles.main}>
            <h1 className={styles.tittle}>{tittle}</h1>
            <div className={styles.container}>
            <section className={styles.formContainer}>
                <form className={styles.form}>
                    <h3 className={styles.formTitle}>Informacion del Producto</h3>

                    <div>

                    <div>
                        <label htmlFor='product'>Product</label>
                        <input type='text' id='product' placeholder='Producto...'/>
                    </div>

                    <div>
                        <label htmlFor=''> Descripcion </label>
                        <textarea placeholder='Descrpcion...'/>
                    </div>
                    <button>
                        {isAdding ? 'Agregar' : 'Editar'}
                    </button>
                    </div>
                </form>
            </section>

            <section>
                <h3>Productos</h3>
            </section>
            </div>
        </main>
    )
}