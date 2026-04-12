import { useEffect } from "react"
import { useInfiniteQuery } from "@tanstack/react-query"
import { getCat } from "../../service/catApi"
import { CatGrid } from "../../components/CatGrid/CatGrid"
import { useIntersectionObserver } from "../../shared/lib/useIntersectionObserver"
import styles from "./HomePage.module.scss"

const CATS_FEED_QUERY_KEY = ["cats", "feed"] as const

export const HomePage = () => {
    const { elementRef, isIntersecting } = useIntersectionObserver()

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isPending,
        isError,
        error,
    } = useInfiniteQuery({
        queryKey: CATS_FEED_QUERY_KEY,
        queryFn: ({ pageParam }) => getCat(pageParam),
        initialPageParam: 0,
        getNextPageParam: (lastPage, _pages, lastPageParam) => {
            if (lastPage.length < 20) return undefined
            return lastPageParam + 1
        },
        staleTime: Infinity,
    })

    const items = data?.pages.flatMap((page) => page) ?? []

    useEffect(() => {
        if (!isIntersecting || !hasNextPage || isFetchingNextPage) return
        void fetchNextPage()
    }, [isIntersecting, hasNextPage, isFetchingNextPage, fetchNextPage])

    if (isError) {
        return (
            <p role="alert">
                {error instanceof Error ? error.message : "Не удалось загрузить котиков"}
            </p>
        )
    }

    if (isPending) {
        return (
            <div className={styles.initialLoader} role="status" aria-live="polite">
                Загружаем котиков…
            </div>
        )
    }

    return (
        <>
            <CatGrid data={items} />

            {items.length > 0 && (
                <div className={styles.loader} ref={elementRef}>
                    ... загружаем котиков ...
                </div>
            )}
        </>
    )
}
