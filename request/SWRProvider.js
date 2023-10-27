const { SWRConfig } = require("swr")

export const SWRRrovider = ({ children }) => {
    return (
        <SWRConfig
            value={{
                fetcher: (url, init) => fetch(url, init).then(res => res.json())
            }}
        >
            {children}
        </SWRConfig>
    )
}