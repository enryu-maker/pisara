import React from 'react'
import Home from './pages/Home'
import { useDispatch } from 'react-redux'
import { getBannerAction,getFeatured, getProduct } from './store/actions'
export default function App() {
  const dispatch = useDispatch()
  const init = async () => {
    await dispatch(getBannerAction())
    await dispatch(getFeatured())
    await dispatch(getProduct())

  }
  React.useEffect(() => {
    init()
  }, []);
  return (
    <Home/>
  )
}
