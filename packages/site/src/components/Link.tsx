import React, { useCallback } from 'react'

import { actions, useAppDispatch } from '../model'

const Link: React.FC<{ href: string }> = ({ href, children }) => {
  const dispatch = useAppDispatch()
  const changeRoute = useCallback(() => {
    if (href.startsWith('#')) {
      dispatch(actions.setRoute({ target: href.slice(1), from: 'click' }))
    } else {
      dispatch(actions.setRoute({ target: href, from: 'click' }))
    }
  }, [href])

  return (
    <a href={href} onClick={changeRoute}>
      {children}
    </a>
  )
}

export default Link
