import { QueryConfig } from "pg"
import { client } from "../../database"

export const softDeleteUserService = async (id: number): Promise<void> => {
    const queryString: string = `
        UPDATE
            users
        SET(active) = ROW(FALSE)
        WHERE 
            id = $1;
    `

    const queryConfig: QueryConfig = {
        text: queryString,
        values: [id]
    }

    await client.query(queryConfig)
}