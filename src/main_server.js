import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components';
import App from './App'

export function render() {
    const sheet = new ServerStyleSheet()
    const html = renderToString(sheet.collectStyles(<App />))
    const styleTags = sheet.getStyleTags()
    sheet.seal()
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Demo</title>
            ${styleTags}
        </head>
        <body style="margin:0">
            <div id="root">${html}</div>
        </body>
    </html>
    `;
}