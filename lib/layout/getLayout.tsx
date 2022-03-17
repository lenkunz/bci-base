import { NextPage } from "next";
import { Layout } from "../../components/layout/Layout";

export function getLayout(page: NextPage) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}