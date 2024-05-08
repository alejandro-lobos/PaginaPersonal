import Image from 'next/image';

const SocialMediaButtons = () => {
  return (
    <div className="fixed right-5 bottom-5 flex flex-row space-x-3 z-50">
      <a href="https://www.linkedin.com/in/alejandro-lobos-arenas/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 p-2 rounded-full">
        {/* Asumiendo que tienes iconos de LinkedIn, GitHub y WhatsApp en tu carpeta de imágenes */}
        <Image src="/images/linkedin.png" alt="LinkedIn" width={40} height={40} />
      </a>
      <a href="https://github.com/alejandro-lobos" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-900 transition-colors duration-300 p-2 rounded-full">
        <Image src="/images/github.png" alt="GitHub" width={40} height={40} />
      </a>
      <a href="https://wa.me/34639683333" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 transition-colors duration-300 p-2 rounded-full">
        <Image src="/images/whatsapp.png" alt="Chat on WhatsApp" width={40} height={40} />
      </a>
    </div>
  );
};

export default SocialMediaButtons;
