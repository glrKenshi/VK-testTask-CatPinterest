import { useMemo } from "react";
import { Container } from "../../components/Container/Container";
import styles from "./FavoritePage.module.scss";
import { useFavoritesStore } from "../../store/favoritesStore";
import { CatGrid } from "../../components/CatGrid/CatGrid";
import type { CatItem } from "../../shared/types/catItem";

export const FavoritePage = () => {
    const favoritesById = useFavoritesStore((state) => state.favoritesById);
    const favorites = useMemo(() => Object.values(favoritesById) as CatItem[], [favoritesById]);

    return (
        <Container>
            {favorites.length > 0 ? (
                <CatGrid data={favorites} />
            ) : (
                <p className={styles.empty}>Пока нет любимых котиков</p>
            )}
        </Container>
    );
};