import React from "react";
import ReactDOM from "react-dom";
import Conversation from "./components/Conversation";
import ConversationBody from "./components/ConversationBody";
import Message from "./components/Message";
import InputText from "./components/InputText";
import useBot from "./hooks/useBot";
import Loading from "./components/Loading";
import useBackgound from "./hooks/useBackground";
import "./styles.scss";

export default function App() {
  const [state, askBot] = useBot();
  const [bgColor] = useBackgound();
  return (
    <Conversation bgColor={bgColor}>
      <ConversationBody>
        {state.result.length > 0 &&
          state.result.map(elm => (
            <Message message={elm.message} from={elm.from} />
          ))}
        {state.loading && <Loading />}
        <InputText onSubmit={askBot} />
      </ConversationBody>
    </Conversation>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
