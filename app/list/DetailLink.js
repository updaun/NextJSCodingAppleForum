'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function DetailLink(){
    let router = useRouter()
    let a = usePathname()
    let b = useSearchParams()
    
    return (
        <button onClick={() => { router.back() }}>버튼</button>
    )
}