import { useState } from "react";
import { Form, Input, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./homepage.css";
import AWS from "aws-sdk";
AWS.config.update({
  accessKeyId: "AKIAZFUHQPO5CYTITAHL",
  secretAccessKey: "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",
  region: "ap-south-1",
});

const bucketName = "indisparedev";

const HomePage = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [file, setFile] = useState(null);

  const [fileUrl, setFileUrl] = useState("");

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    console.log("vr");
    setFile(uploadedFile);
    const url = URL.createObjectURL(uploadedFile);
    setFileUrl(url);
  };
  const handleOnSubmit = (e) => {
    // e.preventDefault();
    console.log("enter");

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      console.log(file);
      fetch("http://35.200.146.98:8000/search", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => setFileList(data[0]));
    } else {
      console.log("file upload not working");
    }
  };
  return (
    <div class="conatiner">
      {/* <form onSubmit={handleOnSubmit}>
          <input type="file" onChange={handleFileChange} />
          <button type="submit">submit</button>
        </form> */}
      <Form
        form={form}
        onFinish={handleOnSubmit}
        layout="horizontal"
        theme="dark"
      >
        <Form.Item name="file" label="File">
          <Input
            type="file"
            onChange={handleFileChange}
            style={{ width: 200 }}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

      </Form>
      {/* display the souce image */}
      <div class="container">
        <img src={fileUrl} height="500px" width="500px" />
      </div>
      {/* display the output  */}
      <div class="container">
        {fileList.map((path, index) => {
          return (
            <img
              key={index}
              src={`https://indisparedev.s3.ap-south-1.amazonaws.com/${path}`}
              alt="s3 image"
              height="500px"
              width="500px"
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
