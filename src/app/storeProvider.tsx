'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import {store} from "@/redux/store/store";

export default function StoreProvider({ children}: {
    children: React.ReactNode
}) {
    return <Provider store={store}>{children}</Provider>
}