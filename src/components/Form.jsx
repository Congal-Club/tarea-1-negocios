import styles from "./Form.module.css"

export default function Form({ handleSubmit, isAdding, productEditing}) {
  return (
        <form className={styles.form} onSubmit={handleSubmit}>
                    <h3 className={styles.formTitle}>Información del Producto</h3>
                    <div className={styles.formContent}>
                        <div className={styles.formGroup}>
                            <label className={styles.Label} htmlFor='product'>Producto</label>
                            <input
                              className={styles.input} 
                              type='text'
                              id='product'
                              name='product'
                              placeholder='Producto...'
                              defaultValue={isAdding ? '' : productEditing.name}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.Label} htmlFor='description'>Descripción</label>
                            <textarea
                              className={styles.input}
                              id='description'
                              name='description'
                              placeholder='Descripción...'
                              defaultValue={isAdding ? '' : productEditing.description}
                            />
                        </div>
                        <button className={styles.button}>
                            {isAdding ? 'Agregar' : 'Editar'}
                        </button>
                    </div>
                </form>
  )
}
