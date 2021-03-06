import useSWR from "swr";
import Image from "next/image";
import styled from "@emotion/styled"
import { css, jsx } from '@emotion/react'
import fetcher from "../utils/fetcher"
const PlayCard = styled.div`
  display:flex;
  flex-direction:row;
  & :first-child {
    flex-shrink: 0;
  }
`
const infoStyle = css`
  display:flex;
  flex-direction:column;
  justify-content:center;
  margin-left:8px;
`
const coverStyle= css`
  border-radius:2px;
`
const linkStyle=css`
  font-size:150%;
  font-weight:600;
  &:hover {
    text-decoration:underline;
  }
`
const containerStyle=css`
`

const largeTextStyle = css`
  font-size:200%;
  font-weight:700;
`
export function LastPlayed() {
  const { data, error } = useSWR("/api/last-played", fetcher);
  const song = data
    ? data
    : {
        imageUrl: "/images/zheng512.png",
        link: "kylezhe.ng",
        title: "Nothing playing",
        artist: "Kyle Zheng",
        playing: false,
      };
  return (
    <div css={containerStyle}>
      <div css={largeTextStyle}>{song.playing ? "Now Playing" : "Last Played"}</div>
      <PlayCard>
        <Image
          src={song.imageUrl}
          alt="Song Album Cover"
          width={90}
          height={90}
          layout="fixed"
          css={coverStyle}
        />
        <div css={infoStyle}>
          <a css={linkStyle}href={song.link}>{song.title}</a>
          <span>{song.artist}</span>
        </div>
      </PlayCard>
    </div>
  );
}

export function LastWatched() {
  const { data, error } = useSWR("/api/last-watched", fetcher);
  const movie = data
    ? data
    : {
        imageUrl: "/images/zheng512.png",
        year: "2021",
        title: "Nothing playing",
      };
  return (
    <div css={containerStyle}>
      <div css={largeTextStyle}>Last Watched</div>
      <PlayCard>
        <Image
          src={movie.imageUrl}
          alt="Movie Poster"
          width={90}
          height={135}
          layout="fixed"
          css={coverStyle}
        />
        <div css={infoStyle}>
          <a css={linkStyle}>{movie.title}</a>
          <span>{movie.year}</span>
        </div>
      </PlayCard>
    </div>
  );
}