
import React from 'react';
import VideoPlayer from '@/components/gallery/VideoPlayer';

const HeroImages = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="order-2 md:order-1">
        <VideoPlayer
          src="/lovable-uploads/da6c4256-9645-4187-9378-9036eb2bea01.png"
          videoSrc="/lovable-uploads/676cb646-fca3-4d6a-86ad-b4e909cb51bd.png"
          alt="Aperçu du pack de logos de football"
          className="rounded-xl shadow-2xl"
        />
      </div>
      <div className="order-1 md:order-2 space-y-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
          <img 
            src="/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png" 
            alt="Organisation des logos par pays" 
            className="w-full rounded-lg shadow-md"
            loading="lazy"
          />
          <p className="text-sm text-gray-600 text-center mt-3 font-medium">
            Organisation claire par pays et compétitions
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroImages;
