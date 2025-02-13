import * as React from 'react'
import { Panel } from '~components/Primitives/Panel'
import { useTldrawApp } from '~hooks'
import { styled } from '~styles'
import type { TDSnapshot } from '~types'

const loadingSelector = (s: TDSnapshot) => s.appState.isLoading

export function Loading() {
  const app = useTldrawApp()
  const isLoading = app.useStore(loadingSelector)

  return <StyledLoadingPanelContainer hidden={!isLoading}>Loading...</StyledLoadingPanelContainer>
}

const StyledLoadingPanelContainer = styled('div', {
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: `translate(-50%, 0)`,
  borderBottomLeftRadius: '12px',
  borderBottomRightRadius: '12px',
  padding: '8px',
  fontFamily: 'var(--fonts-ui)',
  fontSize: 'var(--fontSizes-1)',
  boxShadow: 'var(--shadows-panel)',
  backgroundColor: 'white',
  zIndex: 200,
  pointerEvents: 'none',
  '& > div > *': {
    pointerEvents: 'all',
  },
  variants: {
    transform: {
      hidden: {
        transform: `translate(-50%, 100%)`,
      },
      visible: {
        transform: `translate(-50%, 0%)`,
      },
    },
  },
})
