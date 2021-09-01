import React, { Suspense, useMemo, useEffect } from 'react'

import { actions, useAppDispatch, useAppSelector } from '../model'
import { modules } from '../docs'
import docsData from '../docs.generated.json'

interface PageRange {
  start: number
  end: number
  title: string
}

const Page = () => {
  const dispatch = useAppDispatch()
  const routeSource = useAppSelector(state => state.routes.route)
  const splitedRouteArray = routeSource.target.split('.')
  const topRoute = splitedRouteArray[0]
  const Content = useMemo(() => {
    return modules[topRoute].default as React.ComponentType<any>
  }, [topRoute])
  const currentPageNavItems = docsData.nav.find(
    item => item.route === topRoute
  )!.children

  useEffect(() => {
    if (routeSource.from === 'click' || routeSource.from === 'load') {
      const headings = document.querySelectorAll(
        `.site-main-content > h${splitedRouteArray.length}`
      )
      const el = Array.from(headings).find(heading =>
        routeSource.target.endsWith(
          currentPageNavItems.find(i => i.title === heading.textContent)!.route
        )
      )
      if (el) {
        el.scrollIntoView()
      }
    }
  }, [routeSource])

  useEffect(() => {
    const headings2 = document.querySelectorAll(`.site-main-content > h2`)
    const headings3 = document.querySelectorAll(`.site-main-content > h3`)
    const ranges: Array<PageRange> = []
    let currentRange: PageRange
    Array.from([...headings2, ...headings3])
      .sort(
        (a, b) => (a as HTMLElement).offsetTop - (b as HTMLElement).offsetTop
      )
      .forEach(el => {
        const start = ranges[ranges.length - 1]?.end ?? 0
        const end = (el as HTMLElement).offsetTop / document.body.scrollHeight

        ranges.push({
          start,
          end,
          title: el.textContent!,
        })
      })

    ranges[ranges.length - 1].end = 1

    function onScroll() {
      const currPercent = window.scrollY / document.body.scrollHeight

      const target = ranges.find(
        i => currPercent >= i.start && currPercent <= i.end
      )!

      if (!currentRange) {
        currentRange = target
        return
      }

      if (currentRange && target && target !== currentRange) {
        const route = currentPageNavItems?.find(
          i => i.title === target.title
        )?.route
        dispatch(
          actions.setRoute({
            target: [topRoute, route].join('.'),
            from: 'scroll',
          })
        )
        currentRange = target
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [topRoute])

  return (
    <main className="site-main-content flex-1 px-40px py-15px">
      <Suspense fallback="loading...">
        <Content />
      </Suspense>
    </main>
  )
}

export default Page
