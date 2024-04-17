import { MDBCol, MDBIcon, MDBTable, MDBTableBody } from "mdb-react-ui-kit";
import React, { useState } from "react";

const Searchemoji = () => {
  const allemoji = [ 
    {'id':1,'expression':'smile','code':'0x1F600'},
    {'id':2,'expression':'smile','code':'0x1F600'}, 
    {'id':3,'expression':'smile','code':'0x1F604'},
    {'id':4,'expression':'smile','code':'0x1F601'},
    {'id':5,'expression':'smile','code':'0x1F606'},
    {'id':6,'expression':'smile','code':'0x1F605'},
    {'id':7,'expression':'love','code':'0x1F970'},
    {'id':8,'expression':'love','code':'0x1F60D'},
    {'id':9,'expression':'love','code':'0x1F929'},
    {'id':10,'expression':'love','code':'0x1F618'},
    {'id':11,'expression':'sad','code':'0x1F612'},
    {'id':13,'expression':'sad','code':'0x1F641'},
    {'id':12,'expression':'sad','code':'0x1F615'},
    {'id':13,'expression':'sad','code':'0x1F641'},
    {'id':14,'expression':'heart','code':'0x1F496'},
    {'id':15,'expression':'heart','code':'0x2763'},
    {'id':16,'expression':'heart','code':'0x2764'},
    {'id':17,'expression':'heart','code':'0x1F49A'},
    {'id':17,'expression':'hand','code':'0x1F44B'},
    {'id':17,'expression':'hand','code':'0x270C'},
    {'id':17,'expression':'hand','code':'0x1F919'},
    {'id':17,'expression':'cat','code':'0x1F431'},
    {'id':17,'expression':'cat','code':'0x1F408'},
    {'id':17,'expression':'flower','code':'0x1F490'},

  ];

  const [search, setsearch] = useState('');
  const [emoji, setemoji] = useState(allemoji);

  function handlesearch(event) {
    const search = event.target.value.toLowerCase();
    setsearch(search);

    const filtered = allemoji.filter((item) => item.expression.toLowerCase().includes(search));
    setemoji(filtered);
  };

  // Chunk array function
  const chunkArray = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Split emoji into chunks of 3
  const emojiChunks = chunkArray(emoji, 6);

  return (
    <> 
    <br/>
    <div>
        <h2 style={{textAlign: 'center'}}><b>Emoji Search</b></h2>
    </div>
      <center><MDBCol md="4">
        <form className="form-inline mt-4 mb-4">
          <MDBIcon icon="search" />
          <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" onChange={handlesearch} style={{textAlign: 'center'}}/>
        </form>
      </MDBCol></center>

      <MDBTable bordered>
        <MDBTableBody>
          {emojiChunks.map((chunk, index) => (
            <tr key={index}>
              {chunk.map((item, innerIndex) => (
                <td style={{textAlign:'center'}} key={innerIndex}>{String.fromCodePoint(item.code)}</td>
              ))}
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </>
  );
}

export default Searchemoji;
