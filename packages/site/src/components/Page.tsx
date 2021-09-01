import React, { Suspense, useMemo, lazy, useEffect } from 'react'

import { useAppSelector } from '../model'
import { modules } from '../docs'

const Page = () => {
  const route = useAppSelector(state => state.routes.route)
  const topRoute = route.split('.')[0]
  const Content = useMemo(() => {
    return lazy(
      modules[topRoute] as () => Promise<{ default: React.ComponentType<any> }>
    )
  }, [topRoute])

  useEffect(() => {
    const splitedRouteArray = route.split('.')
    const lastRoute = splitedRouteArray[splitedRouteArray.length - 1]
    const headings = document.querySelectorAll(
      `.site-main-content > h${splitedRouteArray.length}`
    )
    const el = Array.from(headings).find(
      heading =>
        heading.textContent?.toLowerCase().split(' ').join('-') === lastRoute
    )
    if (el) {
      el.scrollIntoView()
    }
  }, [route])

  return (
    <main className="site-main-content flex-1 px-40px py-15px">
      <Suspense fallback="loading...">
        <Content />
      </Suspense>
    </main>
  )
}

export default Page
