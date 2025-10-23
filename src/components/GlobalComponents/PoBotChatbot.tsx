"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, AlertCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { chatbotApi } from "../../services/chatbotApi";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  isError?: boolean;
}

interface PoBotChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const PoBotChatbot = ({ isOpen, onClose }: PoBotChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm PoBot, your wise companion for Coder's Cup. Ask away, warrior of wisdom...",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isApiConnected, setIsApiConnected] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Test API connection on component mount
  useEffect(() => {
    const testConnection = async () => {
      const connected = await chatbotApi.testConnection();
      setIsApiConnected(connected);
    };
    testConnection();
  }, []);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    try {
      const response = await chatbotApi.sendMessage(inputMessage);
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response.message,
        isUser: false,
        timestamp: new Date(),
        isError: response.status === 'error'
      };
      
      setMessages(prev => [...prev, botResponse]);
      
      // Update API connection status based on response
      if (response.status === 'error') {
        setIsApiConnected(false);
      } else {
        setIsApiConnected(true);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble connecting to my wisdom source. Please try again in a moment!",
        isUser: false,
        timestamp: new Date(),
        isError: true
      };
      
      setMessages(prev => [...prev, errorResponse]);
      setIsApiConnected(false);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] caret-black flex items-end justify-end p-2 sm:p-4 pointer-events-none">
      <div className="w-full max-w-sm h-[85vh] sm:h-[75vh] md:h-[500px] max-h-[600px] bg-[#FEFEEA] rounded-2xl shadow-2xl border-2 border-[#930000] flex flex-col pointer-events-auto">
        {/* Header */}
        <div className="bg-[#930000] text-white p-3 sm:p-4 rounded-t-2xl flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#FEFEEA]">
              <img 
                src="bot.png" 
                alt="PoBot" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base sm:text-lg">PoBot</h3>
                {!isApiConnected && (
                  <AlertCircle className="w-3 h-3 text-yellow-300" aria-label="API Connection Issue" />
                )}
              </div>
              <p className="text-xs sm:text-sm opacity-90 hidden sm:block">
                {isApiConnected ? "Ask away, warrior of wisdom..." : "Using fallback responses"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 min-h-0">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] sm:max-w-[80%] p-2 sm:p-3 rounded-2xl ${
                  message.isUser
                    ? "bg-[#930000] text-white rounded-br-md"
                    : message.isError
                    ? "bg-red-50 text-red-800 rounded-bl-md border border-red-200"
                    : "bg-white text-gray-800 rounded-bl-md border border-gray-200"
                }`}
              >
                {message.isUser ? (
                  <p className="text-xs sm:text-sm leading-relaxed">{message.text}</p>
                ) : (
                  <div className="text-xs sm:text-sm leading-relaxed prose prose-sm max-w-none prose-p:my-1 prose-ul:my-1 prose-ol:my-1 prose-li:my-0.5 prose-headings:my-1 prose-headings:font-bold prose-strong:font-bold prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-xs">
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => <p className="mb-1 last:mb-0">{children}</p>,
                        ul: ({ children }) => <ul className="list-disc list-inside mb-1">{children}</ul>,
                        ol: ({ children }) => <ol className="list-decimal list-inside mb-1">{children}</ol>,
                        li: ({ children }) => <li className="mb-0.5">{children}</li>,
                        strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                        em: ({ children }) => <em className="italic">{children}</em>,
                        code: ({ children }) => <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">{children}</code>,
                        h1: ({ children }) => <h1 className="text-sm font-bold mb-1">{children}</h1>,
                        h2: ({ children }) => <h2 className="text-sm font-bold mb-1">{children}</h2>,
                        h3: ({ children }) => <h3 className="text-xs font-bold mb-1">{children}</h3>,
                      }}
                    >
                      {message.text}
                    </ReactMarkdown>
                  </div>
                )}
                <p className={`text-xs mt-1 ${
                  message.isUser ? "text-white/70" : message.isError ? "text-red-500" : "text-gray-500"
                }`}>
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-800 rounded-2xl rounded-bl-md border border-gray-200 p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 sm:p-4 border-t border-gray-200 flex-shrink-0">
          <div className="flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your message..."
              className="flex-1 px-3 sm:px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#930000] focus:border-transparent text-sm"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping}
              className="w-9 h-9 sm:w-10 sm:h-10 bg-[#930000] text-white rounded-full flex items-center justify-center hover:bg-[#7E0000] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoBotChatbot;