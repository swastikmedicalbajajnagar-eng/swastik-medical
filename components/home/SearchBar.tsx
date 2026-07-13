export default function SearchBar() {
    return (
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white shadow-lg rounded-2xl p-6 border">
  
            <h2 className="text-2xl font-bold mb-4">
              Search Medicines
            </h2>
  
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Search medicine..."
                className="flex-1 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              />
  
              <button className="bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700">
                Search
              </button>
            </div>
  
          </div>
        </div>
      </section>
    );
  }