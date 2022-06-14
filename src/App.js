import React, { useEffect, useState } from "react";
import _ from "lodash";
import styled from "styled-components";

let spreadSheetsId = "1k5Muc1xM3_PP0musMihHJMEkYYarIVSKKERUriHBkV8";
let API_TOKEN = "AIzaSyBiXVHWac0qqPbeW857yGxkeMr5OZ401kM";

const LanguageButton = styled.a`
  padding: 5px 10px 5px 10px;
  font-size: 15px;
  color: white;
  background-color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: yellow;
  }
`;

const LanguageMenu = styled.ul`
  display: flex;
  list-style: none;
`;

const LanguageList = styled.li`
  padding: 5px;
`;

const languageArr = ["Korean", "English", "Chinese", "Deutsch"];

const App = () => {
  const [stringId, setStringId] = useState([]);
  const [jsonUrl, setJsonUrl] = useState("");
  const [fileName, setFileName] = useState("");

  const SpreadAPI = async (range) => {
    const resJson = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadSheetsId}/values/Sheet1!${range}?key=${API_TOKEN}`
    ).then((response) => response.json());

    return resJson.values;
  };

  const getGoogleSpreadSheetsStringId = async () => {
    const getData = await SpreadAPI("A2:A9");

    setStringId(getData);
  };

  const googleSpreadSheetsConnect = async (range) => {
    let language = {};

    const getData = await SpreadAPI(range);

    _.forEach(getData, (res, index) => {
      language = { ...language, [stringId[index][0]]: res[0] };
    });

    const charset = "data:application/json;charset=utf-8,";

    let JsonUrl = charset + encodeURIComponent(JSON.stringify(language));

    setJsonUrl(JsonUrl);
  };

  const getLanguage = async (language) => {
    let range = "";

    switch (language) {
      case "Korean":
        range = "B2:B999";
        setFileName("ko.json");
        break;
      case "English":
        range = "C2:C999";
        setFileName("en.json");
        break;
      case "Chinese":
        range = "D2:D999";
        setFileName("zh.json");
        break;
      case "Deutsch":
        range = "E2:E999";
        setFileName("de.json");
        break;
      default:
        break;
    }

    googleSpreadSheetsConnect(range);
  };

  useEffect(() => {
    const getSpreadData = async () => {
      await getGoogleSpreadSheetsStringId();
    };

    getSpreadData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <LanguageMenu>
        {_.map(languageArr, (language, index) => (
          <LanguageList key={index}>
            <LanguageButton onClick={() => getLanguage(language)}>
              {language}
            </LanguageButton>
          </LanguageList>
        ))}
        {jsonUrl !== "" && (
          <LanguageList>
            <LanguageButton href={jsonUrl} id={fileName} download={fileName}>
              Download
            </LanguageButton>
          </LanguageList>
        )}
      </LanguageMenu>
    </div>
  );
};

export default App;
