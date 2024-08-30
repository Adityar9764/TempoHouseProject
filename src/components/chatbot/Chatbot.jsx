import { useState } from "react";
import { FaComments } from "react-icons/fa";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "I'm here to assist you!" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-4 right-5 z-50">
      <button
        onClick={toggleChat}
        className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        <FaComments className="h-6 w-6" />
      </button>
      {isOpen && (
        <div className="mt-1 w-60 sm:w-70 bg-gray-100 rounded-lg shadow-lg overflow-hidden flex flex-col">
          <div className="bg-green-600 text-white p-4 text-center font-semibold">
            Chat with us
          </div>

          <div
            className="p-4 flex-1 overflow-y-auto"
            style={{ background: "#ece5dd" }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-lg p-2 max-w-xs ${
                    message.sender === "user"
                      ? "bg-green-500 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-gray-200 border-t border-gray-300">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type a message..."
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 text-black"
            />
            <button
              onClick={handleSend}
              className="w-full mt-2 bg-green-600 text-white p-2 rounded-md hover:bg-green-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
