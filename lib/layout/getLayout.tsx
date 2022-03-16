import { ReactElement } from "react"
import { Layout } from "../../components/layout/Layout"

export const getLayout = function (page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}