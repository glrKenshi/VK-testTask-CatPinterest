import type { CatItem } from '../shared/types/catItem'

export const getCat = async (page: number): Promise<CatItem[]> => {
    const req = await fetch(`https://api.thecatapi.com/v1/images/search?limit=20&page=${page}`, {
        headers: {
            'x-api-key': 'live_xbVu4vS8yDMpiJ9YjNk1NlxQppTraASRqnEZSbMiq7qcsGlkp39RKnEWuzSWChuk'
        }
    })

    const data = await req.json()

    return data
}