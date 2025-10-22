"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
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

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("coder") || message.includes("cup") || message.includes("competition")) {
      return "Sure! Coder's Cup is our FAST NUCES' annual coding competition, designed to bring together the brightest problem-solvers, developers, and tech enthusiasts under one banner. Each year, the event challenges participants to push their creative and analytical limits through a series of programming and algorithmic challenges.";
    }
    
    if (message.includes("format") || message.includes("how") || message.includes("work")) {
      return "The competition follows a unique 3-stage format: 1) Batch Qualifiers - where FASTians compete in coding challenges, 2) The Auction War - where House Captains bid on qualified participants, and 3) The Grand Finale - where house teams compete for ultimate glory!";
    }
    
    if (message.includes("register") || message.includes("participate") || message.includes("join")) {
      return "To participate in Coder's Cup, you need to be a FAST NUCES student. Registration details are usually announced before the event. Keep an eye on our announcements and click the Register button when it opens!";
    }
    
    if (message.includes("house") || message.includes("team")) {
      return "There are 4 houses in Coder's Cup: Po (The Unpredictable Force), Oogway (Ancient Wisdom), Tai Lung (Relentless Power), and Mantis (Precision & Stings). House Captains will bid on qualified participants to form their teams!";
    }
    
    if (message.includes("prize") || message.includes("reward") || message.includes("win")) {
      return "Winners receive exciting prizes and recognition! The exact prizes vary each year, but glory and bragging rights are guaranteed for the champions. Check the Prizes section for more details!";
    }
    
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return "Greetings, young warrior! I am PoBot, here to guide you through your Coder's Cup journey. What wisdom do you seek today?";
    }
    
    if (message.includes("help") || message.includes("what") || message.includes("?")) {
      return "I can help you with information about Coder's Cup, the competition format, registration, houses, prizes, and more! Just ask me anything about the event.";
    }
    
    return "Hmm, that's an interesting question! While I may not have all the answers, I encourage you to explore our website for more details or contact our team directly. Remember, every master was once a beginner!";
  };

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

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
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
    <div className="fixed inset-0 z-[100] flex items-end justify-end p-2 sm:p-4 pointer-events-none">
      <div className="w-full max-w-sm h-[85vh] sm:h-[75vh] md:h-[500px] max-h-[600px] bg-[#FEFEEA] rounded-2xl shadow-2xl border-2 border-[#930000] flex flex-col pointer-events-auto">
        {/* Header */}
        <div className="bg-[#930000] text-white p-3 sm:p-4 rounded-t-2xl flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#FEFEEA]">
              <img 
                src="po.jpg" 
                alt="PoBot" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">PoBot</h3>
              <p className="text-xs sm:text-sm opacity-90 hidden sm:block">Ask away, warrior of wisdom...</p>
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
                    : "bg-white text-gray-800 rounded-bl-md border border-gray-200"
                }`}
              >
                <p className="text-xs sm:text-sm leading-relaxed">{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.isUser ? "text-white/70" : "text-gray-500"
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