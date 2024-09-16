import { ReactNode } from 'react'

export interface helmetInterface {
  title?: string;
  children?: ReactNode | undefined;
}

export default function Helmet(props: helmetInterface) {
    document.title = 'Euphoria - ' + props.title
  return (
      <main className='main'>{props.children}</main>
  )
}
