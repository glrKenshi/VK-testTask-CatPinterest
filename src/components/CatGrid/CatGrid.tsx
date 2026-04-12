import type { CatItem } from "../../shared/types/catItem";
import { Container } from "../Container/Container";
import { CatCard } from "../CatCard/CatCard";
import { cn } from "../../shared/lib/cn";
import styles from "./CatGrid.module.scss";

interface ICatGrid {
    className?: string;
    data: CatItem[];
}

export const CatGrid = ({ data, className }: ICatGrid) => {
    return (
        <Container>
            <ul className={cn(className, styles.list)}>
                {data.map((item) => (
                    <CatCard key={item.id} item={item} />
                ))}
            </ul>
        </Container>
    );
};
