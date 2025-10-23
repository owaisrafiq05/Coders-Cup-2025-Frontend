// Chatbot API service for integrating with the backend
const CHATBOT_BASE_URL = 'https://acm-khi-chatbot.onrender.com';

export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface ChatbotResponse {
  message: string;
  status: 'success' | 'error';
  error?: string;
}

export interface ChatbotRequest {
  message: string;
  sessionId?: string;
}

class ChatbotApiService {
  private baseUrl: string;
  private sessionId: string;

  constructor(baseUrl: string = CHATBOT_BASE_URL) {
    this.baseUrl = baseUrl;
    this.sessionId = this.generateSessionId();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  async sendMessage(message: string): Promise<ChatbotResponse> {
    try {
      const requestBody: ChatbotRequest = {
        message: message.trim(),
        sessionId: this.sessionId
      };

      const response = await fetch(`${this.baseUrl}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      return {
        message: data.message || data.response || data.text || 'Sorry, I could not process your request.',
        status: 'success'
      };
    } catch (error) {
      console.error('Chatbot API Error:', error);
      
      // Fallback response based on common chatbot patterns
      const fallbackResponse = this.getFallbackResponse(message);
      
      return {
        message: fallbackResponse,
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  private getFallbackResponse(userMessage: string): string {
    const message = userMessage.toLowerCase();
    
    // Fallback responses when API is unavailable
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
  }

  // Method to test API connectivity
  async testConnection(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/health`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
      return response.ok;
    } catch (error) {
      console.error('API connection test failed:', error);
      return false;
    }
  }

  // Method to reset session
  resetSession(): void {
    this.sessionId = this.generateSessionId();
  }
}

// Export singleton instance
export const chatbotApi = new ChatbotApiService();
export default chatbotApi;
