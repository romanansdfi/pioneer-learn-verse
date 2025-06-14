
import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import ButtonCustom from '@/components/ui/button-custom';
import SchoolInfoModal from './SchoolInfoModal';

const ExploreSchoolButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ButtonCustom 
        variant="accent" 
        size="lg" 
        className="shadow-lg animate-bounce-slow"
        leftIcon={<BookOpen />}
        onClick={handleOpenModal}
      >
        Explore School Info
      </ButtonCustom>
      
      <SchoolInfoModal 
        open={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </>
  );
};

export default ExploreSchoolButton;
