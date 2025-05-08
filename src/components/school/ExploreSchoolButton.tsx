
import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import ButtonCustom from '@/components/ui/button-custom';
import SchoolInfoModal from './SchoolInfoModal';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';

const ExploreSchoolButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleOpenModal = () => {
    if (user) {
      setIsModalOpen(true);
    } else {
      toast("Please log in to explore school information.");
      navigate('/auth');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="relative">
        <ButtonCustom 
          variant="accent" 
          size="lg" 
          className="shadow-lg animate-bounce-slow relative z-10"
          leftIcon={<BookOpen className="h-5 w-5" />}
          onClick={handleOpenModal}
        >
          Explore School Info
        </ButtonCustom>
        <div className="absolute -bottom-2 -right-2 -left-2 -top-2 bg-pioneer-light-blue/20 rounded-lg animate-pulse"></div>
      </div>
      
      <SchoolInfoModal 
        open={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </>
  );
};

export default ExploreSchoolButton;
