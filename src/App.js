import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function App() {
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  console.log(data);

  const onChange = (event, editor) => {
    const editorData = editor.getData();

    setData({
      ...data,
      content: editorData,
    });
  };

  const onChangeOtherValue = ({ target }) => {
    const { name, value } = target;

    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div>
      <input type={"text"} name={"title"} onChange={onChangeOtherValue} />
      <CKEditor name={"content"} editor={ClassicEditor} onChange={onChange} />
    </div>
  );
}

export default App;
