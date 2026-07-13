export default function Categories() {
    const categories = [
      "Medicines",
      "Personal Care",
      "Baby Care",
      "Healthcare Devices",
      "Nutrition",
      "First Aid",
    ];
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
  
          <h2 className="text-3xl font-bold text-center mb-10">
            Shop by Category
          </h2>
  
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition cursor-pointer"
              >
                <div className="text-5xl mb-3">💊</div>
  
                <h3 className="font-semibold">
                  {item}
                </h3>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }