import React, { Component } from 'react';

const singles = [
    {title: "Du hast", album: "Sehnsucht", year: 1997},
    {title: "Ich will", album: "Mutter", year: 2001},
    {title: "Feuer frei", album: "Mutter", year: 2002},
    {title: "Amerika", album: "Reise, Reise", year: 2004},
    {title: "Mann gegen Mann", album: "Rosenrot", year: 2005},
    {title: "Deutschland", album: "Untitled", year: 2019},
    {title: "Zick Zack", album: "Zeit", year: 2022},
]


export default class Singles extends Component {
  render() {
    return (
        <div>
            {singles.map(({ title, album, year }) => (
                <p><p><b>Title: {title}</b></p> <p>Album: {album}</p><p>Year: {year}</p></p>
            ))}
        </div>
    )
  }
}
