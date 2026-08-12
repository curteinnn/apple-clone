export default function ProductCard({
  image,
  name,
  imageClass = "h-20 object-contain",
}) {
  return (
    <div className="flex flex-col items-center hover:scale-105">
      <img src={image} alt={name} className={imageClass} />

      <h1 className="mt-3 text-sm font-light">{name}</h1>
    </div>
  );
}
