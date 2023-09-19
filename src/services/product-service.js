export async function getProducts() {
  try {
    const response = await fetch('http://localhost:3000/products')
    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
    return []
  }
}

export async function addProduct(product) {
  await fetch('http://localhost:3000/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })
}

export async function updateProduct(product, data) {
  await fetch(`http://localhost:3000/products/${product.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: product.id,
      name: data.product,
      description: data.description
    })
  })
}

export async function deleteProduct(product) {
  await fetch(`http://localhost:3000/products/${product.id}`, {
    method: 'DELETE'
  })
}
