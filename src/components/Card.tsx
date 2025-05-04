import styles from "./styles/Card.module.scss"

interface CardProps {
    title: string;
    description: string;
    imageSrc: string;
    color: string;
    gridArea: string;
}

export default function Card({title, description, imageSrc, color, gridArea}: CardProps) {
    return (
      <div className={styles.card} style={{ ['--card-color' as any]: color, gridArea }}>
        <span className={styles.title}>{title}</span>
        <p className={styles.description}>{description}</p>
        <div className={styles.iconContainer}>
            <img src={imageSrc} alt="icon" />
        </div>
      </div>
    );
  }
  