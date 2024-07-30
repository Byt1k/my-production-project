type Mods = Record<string, boolean>

export const classNames = (...args: Array<string | Mods>): string => {
    const res: string[] = []

    args?.map(item => {
        if (typeof item === 'string') {
            res.push(item)
        } else {
            Object.entries(item)
                .filter(([, value]) => !!value)
                .map(([className]) => res.push(className))
        }
    })

    return res.join(' ')
}