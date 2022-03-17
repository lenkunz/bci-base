import React from "react";
import { Layout } from "../../components/layout/Layout"
import { getLayout } from "./getLayout";

type Props = {}

export function withLayout(WrappedComponent: React.ComponentType) {
  (WrappedComponent as any).getLayout = getLayout;
};