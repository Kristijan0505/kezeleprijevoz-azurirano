import React, { useEffect, useRef } from 'react';
import { X, Clock, MapPin, Euro, Check, X as XIcon, Calendar, Bus, Shield, Phone } from 'lucide-react';

interface TripDetailsModalProps {
  title: string;
  imageUrl: string;
  description: string;
  detailedDescription?: string;
  duration?: string;
  price?: string;
  includes?: string[];
  excludes?: string[];
  startLocation?: string;
  endLocation?: string;
  onClose: () => void;
}

const TripDetailsModal: React.FC<TripDetailsModalProps> = ({
  title,
  imageUrl,
  description,
  detailedDescription,
  duration,
  price,
  includes,
  excludes,
  startLocation,
  endLocation,
  onClose
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Handle escape key press
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscapeKey);
    
    // Handle outside click
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);
  
  // Default values for missing data
  const defaultDescription = "Detaljan opis putovanja trenutno nije dostupan. Za više informacija o ovom putovanju, molimo kontaktirajte našu agenciju telefonom ili e-mailom.";
  const defaultDuration = "Kontaktirajte nas za točno trajanje";
  const defaultPrice = "Kontaktirajte nas za cijenu";
  const defaultIncludes = [
    "Autobusni prijevoz turističkim autobusom",
    "Stručno vodstvo tijekom putovanja",
    "Osiguranje putnika i organizacije putovanja",
    "Sve razglede prema programu"
  ];
  const defaultExcludes = [
    "Dodatne fakultativne sadržaje",
    "Osobne troškove",
    "Ulaznice za objekte koji se posjećuju",
    "Putno osiguranje"
  ];
  
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div 
        ref={modalRef}
        className="bg-background-white rounded-xl shadow-2xl w-full max-w-4xl animate-[zoomIn_0.3s_ease-out] relative max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header with image */}
        <div className="relative h-56 md:h-72 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
          
          <div className="absolute bottom-0 left-0 p-6">
            <h2 
              id="modal-title" 
              className="text-2xl md:text-3xl font-bold text-background-white"
            >
              {title}
            </h2>
          </div>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-primary-red text-background-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-primary-red/90 transition-all duration-300"
            aria-label="Zatvori detalje"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Key details section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 bg-light-gray p-4 rounded-lg">
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-secondary-gold mr-2 flex-shrink-0" />
              <div>
                <span className="text-sm text-neutral-gray">Trajanje:</span>
                <p className="text-primary-red font-medium">{duration || defaultDuration}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Euro className="w-5 h-5 text-secondary-gold mr-2 flex-shrink-0" />
              <div>
                <span className="text-sm text-neutral-gray">Cijena:</span>
                <p className="text-primary-red font-medium">{price || defaultPrice}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-secondary-gold mr-2 flex-shrink-0" />
              <div>
                <span className="text-sm text-neutral-gray">Polazak:</span>
                <p className="text-primary-red font-medium">{startLocation || "Čazma (Zagreb, Bjelovar)"}</p>
              </div>
            </div>
          </div>
          
          {/* Main description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-primary-red mb-4 flex items-center">
              <Calendar className="w-5 h-5 text-secondary-gold mr-2" />
              Opis Putovanja
            </h3>
            
            <div className="bg-light-gray/50 p-4 rounded-lg">
              <p className="text-neutral-gray mb-4">{description}</p>
              <div className="space-y-2 text-neutral-gray">
                {detailedDescription ? (
                  <p>{detailedDescription}</p>
                ) : (
                  <p>{defaultDescription}</p>
                )}
              </div>
            </div>
          </div>
          
          {/* What's included and what's not sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-primary-red mb-3 flex items-center">
                <Check className="w-5 h-5 text-secondary-gold mr-2" />
                Cijena Uključuje
              </h3>
              
              <ul className="space-y-2">
                {(includes || defaultIncludes).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-secondary-gold mr-2 mt-1">✓</span>
                    <span className="text-neutral-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-primary-red mb-3 flex items-center">
                <XIcon className="w-5 h-5 text-secondary-gold mr-2" />
                Cijena Ne Uključuje
              </h3>
              
              <ul className="space-y-2">
                {(excludes || defaultExcludes).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary-red mr-2 mt-1">✗</span>
                    <span className="text-neutral-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Additional information */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-primary-red mb-3 flex items-center">
              <Bus className="w-5 h-5 text-secondary-gold mr-2" />
              Informacije o Prijevozu
            </h3>
            
            <div className="bg-light-gray/50 p-4 rounded-lg">
              <p className="text-neutral-gray">
                Putovanje se odvija modernim turističkim autobusom visoke turističke klase, 
                opremljenim klima uređajem, udobnim sjedalima, televizijom i ostalim pogodnostima 
                za ugodno putovanje.
              </p>
            </div>
          </div>
          
          {/* Insurance notice */}
          <div className="bg-light-gray/80 p-4 rounded-lg flex items-start mb-8">
            <Shield className="w-5 h-5 text-secondary-gold mr-2 flex-shrink-0 mt-1" />
            <p className="text-sm text-neutral-gray">
              Preporučamo uplatu putnog osiguranja te osiguranja od otkaza putovanja. 
              Kezele prijevoz i turistička agencija posjeduje policu osiguranja jamčevine 
              i osiguranja od odgovornosti kod Adriatic osiguranja d.d.
            </p>
          </div>
          
          {/* Call to action button */}
          <div className="flex justify-center mt-6">
            <a 
              href="tel:+385976232530"
              className="bg-primary-red text-background-white px-8 py-4 rounded-full font-bold text-lg hover:bg-background-white hover:text-primary-red hover:scale-105 transition-all duration-300 shadow-md border border-primary-red flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Rezerviraj Odmah</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetailsModal;