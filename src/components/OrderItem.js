export default function OrderItem({
  product,
  increment,
  decrement,
}){
  return(
    <div className="flex w-full">
      <img src={product.image} alt={product.name} className="w-20 h-20 rounded mr-2"/>
      <div className="flex flex-col flex-1 space-y-4 justify-center">
        <div className="text-md font-semibold leading-4">{product.name}</div>
        <div className="flex w-full justify-between">
          <div className="flex">
            <button
              className="flex justify-center items-center bg-violet-600 rounded px-2 text-white"
              onClick={() => decrement(product._id)}
            >
              -
            </button>
            <span className="mx-2">{product.quantity}</span>
            <button
              className="flex justify-center items-center bg-violet-600 rounded px-2 text-white"
              onClick={() => increment(product._id)}
            >
              +
            </button>
          </div>
          <div>{product.price}</div>
        </div>
      </div>
    </div>
  )
}
