import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Checkbox, Form, Input, Radio, Select, TreeSelect, Cascader, DatePicker, InputNumber, Slider, Switch, Upload, Button } from 'antd';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const FormDisabledDemo = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);

  return (
    <>
      
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{ maxWidth: 600 }}
      >
        
        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
        
      </Form>
    </>
  );
};

export default FormDisabledDemo;
