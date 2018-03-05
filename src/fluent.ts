import {
  ConnectFactory,
  IBranchContext,
  IContext,
  SequenceFactory,
  SequenceWithPropsFactory
} from '@cerebral/fluent'
import { HttpProvider } from '@cerebral/http'
import { Provider as RouterProvider } from '@cerebral/router'

import { Signals, State } from './module/types'

interface Providers {
  id: {
    create(): string
  }
  router: RouterProvider
  http: HttpProvider
  state: State
}

export type Context<TProps = {}> = IContext<TProps> & Providers
export type BranchContext<TPaths, TProps = {}> = IBranchContext<
  TPaths,
  TProps
> &
  Providers

export const connect = ConnectFactory<State, Signals>()
export const sequence = SequenceFactory<Context>()
export const sequenceWithProps = SequenceWithPropsFactory<Context>()
