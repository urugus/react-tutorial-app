import React, { ReactElement } from "react"
import { AppPropsWithLayout } from "../types/page"

const App = ({ Component, pageProps }: AppPropsWithLayout): React.ReactNode => {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)

  return (
    <>
      <title>vitanote jp</title>
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default App
