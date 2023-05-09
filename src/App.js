import * as React from 'react'
import { Frame } from 'react95'
import { React95Provider, OsProvider, OsWindow } from '@react-os/core'

const Notes = ({ data }) => (
  <OsWindow size={[540,480]}>
    <Frame variant='field' style={{minHeight: '100%', width: '100%', padding: 20}}>
      <p>
        {data.label} is a grat window!
      </p>
    </Frame>
  </OsWindow>
)

const App = () => (
  <React95Provider>
    <OsProvider
      programs={[
        {
          menu: true,
          desktop: true,
          label: "Notes",
          icon: "address_book_pad",
          component: props => <Notes {...props} />
        },
        // more programs here...
      ]}
    />
  </React95Provider>
)


export default App