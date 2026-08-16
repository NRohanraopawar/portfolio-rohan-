import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, X, Send } from 'lucide-react';

export default function JarvisAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "HELLO. I AM JARVIS, ROHAN'S PORTFOLIO ASSISTANT. HOW CAN I HELP YOU?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setMessages(prev => [...prev, { role: 'ai', text: data.reply }]);
      } else {
        setMessages(prev => [...prev, { role: 'ai', text: 'SYSTEM ERROR: UNABLE TO CONNECT TO AI CORE.' }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: 'SYSTEM ERROR: CONNECTION FAILED.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-rohan-red rounded-full flex items-center justify-center text-rohan-black shadow-lg shadow-rohan-red/20 z-50 transition-transform ${isOpen ? 'scale-0' : 'scale-100 hover:scale-110'}`}
      >
        <Bot size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-[90vw] max-w-[400px] h-[600px] max-h-[80vh] bg-rohan-deep border border-rohan-white/20 z-50 flex flex-col shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-rohan-white/20 bg-rohan-black">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-rohan-red animate-pulse" />
                <div>
                  <h3 className="text-sm font-display tracking-widest leading-none">JARVIS AI</h3>
                  <p className="text-[10px] tracking-widest uppercase text-rohan-white/50">Portfolio Assistant</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-rohan-white/50 hover:text-rohan-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <span className="text-[10px] tracking-widest uppercase text-rohan-white/30 mb-1">
                    {msg.role === 'user' ? 'GUEST' : 'SYSTEM'}
                  </span>
                  <div className={`px-4 py-3 text-sm font-light leading-relaxed max-w-[85%] ${
                    msg.role === 'user' 
                      ? 'bg-rohan-white/10 text-rohan-white' 
                      : 'bg-rohan-red/10 text-rohan-red border border-rohan-red/20'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex flex-col items-start">
                  <span className="text-[10px] tracking-widest uppercase text-rohan-white/30 mb-1">SYSTEM</span>
                  <div className="px-4 py-3 bg-rohan-red/10 border border-rohan-red/20 flex gap-1">
                    <span className="w-2 h-2 bg-rohan-red rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-rohan-red rounded-full animate-bounce delay-75" />
                    <span className="w-2 h-2 bg-rohan-red rounded-full animate-bounce delay-150" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-rohan-white/20 bg-rohan-black flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="ASK JARVIS..."
                className="flex-1 bg-transparent text-sm font-light text-rohan-white placeholder-rohan-white/30 focus:outline-none"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="text-rohan-red disabled:text-rohan-white/20 hover:text-rohan-red-bright transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
