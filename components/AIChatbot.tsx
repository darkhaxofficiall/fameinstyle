import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your Fame & Style assistant. I can help you with our services, answer questions, show you our portfolio, and even help you get started with a project. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const chatMutation = useMutation({
    mutationFn: async (message: string) => {
      const response = await apiRequest('/api/chat', {
        method: 'POST',
        body: JSON.stringify({ message })
      });
      return response.reply;
    },
    onSuccess: (reply) => {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        content: reply,
        isUser: false,
        timestamp: new Date()
      }]);
    },
    onError: (error) => {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        content: "I apologize, but I'm having trouble connecting right now. Please try again or contact us directly at fameinstyleofficial@gmail.com",
        isUser: false,
        timestamp: new Date()
      }]);
    }
  });

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      content: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Send to AI
    chatMutation.mutate(inputMessage);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gold text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-96 bg-black bg-opacity-95 backdrop-blur-lg border border-gold border-opacity-30 rounded-xl shadow-2xl z-40 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gold border-opacity-20 flex items-center">
            <Bot className="text-gold mr-3" size={20} />
            <div>
              <h3 className="font-montserrat font-semibold text-white">Fame & Style AI</h3>
              <p className="text-xs text-gray-400">Your creative assistant</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.isUser
                      ? 'bg-gold text-black ml-8'
                      : 'bg-gray-800 text-white mr-8'
                  }`}
                >
                  <div className="flex items-start">
                    {!message.isUser && (
                      <Bot className="text-gold mr-2 mt-1 flex-shrink-0" size={16} />
                    )}
                    <p className="text-sm">{message.content}</p>
                    {message.isUser && (
                      <User className="text-black ml-2 mt-1 flex-shrink-0" size={16} />
                    )}
                  </div>
                </div>
              </div>
            ))}
            {chatMutation.isPending && (
              <div className="flex justify-start">
                <div className="bg-gray-800 text-white max-w-xs px-4 py-2 rounded-lg mr-8">
                  <div className="flex items-center">
                    <Bot className="text-gold mr-2" size={16} />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gold border-opacity-20">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about our services..."
                className="flex-1 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-gold"
                disabled={chatMutation.isPending}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || chatMutation.isPending}
                className="bg-gold text-black hover:bg-gold-light px-4"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}