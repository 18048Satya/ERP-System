export const getOrder =  () => {
return fetch('https://dummyjson.com/carts/1').then(res => res.json())
}
export const getProduct =() =>{
    return fetch('https://dummyjson.com/products').then(res => res.json())
}
export const getUsers = ()  => {
    return fetch('https://dummyjson.com/users').then(res => res.json())
}
export const getComment = () => {
    return fetch('https://dummyjson.com/comments').then(res => res.json())
}