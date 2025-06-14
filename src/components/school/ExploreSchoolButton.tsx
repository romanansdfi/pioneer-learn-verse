
import React from 'react';
import { BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ButtonCustom from '@/components/ui/button-custom';

const ExploreSchoolButton: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToSchoolInfo = () => {
    navigate('/school-info');
  };

  return (
    <ButtonCustom 
      variant="accent" 
      size="lg" 
      className="shadow-lg animate-bounce-slow"
      leftIcon={<BookOpen />}
      onClick={handleNavigateToSchoolInfo}
    >
      Explore School Info
    </ButtonCustom>
  );
};

export default ExploreSchoolButton;
