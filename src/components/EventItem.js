import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './EventItem.module.scss'

function EventItem({ item }) {
  const history = useHistory()

  const goToEvent = () => history.push('/event/' + item.id)

  return (
    <div className={styles.container}>
      <div onClick={goToEvent} className={styles.inner_container}>
        <div className={styles.thumbnail_container}>
          <img
            className={styles.video_img}
            src={item.Video.poster ? item.Video.poster : '/fallback.png'}
          />
        </div>
        <div className={styles.info_container}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.list_challenger_container}>
            {item.Challengers.map((challenger, idx) => {
              return (
                <div
                  key={challenger.id}
                  className={styles['challenger_container_' + idx]}
                >
                  <div className={styles['challenger_name_' + idx]}>
                    {challenger.name}
                  </div>
                  <div>
                    <img
                      className={styles.challenger_img}
                      src={
                        challenger.pictureUrl
                          ? challenger.pictureUrl
                          : '/logo512.png'
                      }
                    />
                  </div>
                </div>
              )
            })}
          </div>
          <div className={styles.list_tag_container}>
            {item.Tags.map((tag) => {
              return (
                <div
                  key={tag.id}
                  className={`${styles.tag_container} ${
                    styles['tag_' + tag.name]
                  }`}
                >
                  {tag.name.toUpperCase()}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventItem
