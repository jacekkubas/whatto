import React from 'react'

const ListElement = ({data}) => {
  const date = new Date(data.release_date);
  const year = date.getFullYear();

  return (
    <div className="wrapper">
      <div className="wynik" key={data.id}>
        <img className="miniatura" src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="" />
        <div className="tekst">
          <h3>{`${data.title}  (${year})`}</h3>
          <div className="overview"><span>{data.overview}</span></div>
          <strong><a target="_blank" className="zobacz-wiecej" href={`https://www.themoviedb.org/movie/${data.id}`} rel="noreferrer">Zobacz więcej</a></strong>
        </div>  
      </div>
    </div>
  )
}

export default ListElement