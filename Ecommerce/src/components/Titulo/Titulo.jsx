import React from 'react'

function Titulo ({titulo='TITULO',subtitulo=':) '}) {
  return (
    <div>
        <h1>{titulo}</h1>
        <h3>{subtitulo}</h3>
    </div>
  )
}

export default Titulo