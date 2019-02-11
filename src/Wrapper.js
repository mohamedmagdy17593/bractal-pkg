import React from 'react'

import {ThemeProvider} from 'emotion-theming'
import Theme from '~/core/containers/main/defaultTheme'
import {LinearLayout} from '~/coreUI/components/layouts/helpers/LinearLayout'
import MediaProvider from '~/core/utils/mediaHelpers/MediaProvider'

function Wrapper({children, theme = Theme}) {
  console.log('hola')
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <MediaProvider> */}
        <LinearLayout row leftJustified topAligned>
          {children}
        </LinearLayout>
        {/* </MediaProvider> */}
      </ThemeProvider>
    </div>
  )
}

export default Wrapper
