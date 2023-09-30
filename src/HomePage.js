import { useState } from "react";

const HomePage = () => {
  const [fileList, setFileList] = useState([]);
  const [fileUrl, setFileUrl] = useState(null);
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    const url = URL.createObjectURL(uploadedFile);
    setFileUrl(url);
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
    </div>
    
  );
};

export default HomePage;
