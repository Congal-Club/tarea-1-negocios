import styles from "./App.module.css";

import { useState, useEffect} from "react";
import Form from "./components/Form";
import TableOfProducts from "./components/TableOfProducts";
import { addProduct, deleteProduct, getProducts, updateProduct } from "./services/product-service";
import { generateId } from "./utiles/id";


export default function App() {
  const [title, setTitle] = useState("Agregar Producto");
  const [isAdding, setIsAdding] = useState(true);
  const [products,setProducts] = useState([]); 
  const [productEditing,setProductEditing] = useState(null); 

  useEffect(()=>{
    const controller = new AbortController()
    
    const fetchProducts = async ()=>{
      const data = await getProducts(); 
      setProducts(data); 
    }

    fetchProducts();

    return()=>{
      controller.abort(); 
    }
  },[]);

  const handleSubmit = async (event) =>{
    event.preventDefault(); 

    const formData = new FormData(event.target); 
    const data = Object.fromEntries(formData); 

    if(isAdding){
      const productToAdd = {
        id: generateId(6),
        name: data.product,
        description: data.description
      }
     await addProduct(productToAdd); 

      setProducts((prevProducts)=>[...prevProducts,productToAdd]);
    }else{
      await updateProduct(productEditing,data)

    setProducts((prevProducts)=>prevProducts.map(product=>{
      if(product.id===productEditing.id){
        return{
          ...product, 
          name: data.product, 
          description: data.description
        }
      }


      return product;
    }));
    setIsAdding(true); 
    setProductEditing(null);
    setTitle("Agregar Producto"); 
  }
    event.target.reset(); 
  }

  const handleEdit = (product)=>{
    setIsAdding(false); 
    setProductEditing(product);
    setTitle("Editar Producto");
  }

  const handleDelete = async (product)=>{
    await deleteProduct(product)

    setProducts((prevProducts)=>prevProducts.filter(
      p => p.id !== product.id
    ))
    
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.container}>
        <section className={styles.formContainer}>
          <Form 
            handleSubmit={handleSubmit}
            isAdding={isAdding}
            productEditing={productEditing} 
          />
        </section>

        <section className={styles.tableContainer}>
          <h3>Productos</h3>
          <TableOfProducts 
            products={products}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </section>
      </div>
    </main>
  );
}
