import { useState } from "react";




const handleOnSubmit = (e)=>{
  e.preventDefault();
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

const HomePage = ()=>{
  const [fileList,setFileList] = useState([])
  return (
      <div>
          <form onSubmit={handleOnSubmit}>

              <input type="file"/>  
              <button type = "submit">submit</button>

          </form>

      </div>



  );
}

export default HomePage;