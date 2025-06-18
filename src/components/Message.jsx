import React, { useState } from 'react';

const faqResponses = {
  help: [
    "Sure! I can assist with login, signup, or profile settings.",
    "Just ask about any of these: 💬 login, 📄 signup, ⚙️ settings.",
    "I'm here to help! What's on your mind?",
    "Need a hand with something specific? Let me know.",
  ],
  hello: [
    "Hey there! 😊",
    "How can I assist you today?",
    "Hi! Great to see you.",
    "Hello! What brings you here?",
  ],
  hi: [
    "Hi! 👋 How can I help you today?",
    "Hey there!",
    "Hi! What can I do for you?",
  ],
  hey: [
    "Nice to meet you! 😊",
    "What can I do for you?",
    "Hey! Ask away.",
  ],
  login: [
    "To log in, click the 'Login' button on the top right.",
    "Make sure you’re using your correct email and password.",
    "If you're having trouble logging in, try resetting your password.",
    "Your login details are case-sensitive, so double-check them!",
  ],
  signup: [
    "To sign up, click 'Create Account'.",
    "We just need your name, email, and a secure password.",
    "Signing up is quick and easy! Just follow the prompts.",
    "You'll receive a confirmation email after you sign up.",
  ],
  ok: [
    "Great! Let me know if you need anything else!",
    "Alright, glad I could help!",
    "Perfect! Anything else?",
  ],
  logout: [
    "You can log out by clicking your profile icon and selecting 'Logout'.",
    "Logging out is simple: find the 'Logout' option in your user menu.",
    "Click your avatar in the top right, then choose 'Logout' to sign out securely.",
  ],
  thanks: [
    "You're welcome! 😊",
    "Let me know if you have more questions.",
    "Anytime! Happy to help.",
    "Glad I could assist!",
    "No problem at all!",
  ],
  // --- New Categories and Expanded Responses ---

  // User expresses confusion or asks for general information
  what: [
    "Could you please clarify what you mean?",
    "I'm not sure I understand. Can you rephrase that?",
    "Can you provide more details?",
    "What specifically are you asking about?",
  ],
  how: [
    "To do that, you'll generally follow these steps...",
    "Could you tell me what you're trying to achieve?",
    "I can help explain the process if you tell me what you're trying to 'how'!",
  ],
  why: [
    "There's usually a specific reason, depending on the context. Could you explain your 'why'?",
    "Understanding the 'why' helps me give a better answer. What's on your mind?",
  ],
  when: [
    "Could you be more specific about the 'when' you're asking about?",
    "I need a bit more context on the timing. What are you looking for?",
  ],
  where: [
    "Can you specify what 'where' you're looking for?",
    "I need more information about the location or section you're referring to.",
  ],

  // User asks about features
  features: [
    "Our app offers messaging, file sharing, and video calls!",
    "Key features include group chats, private messaging, and customizable profiles.",
    "You can enjoy real-time chat, media sharing, and easy connections with friends.",
  ],
  pricing: [
    "Our basic plan is free! For premium features, check out our pricing page.",
    "We have free and paid tiers. Visit our 'Pricing' section for details.",
    "Find all pricing information under the 'Plans' tab in the navigation.",
  ],
  premium: [
    "Premium features include enhanced storage, ad-free experience, and priority support.",
    "Upgrading to premium unlocks advanced security, custom themes, and exclusive emojis.",
  ],
  privacy: [
    "We take your privacy seriously. You can review our full privacy policy on our website.",
    "Your data is protected. Check our privacy policy for more details.",
  ],
  security: [
    "Our app uses end-to-end encryption to secure your conversations.",
    "We employ robust security measures to protect your account and data.",
  ],
  notifications: [
    "You can manage your notification settings in your profile preferences.",
    "Go to 'Settings' and then 'Notifications' to customize your alerts.",
  ],

  // User asks about profile settings
  settings: [
    "To access your settings, click your profile icon in the top right.",
    "You can customize your profile, notifications, and privacy preferences in 'Settings'.",
    "Find all account-related options under the 'Settings' menu.",
  ],
  profile: [
    "You can edit your profile picture, name, and bio in your profile settings.",
    "Click on your profile icon to view and update your personal information.",
  ],
  password: [
    "To reset your password, click 'Forgot Password' on the login screen.",
    "You can change your password in your 'Account Settings' once logged in.",
  ],

  // User expresses frustration or difficulty
  error: [
    "I'm sorry you're encountering an error. Could you describe it in more detail?",
    "Please tell me the exact error message you're seeing.",
    "Let's try to fix this. What's happening?",
  ],
  bug: [
    "Thanks for reporting! Could you give me more details about the bug?",
    "We appreciate you letting us know. Can you describe how to reproduce it?",
  ],
  stuck: [
    "Don't worry, I can help! What are you stuck on?",
    "Let's get you unstuck. What's the issue?",
  ],

  // General conversational fillers
  bye: [
    "Goodbye! Have a great day! 👋",
    "See you later! Feel free to reach out again.",
    "Farewell! Take care.",
  ],
  goodbye: [
    "Goodbye! Have a great day! 👋",
    "See you later! Feel free to reach out again.",
    "Farewell! Take care.",
  ],
  no: [
    "Okay, understood.",
    "Alright. Is there anything else then?",
  ],
  yes: [
    "Great!",
    "Perfect! What's next?",
  ],
  maybe: [
    "Let me know if you decide!",
    "Take your time to think about it.",
  ],
  sure: [
    "What can I do for you?",
    "Alright, tell me what you need.",
  ],
  appreciate: [
    "I'm happy to help!",
    "You're welcome!",
    "Glad I could be of assistance!",
  ],
};

// Get reply based on user input
const normalizeInput = (text) => {
  const lower = text.toLowerCase().trim();

  // Simple fuzzy mapping
  const synonyms = {
    ye: "yes",
    yeah: "yes",
    yup: "yes",
    ya: "yes",
    naw: "no",
    nope: "no",
    hiya: "hi",
    helo: "hello",
    thx: "thanks",
    ty: "thanks",
    pls: "help",
    plz: "help",
    'i need help': 'help',
    'log in': 'login',
    'sign up': 'signup',
    'sign-in': 'login',
    'sign- in': 'login',
    'signout': 'logout',
    'sign off': 'logout',
  };

  return synonyms[lower] || lower;
};

const generateReply = (text) => {
  const normalizedKey = normalizeInput(text);
  return faqResponses[normalizedKey] || [
    "I'm not sure how to answer that 🤔.",
    "Try asking about 'help', 'login', or 'signup'.",
  ];
};

const Message = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { type: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setTyping(true);

    setTimeout(() => {
      const replies = generateReply(input);
      const botMessages = replies.map((msg) => ({ type: 'bot', text: msg }));
      setMessages((prev) => [...prev, ...botMessages]);
      setTyping(false);
    }, 1000);

    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="flex flex-col h-[80vh] max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-6">
      {/* Chat Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-xs px-4 py-2 rounded-lg ${
              msg.type === 'user'
                ? 'bg-blue-500 text-white self-end ml-auto'
                : 'bg-gray-200 text-gray-800 self-start'
            }`}
          >
            {msg.text}
          </div>
        ))}

        {/* Typing Indicator */}
        {typing && (
          <div className="text-sm text-gray-500 animate-pulse ml-2">Typing...</div>
        )}
      </div>

      {/* Input Area */}
      <div className="flex items-center border-t p-2">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 border rounded px-4 py-2 mr-2 focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Message;
