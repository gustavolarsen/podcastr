import { Play } from 'phosphor-react'
import Image from 'next/image'
import styles from './EpisodesList.module.scss'

type Episode = {
  id: string
  title: string
  thumbnail: string
  description: string
  members: string
  publishedAt: string
  duration: number
  durationAsString: string
  url: string
}

const EpisodesList = ({ latestEpisodes, allEpisodes }) => {
  return (
    <div className={styles.episodesList}>
      <section className={styles.latestEpisodes}>
        <h2>Últimos lançamentos</h2>
        <ul>
          {latestEpisodes.map((episode: Episode) => {
            return (
              <li key={episode.id}>
                <Image
                  width={192}
                  height={192}
                  src={episode.thumbnail}
                  alt={episode.title}
                  objectFit="cover"
                />
                <div className={styles.episodeDetails}>
                  <a href="">{episode.title}</a>
                  <p>{episode.members}</p>
                  <span>{episode.publishedAt}</span>
                  <span>{episode.durationAsString}</span>
                </div>

                <button type="button">
                  <Play size={16} weight="fill" />
                </button>
              </li>
            )
          })}
        </ul>
      </section>
      <section className={styles.allEpisodes}>
        <h2>Últimos lançamentos</h2>
      </section>
    </div>
  )
}

export { EpisodesList }
