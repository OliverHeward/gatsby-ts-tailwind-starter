import React from 'react'
import './src/styles/global.scss'

// ! Portal Server-Side Generation Injection.
export const onRenderBody = ({ setPostBodyComponents }) => {
	setPostBodyComponents([<div key="portal" id="portal" />])
}
