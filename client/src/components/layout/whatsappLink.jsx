import styles from './whatsappLink.module.css';
export function WhatsAppLink() {
    return (
        <div className={styles.whatsappFloating}>
          <a href="https://wa.me/message/UHMODGM64BMZI1" target="_blank" rel="noopener">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
          </a>
        </div>
    );
}