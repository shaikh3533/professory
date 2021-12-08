import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Upload } from 'antd';
const UploadComponent = (props) => {
  const InitialState = {
    fileList:""

  }
  const [apiData, setapiData] = useState(InitialState);

  const { fileList } = apiData;

  const onChange = ({ fileList }) => {
    setapiData({
      ...apiData,
      fileList
    });
    props.imageUpload(fileList)
  };

  return (
    <>

      <Upload
        action=""
        listType="picture-card"
        // fileList={fileList}
        maxCount={5}
        onChange={onChange}
        // onPreview={onPreview}
      >
        {fileList.length<5 && <><p className="icon rounded-circle pr-1 pl-1">+</p></>}
      </Upload>
    </>
  );
};

export default UploadComponent;