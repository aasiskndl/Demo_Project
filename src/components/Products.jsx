

const products = [
  { name: 'Restrobyte', description: 'A restaurant management software.' },
  { name: 'J-Jewellery Software', description: 'Jewellery business management solution.' },
  { name: 'e-Tender Application', description: 'Manage and apply for e-tenders seamlessly.' },
  { name: 'Silicon POS', description: 'Point of Sale system for businesses.' },
  { name: 'Silicon ERP', description: 'Enterprise Resource Planning software.' },
];

const Products = () => {
  return (
    <div className="bg-secondary">
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-tint p-5 rounded-lg shadow-lg text-white">
            <h2 className="text-xl font-semibold mb-2 text-yellow-500">{product.name}</h2>
            <p className="text-sm">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Products;