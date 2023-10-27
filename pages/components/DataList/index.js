// 'use client';

import { Loading } from "@/components/Loading";
import useSWR from "swr"


export const DataList = () => {
    const { data, error, isLoading } = useSWR('../api/user', (url) => fetch(url).then((r) => r.json()))

    if (error) return <div>failed to load</div>
    if (isLoading) return <Loading />
    return <div className="flex flex-col gap-y-2">
        {
            data.map((user) => (
                <div key={user.name} className="flex justify-between items-center py-2 border ">
                    <span>{'姓名：'}{user.name}</span>
                    <span>{'年龄：'}{user.age}</span>
                </div>
            ))
        }
    </div>
}