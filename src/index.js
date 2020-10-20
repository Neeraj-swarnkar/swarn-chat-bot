import React from "react";
import ReactDOM from "react-dom";
import Conversation from "./components/Conversation";
import ConversationBody from "./components/ConversationBody";
import Message from "./components/Message";
import InputText from "./components/InputText";
import useBot from "./hooks/useBot";
import useBackground from "./hooks/useBackground";
import Loading from "./components/Loading";
import "./styles.scss";

function App() {
  const [state, askBot] = useBot();
  const [bgColor] = useBackground();
  return (
    <>
      <Conversation bgColor={bgColor}>
        <ConversationBody>
          {state.result.map(elm => {
            return <Message key={elm.message} message={elm.message} from={elm.from} />;
          })}
          {state.loading && <Loading />}
        </ConversationBody>
        <InputText onSubmit={askBot} />
      </Conversation>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
