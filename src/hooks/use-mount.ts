import { useEffect } from 'react'

import type { AnyFunc } from '@/utils/types'

export const useMount = (fn?: AnyFunc) => useEffect(() => void fn?.(), [])
