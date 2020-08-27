import React from 'react'
import styles from './EventItem.module.scss'

const EventItem = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div>
          <img
            className={styles.video_img}
            src={item.Video.poster ? item.Video.poster : '/fallback.jpg'}
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
                  {tag.name}
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
