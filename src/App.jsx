import styles from "./App.module.css";

import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("Agregar Producto");
  const [isAdding, setIsAdding] = useState(true);
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.container}>
        <section className={styles.formContainer}>
          <form className={styles.form}>
            <h3 className={styles.formTitle}>Informacion del Producto</h3>
            <div>
            <div>
              <label htmlFor="product">Producto</label>
              <input type="text" id="product" placeholder="Producto..." />
            </div>
            <div>
              <label htmlFor="description">Descripcion</label>
              <textarea id="description" placeholder="Descripcion..." />
            </div>

            <button>{isAdding ? "Agregar" : "Editar"}</button>
            </div>
          </form>
        </section>
        <section>
            <h3>Productos</h3>
        </section>
      </div>
    </main>
  );
}
