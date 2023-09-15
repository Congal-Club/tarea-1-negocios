import styles from './App.module.css'
import { useState, useEffect } from 'react'
import { ReactComponent as Delete } from './delete.svg'
import { ReactComponent as Edit} from './edit.svg'
export default function App () {
  const [title,setTitle] = useState('Agregar Producto')
  const [isAdding, setIsAdding] = useState(true)
  const [products, setProducts] = useState([])
  const [productEditing, setProductEditing] = useState(null)
  useEffect(() => {
    const controller = new AbortController()

    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products')
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchProducts()
    return () =>{
      controller.abort()
    }
  }, [])

  const handleSubmit = async (event) =>{
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)

    if (isAdding) {
      const productToAdd = {
        id: `00${products.length + 1}`,
        name: data.product,
        description: data.description
      }
      await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productToAdd)
      })
      setProducts((prevProducts) =>[...prevProducts, productToAdd])
    } else {
      await fetch(`http://localhost:3000/products/${productEditing.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: productEditing.id,
          name: data.product,
          description: data.description
        })
      })
      setProducts((prevProducts) => prevProducts.map(product =>{
        if (product.id === productEditing.id) {
          return {
            ...product,
            name: data.product,
            description: data.description
          }
        }
        return product
      }))
      setIsAdding(true)
      setProductEditing(null)
    }
    event.target.reset()
  }

  const handleEdit = (product) => {
    setIsAdding(false)
    setProductEditing(product)
  }
  const handleDelete = async (product) =>{
    await fetch(`http://localhost:3000/products/${product.id}`, {
      method: 'DELETE'
    })

    setProducts((prevProducts) => prevProducts.filter(
      p => p.id !== product.id
    ))
  }
  return (
    <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.container}>
            <section className={styles.formContainer}>
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
                                    <button onClick={() => handleEdit(product)} className={styles.iconButton}>
                                        <Edit className={styles.actionEditIcon}/>
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(product)} className={styles.iconButton}>
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
