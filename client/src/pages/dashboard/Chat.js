import { useEffect, useState } from "react";
import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import ChatWrapper from "../../assets/wrappers/Chat";

const Chat = () => {
  const { thesisComments, getThesisComments, createThesisComment, role } =
    useAppContext();

  // useEffect(() => {
  //   console.log("thesisComments", thesisComments);
  // }, [thesisComments]);

  // useEffect(() => {
  //   createThesisComment("646eef4c4789ae5c3490721e", "ASD KOMENTARAS");
  // }, [createThesisComment]);

  useEffect(() => {
    if (!role || role !== "student") return;
    setMessages(["Diagramos sutvarkytos", "Darbas patobulintas", "Paruostas"]);
  }, [role]);

  useEffect(() => {
    if (!role || role !== "professor") return;
    setMessages([
      "Diagramos sutvarkytos",
      "Darbas patobulintas",
      "Paruostas",
      "Bus perziureta",
      "Ivertinta",
    ]);
  }, [role]);

  const [user, setUser] = useState("");

  useEffect(() => {
    if (role === "professor") {
      setUser("Mantas Mizeras");
    } else if (role === "student") {
      setUser("Tomas Radkevicius");
    }
  }, [role]);

  const [text, setText] = useState("");

  const [messages, setMessages] = useState([]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const [student, setStudent] = useState("Mantas Mizeras");

  const [professor, setProfessor] = useState("Tomas Radkevicius");

  return (
    <>
      <ChatWrapper>
        <div className="chat">
          {role === "professor" && (
            <div className="users-content">
              <p onClick={() => setUser("Mantas Mizeras")}>Mantas Mizeras</p>
              <p onClick={() => setUser("Studentas Pavarde")}>
                Studentas Pavarde
              </p>
              <p onClick={() => setUser("Vytautas Jankauskas")}>
                Vytautas Jankauskas
              </p>
            </div>
          )}
          {role === "student" && (
            <div className="users-content">
              <p onClick={() => setUser("Tomas Radkevicius")}>
                Tomas Radkevicius
              </p>
            </div>
          )}
          <form className="chat-content">
            <p>{user}</p>
            {messages.map((m, i) => {
              let person;
              if (i < 3) {
                person = student;
              } else {
                person = professor;
              }

              return (
                <div className="flex-row">
                  <span className="main-icon">{person.charAt(0)}</span>
                  <span>{m}</span>
                </div>
              );
            })}
            <div className="input-div">
              <input
                className="input-fields"
                type="text"
                id="text"
                value={text}
                onChange={handleTextChange}
              />
              <button
                className="btn btn-chat"
                onClick={() => {
                  setMessages((m) => [...m, text]);
                }}
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </ChatWrapper>
    </>
  );
};

export default Chat;
