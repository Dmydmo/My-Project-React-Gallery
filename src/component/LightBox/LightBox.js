import styles from './LightBox.module.css';
function LightBox({ clooseLightBox, lightboxIndex, cards, changeIndex }) {
  const last = cards.length - 1;
  const flipNext = () => {
    lightboxIndex === last
      ? changeIndex((lightboxIndex = 0))
      : changeIndex(lightboxIndex + 1);
  };

  const flipPrev = () => {
    lightboxIndex <= 0
      ? changeIndex((lightboxIndex = last))
      : changeIndex(lightboxIndex - 1);
  };

  return (
    <div
      className={styles.lightbox}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <div className={styles.container}>
        <button
          onClick={flipPrev}
          className={`${styles.control} ${styles.lightbox__prev}`}
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          className={`${styles.control} ${styles.lightbox__close}`}
          onClick={clooseLightBox}
          aria-label="Close"
        >
          ✕
        </button>
        <img src={cards[lightboxIndex].url} alt=""></img>
        <button
          onClick={flipNext}
          className={`${styles.control} ${styles.lightbox__next}`}
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </div>
  );
}
export default LightBox;
