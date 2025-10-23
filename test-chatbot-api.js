// Test script to verify chatbot API integration
import { chatbotApi } from './src/services/chatbotApi';

async function testChatbotAPI() {
  console.log('Testing Chatbot API Integration...');
  
  try {
    // Test connection
    console.log('1. Testing API connection...');
    const isConnected = await chatbotApi.testConnection();
    console.log(`API Connection: ${isConnected ? '✅ Connected' : '❌ Not Connected'}`);
    
    // Test sending a message
    console.log('2. Testing message sending...');
    const response = await chatbotApi.sendMessage('Hello, what is Coder\'s Cup?');
    console.log(`Response Status: ${response.status}`);
    console.log(`Response Message: ${response.message}`);
    
    if (response.error) {
      console.log(`Error: ${response.error}`);
    }
    
    console.log('✅ API Integration Test Complete');
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

// Run the test if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  testChatbotAPI();
}

export { testChatbotAPI };
