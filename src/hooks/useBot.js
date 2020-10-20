import { useReducer } from "react";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "request": {
      return {
        loading: true,
        result: [...state.result],
        error: null
      };
    }
    case "success": {
      return {
        loading: false,
        result: [...state.result, action.payload],
        error: null
      };
    }
    case "fail": {
      return {
        loading: false,
        result: [...state.result],
        error: action.error
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default function useBot() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    result: [],
    error: null
  });

  const askBot = async text => {
    dispatch({
      type: "success",
      payload: {
        from: "user",
        message: text
      }
    });

    dispatch({
      type: "request"
    });

    const response = await axios.get("http://localhost:9000/posts/" + text);
    let botMessage;
    if (response.data.length) {
      botMessage = response.data[0].description;
    } else {
      botMessage = " Sorry we don't support this query yet !";
    }

    dispatch({
      type: "success",
      payload: {
        from: "bot",
        message: botMessage
      }
    });
  };

  return [state, askBot];
}
