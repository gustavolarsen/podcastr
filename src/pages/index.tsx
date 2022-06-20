import { GetStaticProps } from 'next'
import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { api } from '../services/api'
import { convertDurationToTimeString } from '../utils/covertDurationToTimeString'
import { EpisodesList } from '../components/episodes-list/EpisodesList.component'

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

type HomeProps = {
  latestEpisodes: Episode[]
  allEpisodes: Episode[]
}

export default function Home({ latestEpisodes, allEpisodes }: HomeProps) {
  return (
    <div>
      <EpisodesList latestEpisodes={latestEpisodes} allEpisodes={allEpisodes} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc',
    },
  })

  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', {
        locale: ptBR,
      }),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
      url: episode.file.url,
    }
  })

  const latestEpisodes = episodes.slice(0, 2)
  const allEpisodes = episodes.slice(2)

  return {
    props: {
      latestEpisodes,
      allEpisodes,
    },
    revalidate: 3600, // 1hr tempo em segundos
  }
}
