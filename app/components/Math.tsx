"use client"

import React from "react"
import { InlineMath, BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css'

type Props = { math: string; className?: string }

export function Inline({ math, className = "" }: Props) {
  return <InlineMath className={className} math={math} />
}

export function Block({ math, className = "" }: Props) {
  return <BlockMath className={className} math={math} />
}

export default { Inline, Block }
