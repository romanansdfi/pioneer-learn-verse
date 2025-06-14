
import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image?: string;
  initials?: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Bhola Yadav",
    role: "Full Scholar at TU",
    initials: "BY",
    rating: 5,
    text: "PioneerLearn completely transformed my career journey. The interactive learning environment made complex concepts easy to understand and practice simultaneously. It fundamentally changed my way of thinking and opened new possibilities I never imagined before."
  },
  {
    id: 2,
    name: "Asona Rouniyar",
    role: "Data Scientist",
    initials: "AR",
    rating: 5,
    text: "The courses are really good and always kept up-to-date with what's happening in the real world. The teachers know a lot and are always ready to help if we have any doubts."
  },
  {
    id: 3,
    name: "Aisha Williams",
    role: "UX Designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=60",
    rating: 4,
    text: "I've tried many platforms but PioneerLearn offers the best mix of theoretical knowledge and practical exercises. The project-based learning approach helped me build an impressive portfolio."
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-start mb-4">
        {testimonial.image ? (
          <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="h-full w-full object-cover"
            />
          </div>
        ) : testimonial.initials ? (
          <div className="h-12 w-12 rounded-full bg-pioneer-deep-blue text-white flex items-center justify-center mr-4 font-semibold text-sm">
            {testimonial.initials}
          </div>
        ) : null}
        <div>
          <h4 className="font-semibold text-pioneer-deep-blue">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`h-4 w-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700">"{testimonial.text}"</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-pioneer-deep-blue mb-2">What Our Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Join thousands of satisfied learners who have advanced their careers with PioneerLearn</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        <div className="mt-14 flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="text-xl font-bold text-gray-400">Company A</div>
          <div className="text-xl font-bold text-gray-400">Company B</div>
          <div className="text-xl font-bold text-gray-400">Company C</div>
          <div className="text-xl font-bold text-gray-400">Company D</div>
          <div className="text-xl font-bold text-gray-400">Company E</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
