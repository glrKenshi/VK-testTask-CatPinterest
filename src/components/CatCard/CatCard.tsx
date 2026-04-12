import type { CatItem } from "../../shared/types/catItem";
import { useFavoritesStore } from "../../store/favoritesStore";
import { cn } from "../../shared/lib/cn";
import favoriteBorderUrl from "../../assets/favorite_border.svg";
import favoriteUrl from "../../assets/favorite.svg";
import styles from "./CatCard.module.scss";

interface CatCardProps {
    item: CatItem;
}

export const CatCard = ({ item }: CatCardProps) => {
    const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
    const isFavorite = useFavoritesStore((state) => !!state.favoritesById[item.id]);

    return (
        <li className={cn(styles.item, isFavorite && styles.liked)}>
            <img
                src={item.url}
                className={styles.img}
                alt="Котик"
                loading="lazy"
            />
            <button
                type="button"
                className={styles.favoriteBtn}
                onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(item);
                }}
                aria-pressed={isFavorite}
                aria-label={
                    isFavorite ? "Убрать из избранного" : "Добавить в избранное"
                }
            >
                <span className={styles.iconWrap}>
                    <img
                        src={favoriteBorderUrl}
                        alt=""
                        className={styles.outlineIcon}
                    />
                    <img
                        src={favoriteUrl}
                        alt=""
                        className={styles.filledIcon}
                    />
                </span>
            </button>
        </li>
    );
};
