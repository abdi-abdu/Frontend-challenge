import CourseCard from '../components/CourseCard';
import SearchBar from '../components/SearchBar';
import { courses } from '../data/courses';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Our Courses
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Master new skills with expert-led courses designed for the modern learner. 
            Start your learning journey today with INFNOVA Academy.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SearchBar />
      </div>

      {/* Course Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <p className="text-gray-600">Showing 8 of 8 courses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
