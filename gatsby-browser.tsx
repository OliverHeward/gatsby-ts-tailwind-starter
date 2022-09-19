import { GatsbyBrowser } from 'gatsby'
import React from 'react'
import { ContextProvider } from './src/context'
import './src/styles/global.scss'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
	element,
}) => <ContextProvider>{element}</ContextProvider>

