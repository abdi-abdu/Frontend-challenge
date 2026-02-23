const SearchBar = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 -mt-8 relative z-10 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search courses, instructors..."
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
          <option>All Categories</option>
          <option>Web Development</option>
          <option>Data Science</option>
          <option>Design</option>
          <option>Cloud Computing</option>
          <option>Mobile Development</option>
          <option>Security</option>
          <option>Blockchain</option>
        </select>
        <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition font-semibold">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
