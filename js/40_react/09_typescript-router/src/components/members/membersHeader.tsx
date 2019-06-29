import * as React from 'react'
import { render } from 'react-dom';

export const MemberHeader: React.StatelessComponent<{}> = () => {
  return (
    <tr>
      <th>Avatar</th>
      <th>Id</th>
      <th>Name</th>
    </tr>
  )
}