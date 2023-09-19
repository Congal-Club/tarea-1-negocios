export function generateId (long) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let id = ''

  for (let i = 0; i < long; i++) {
    const indiceAleatorio = Math.floor(Math.random() * characters.length)
    id += characters.charAt(indiceAleatorio)
  }

  return id
}
