import instance from "./instance";

const {accessToken} = JSON.parse(localStorage.getItem('user')!);
const getAllCategory = () => {
    return instance.get('/categories')
}
// const getOneCaterogy = (id: string | undefined) => {
//     return instance.get(`/caterogy/${id}`)
// }
// const addCaterogy = (category: IProduct) => {
//     return instance.post('/caterogy',product)
// }
// const deleteCaterogy = (id: string | undefined) => {
//     return instance.delete(`/caterogy/${id}`, {
//         headers:{
//             Authorization: `Bearer ${accessToken}`
//         }
//     })
// }
// const updateCaterogy = (product: IProduct) => {
//     return instance.patch(`/Caterogy/${product._id}`, product)
// }

export {getAllCategory}