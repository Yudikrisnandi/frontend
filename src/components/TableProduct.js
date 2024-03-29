import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteProduct } from '../api/product'

export default function TableProduct({
  data,
  setEditedData,
  openModal,
}){
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['products'] })
    }
  })

  function openEditForm(product){
    setEditedData(product)
    openModal()
  }

  return(
    <table className="w-full border">
      <thead className="bg-violet-500">
        <tr className="text-sm font-medium font-semibold">
          <td className="text-white p-4 w-20">No</td>
          <td className="text-white text-left">Name</td>
          <td className="text-white text-left">Category</td>
          <td className="text-white text-left">Price</td>
          <td className="text-white text-left">In Stock</td>
          <td className="text-white text-left">Action</td>
        </tr>
      </thead>
      <tbody>
        {data.map((product, index) => (
          <tr className={`${index % 2 === 0 ? "bg-slate-50" : "bg-slate-200" }`}>
            <td className="p-4">{index+1}</td>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.inStock ? "Yes" : "No"}</td>
            <td className="w-1/6">
              <button
                className="py-1 px-2 mr-2 font-semibold bg-green-400 rounded hover:bg-green-300 text-white"
                onClick={() => openEditForm(product)}
              >
                Edit
              </button>
              <button
                className="py-1 px-2 font-semibold bg-red-400 rounded hover:bg-red-300 text-white"
                onClick={() => mutation.mutate(product._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
