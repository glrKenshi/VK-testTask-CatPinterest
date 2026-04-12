import { NavLink } from "react-router-dom";
import { cn } from "../../shared/lib/cn";
import { Container } from "../Container/Container";
import styles from "./TopBar.module.scss";

export const TopBar = () => {
    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.nav}>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            cn(styles.navItem, isActive && styles.navItemActive)
                        }
                    >
                        Все котики
                    </NavLink>
                    <NavLink
                        to="/favorite"
                        className={({ isActive }) =>
                            cn(styles.navItem, isActive && styles.navItemActive)
                        }
                    >
                        Любимые котики
                    </NavLink>
                </nav>
            </Container>
        </header>
    );
};