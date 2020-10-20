import React from "react";
import Conversation from "./components/Conversation";
import ConversationBody from "./components/ConversationBody";
import Message from "./components/Message";
import InputText from "./components/InputText";
import useBot from "./hooks/useBot";
import Loading from "./components/Loading";
import useBackgound from "./hooks/useBackground";
import "./styles.scss";

const App = props => {
  const [state, askBot] = useBot();
  const [bgColor] = useBackgound();
  return (
    <>
    <h1 className="w3-myfont" style={{textAlign: "center"}}>Swarn Chatbot</h1>
    <Conversation bgColor={bgColor}>
      <ConversationBody>
        {state.result.length > 0 &&
          state.result.map((elm, index) => (
            <Message key={index} message={elm.message} from={elm.from} />
          ))}
        {state.loading && <Loading />}
        <InputText onSubmit={askBot} />
      </ConversationBody>
    </Conversation>
    </>
  );
}

export default App;
