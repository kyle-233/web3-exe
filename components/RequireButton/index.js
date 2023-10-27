import useSWR from "swr"

export const RequireButton = () => {

    const { data, error, isLoading } = useSWR('/api/user', () => { })

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return <div>hello {data}!</div>
    return (
        <button className="w-full py-4 flex justify-center">
            Require
        </button>
    )
}