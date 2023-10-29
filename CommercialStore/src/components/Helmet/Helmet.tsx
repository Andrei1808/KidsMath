import React from 'react'
import { helmetInterface } from '../../interfaces/DataInterfaces'

export default function Helmet(props: helmetInterface) {
    document.title = 'Euphoria - ' + props.title
  return (
      <main className='main'>{props.children}</main>
  )
}
