import React from 'react'
import Home from './pages/Home'
import { useDispatch } from 'react-redux'
import { getBannerAction, getFeatured, getProduct } from './store/actions'
import { Route, Routes } from 'react-router-dom'
import Info from './pages/Info'

export default function App() {
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(true)
    const init = async () => {
        await dispatch(getBannerAction())
        await dispatch(getFeatured())
        await dispatch(getProduct(setLoading))
    }
    React.useEffect(() => {
        init()
    }, [loading])
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-info/:pid" element={<Info />} />
        </Routes>
    )
}
