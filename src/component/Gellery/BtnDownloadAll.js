import { useState } from 'react';
import Button from '../UI/Button';
import styles from './BtnDownloadAll.module.css';
import JSZip from 'jszip';

function BtnDownloadAll({ cards }) {
  const [isLoadingAll, setIsLoadingAll] = useState(false);
  async function downloadZip() {
    setIsLoadingAll(true);
    const zip = new JSZip();

    const extFromUrl = (u) => {
      try {
        const m = new URL(u).pathname.match(/\.(png|jpe?g|webp|gif|bmp|svg)$/i);
        return m ? m[0].toLowerCase() : '';
      } catch {
        return '';
      }
    };

    const extFromType = (type) => {
      if (type === 'image/jpeg') return '.jpg';
      if (type === 'image/png') return '.png';
      if (type === 'image/webp') return '.webp';
      if (type === 'image/gif') return '.gif';
      if (type === 'image/bmp') return '.bmp';
      if (type === 'image/svg+xml') return '.svg';
      return '.img';
    };

    let i = 0;
    const errors = [];

    for (const card of cards) {
      i += 1;
      try {
        const res = await fetch(card.url, {
          mode: 'cors',
          referrerPolicy: 'no-referrer',
          cache: 'no-store',
        });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const blob = await res.blob();

        let ext = extFromUrl(card.url);
        if (!ext) ext = extFromType(blob.type);

        const filename = `${String(i).padStart(2, '0')} ${
          card.title || `image`
        }${ext}`;
        zip.file(filename, blob);
      } catch (err) {
        console.error(`Не удалось загрузить: ${card.url}`, err);
        errors.push(card.url);
      }
    }

    try {
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(zipBlob);
      link.download = 'gallery.zip';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(link.href);
    } catch (e) {
      console.error('Ошибка генерации ZIP:', e);
      if (errors.length) {
        console.warn('Пропущены из-за ошибок:', errors);
      }
    } finally {
      setIsLoadingAll(false);
    }
  }

  return (
    <Button
      className={styles.btnDownloadAll}
      onClick={downloadZip}
      aria-label="Download all images as ZIP"
      title="Download all as ZIP"
      disabled={!cards.length}
      type="button"
    >
      {isLoadingAll ? (
        <span className={styles.spinner}></span>
      ) : (
        ' Download All (ZIP)'
      )}
    </Button>
  );
}

export default BtnDownloadAll;
