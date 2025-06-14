
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
