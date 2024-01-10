import cn from 'classnames'
import { pathToRegexp } from 'path-to-regexp'
import { Link, useLocation } from 'react-router-dom'

import type { LinkProps } from 'react-router-dom'

export const useRouterLink = () => {
  const { pathname } = useLocation()

  return {
    Link: (props: LinkProps & { activeClsName?: string; inactiveClsName?: string }) => {
      const { to, activeClsName, inactiveClsName, className, ...rest } = props
      const target = (typeof to === 'object' ? to.pathname : to) || ''

      const isActive = pathToRegexp(target).test(pathname)

      return (
        <Link
          className={cn(
            'text-lg font-semibold',
            isActive ? activeClsName : inactiveClsName,
            className,
          )}
          to={to}
          {...rest}
        />
      )
    },
  } as const
}
