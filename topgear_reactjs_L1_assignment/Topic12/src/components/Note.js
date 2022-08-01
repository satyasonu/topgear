import React from 'react'

const Note = () => {
  return (
    <div>
        <ul>
            <li>Please install json-server before using this Project.</li>
            <li>Use below commands to install and run json-server</li>
            <li><strong>install i json-server</strong></li>
            <li><strong>json-server -w db.json -p 3333</strong></li>
        </ul>
    </div>
  )
}

export default Note