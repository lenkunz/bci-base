import { NextPage } from 'next'
import React from 'react'
import { Layout } from '../../components/layout/Layout'
import { withLayout } from '../../lib/layout/withLayout'

type Props = {}

export default function Index({ }: Props) {
  return (
    <div>test</div>
  )
}

withLayout(Index);