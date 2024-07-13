'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function DarkMode() {
    let router = useRouter()
    const [mode, setMode] = useState('')

    useEffect(() => {
        let 쿠키값 = ('; '+document.cookie).split(`; mode=`).pop().split(';')[0]
        if (쿠키값 == '') {
            document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400)
            setMode('light')
        } else {
            setMode(쿠키값)
        }
    }, [])

    const toggleMode = () => {
        let newMode = mode === 'light' ? 'dark' : 'light'
        document.cookie = `mode=${newMode}; max-age=` + (3600 * 24 * 400)
        setMode(newMode)
        router.refresh()
    }

    return (
        <span onClick={toggleMode}>
            {mode === 'light' ? "🌙" : '☀️'}
        </span>
    )
}