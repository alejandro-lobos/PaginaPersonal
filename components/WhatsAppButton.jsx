// components/WhatsAppButton.jsx
import styles from './WhatsAppButton.module.css';  // Asegúrate de crear este archivo CSS
import Image from 'next/image';

const WhatsAppButton = () => {
  return (
    <a href="https://wa.me/34639683333" target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
           <Image
            src="/images/wa.png"
            alt="Chat on WhatsApp"
            width={100}
            height={100}
          />
    </a>
  );
};

export default WhatsAppButton;
