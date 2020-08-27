import React from 'react'
import logo from './logo.svg'
import { useQuery, gql } from '@apollo/client'

import styles from './App.module.scss'
import EventItem from './components/EventItem'

const ALL_EVENTS = gql`
  query AllEvents {
    allEvents(tags: "vod", limit: 10) {
      items {
        id
        name
        Video {
          poster
        }
        Challengers {
          id
          name
          pictureUrl
        }
        Tags {
          id
          name
        }
        Streams {
          name
          url
        }
      }
      cursor {
        after
      }
    }
  }
`

function App() {
  const { loading, data } = useQuery(ALL_EVENTS)

  if (loading) {
    return <div>loading...</div>
  }

  console.log(data)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>On Rewind App</div>
      </header>
      <div className={styles.list_item}>
        {data.allEvents.items.map((item) => {
          return <EventItem key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}

export default App
