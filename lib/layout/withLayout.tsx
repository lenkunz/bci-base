import { Layout } from "../../components/layout/Layout"

type Props = {}

export function withLayout(WrappedComponent: React.ComponentType) {
  return function component({...props}: Props) {
    return (
      <Layout>
        <WrappedComponent {...props} />
      </Layout>
    )
  }
};