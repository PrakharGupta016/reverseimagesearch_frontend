  import {  useState } from "react";
  import AWS from 'aws-sdk';
  AWS.config.update({
    accessKeyId: 'AKIAZFUHQPO5CYTITAHL',
    secretAccessKey: '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',
    region: 'ap-south-1',
  });

  const bucketName = 'indisparedev';


  const HomePage = () => {
    const [fileList, setFileList] = useState([]);
    // const [fileUrl, setFileUrl] = useState(null);
    const [file, setFile] = useState(null);



    const handleFileChange = (e) => {
      const uploadedFile = e.target.files[0];
      setFile(uploadedFile);
      // const url = URL.createObjectURL(uploadedFile);
      // setFileUrl(url);
    };
    const handleOnSubmit = (e) => {
      e.preventDefault();

      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        console.log(file)
        fetch("http://35.200.146.98:8000/search", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => setFileList(data[0]));
      }
    };
    return (
      <div>
        <form onSubmit={handleOnSubmit}>
          <input type="file" onChange={handleFileChange} />
          <button type="submit">submit</button>
        </form>
        <div >
            {fileList.map((path,index)=>
            {

              return (  <img key={index}src={`https://indisparedev.s3.ap-south-1.amazonaws.com/${path}`} alt="s3 image" height="500px" width="500px"/>
                )
            })}
        </div>
      </div>
      
    );
  };

  export default HomePage;
