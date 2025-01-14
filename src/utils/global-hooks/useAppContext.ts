import { Context, useContext } from "react"

export const useAppContext = <T>(contextToCheck: Context<T | undefined>) => {
    const context = useContext(contextToCheck)
    if(context === undefined){
        throw new Error('context dos not exist');
    }

    return context
}