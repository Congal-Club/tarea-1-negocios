import styles from './Form.module.css'

export default function Form({ handleSubmit, isAdding, productEditing}){
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
                    <h3 className={styles.formTitle}>Informacion del Producto</h3>

                    <div className={styles.formContent}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor='product'>Product</label>
                        <input 
                          className={styles.input} 
                          type='text' id='product' 
                          name='product' 
                          placeholder='Producto...'
                          defaultValue={isAdding ? '' : productEditing.name}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor=''> Descripcion </label>
                        <textarea  
                          className={styles.input} 
                          name='description' 
                          placeholder='Descrpcion...'
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

