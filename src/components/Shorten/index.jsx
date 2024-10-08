/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import api from "../../services/api";
import { ShortenStyled } from "./styles";
import { SecundaryRed, PrimaryDarkViolet } from "../../global/colors";

const Shorten = () => {
  const [shortLink, setShortLink] = useState("");
  const [shortedUrl, setShortedUrl] = useState([]);
  const [formError, setFormError] = useState("");
  const [textError, setTextError] = useState("none");
  const [idNumber, setIdNumber] = useState(0);
  const [inputValue, setInputValue] = useState("");

  function linkChange(e) {
    const response = e.target.value;
    setShortLink(response);
    setInputValue(response);
  }

  async function loadApi(e) {
    e.preventDefault();

    const expression = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

    const regex = new RegExp(expression);

    if (shortLink === "" || !shortLink.match(regex)) {
      setFormError(`2px solid ${SecundaryRed}`);
      setTextError("block");
    } else {
      setFormError("none");
      setTextError("none");
      const response = await api.post('/link', {
        url: shortLink
      });

      setShortedUrl([
        ...shortedUrl,
        {
          shortedLink: response.data.shrtlnk,
          link: response.data.url,
          id: response.data.key
        }
      ]);

      setIdNumber(idNumber + 1);

      setInputValue("");
      
    }
  }

  function copyReact(e) {
    // eslint-disable-next-line no-unused-expressions
    e.target.firstChild.data = "Copiado!";
    e.target.style.background = PrimaryDarkViolet;
  }

  return (
    <ShortenStyled>
      <div className="shorten-contain" id="shorten">
        <div className="shorten">
          <input
            type="text"
            name="shorten"
            onChange={linkChange}
            value={inputValue}
            style={{ border: `${formError}` }}
            placeholder="Encurtar o link aqui.."
          />
          <button type="submit" onClick={loadApi}>
            Encurtar
          </button>
        </div>
        <p style={{ display: `${textError}` }}>Link incorreto</p>
      </div>
      <div className="shorted-url">
        {shortedUrl.map((el, index) => (
          <div key={el.id} className="links">
            <a className="link" href={el.link}>
              {el.link}
            </a>
            <div className="between">
              <a href={el.shortedLink}>{el.shortedLink}</a>
              <CopyToClipboard text={el.shortedLink}>
                <button onClick={copyReact}>Copiar</button>
              </CopyToClipboard>
            </div>
          </div>
        ))}
      </div>
    </ShortenStyled>
  );
};

export default Shorten;
