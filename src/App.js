import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import QandA from "./components/QandA";

function App() {

  const [inputValue, setInputValue] = useState("");
  const [aiResponse, setAiResponse] = useState(null);

  const apiKey = //INSERT API KEY HERE

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: inputValue }]
        })
      });

      const data = await response.json()
      setAiResponse(data.choices[0].message.content)
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <>
      <Header />
      <Input inputValue={inputValue} setInputValue={setInputValue} handleSubmit={handleSubmit} />
      <QandA inputValue={inputValue} aiResponse={aiResponse} />
    </>
  );
}

export default App;
