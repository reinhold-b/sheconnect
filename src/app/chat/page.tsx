'use client'; // This directive is necessary for client-side interactivity (useState, useEffect, useRef)

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect, useContext } from 'react';
import { multilingualChatbotResponses } from '../const';
import { getLangDict } from '../langDict';
import { LanguageContext } from '../bla';
import { Employee } from '../widgets/tile';
// https://chat.zendit.digital/#/room/!kXtPRcqxIHcNYXDquz:home.zendit.digital
// Initial dummy messages for the chat
const initialMessages = [
  { id: 1, sender: 'Bot', text: 'Chat will start when connected.' },
];

export default function LiveChatPage() {
  const [lang, setLang] = useContext(LanguageContext);
  const dict = getLangDict(lang);
  // State to hold the current list of chat messages
  const [chatMessages, setChatMessages] = useState(initialMessages);
  // State to hold the value of the new message being typed
  const [newMessage, setNewMessage] = useState('');
  const [chatInfo, setChatInfo] = useState({ name: dict.connectingWorker, imageUri: "/images/test.jpg" });
  // Ref to scroll the chat window to the bottom
  const messagesEndRef = useRef<HTMLDivElement>(null); // Explicitly type useRef for div

  const employees: Employee[] = [
    new Employee("Leoni", dict.descLeo, "/images/leo_profile.jpeg", "test"),
    new Employee("Marcella", dict.descMarcy, "/images/marci_profile.jpeg", "test"),
    new Employee("Lula", dict.descLula, "/images/lula_profile.jpeg", "test"),
]

  const chatbotResponses = multilingualChatbotResponses;

  function triggerAnswer(query: string): string[] | null {
    const lowerCaseQuery = query.toLowerCase();
    var answersUsed: string[] = [];
    var answers: string[] = [];
  
    for (const keyword of chatbotResponses.keys()) {
      const lowerCaseKeyword = keyword.toLowerCase();
      if (lowerCaseQuery.includes(lowerCaseKeyword) && !answersUsed.includes(lowerCaseKeyword)) {
        answers.push(chatbotResponses.get(keyword)!);
        answersUsed.push(lowerCaseKeyword);
      }
    }
    return answers;
  } 
  // Function to send a new message
  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      const userMessageText = newMessage.trim();

      // Add user message to chat
      setChatMessages((prevMessages) => [...prevMessages, { id: Date.now(), sender: 'User', text: userMessageText }]);
      setNewMessage('');

      // Get bot response based on keywords (using the new substring matching)
      const botAnswers = triggerAnswer(userMessageText);
      if (!botAnswers || botAnswers.length == 0) {
        var finalBotMessage = 'Vielen Dank für Ihre Nachricht. Ich lerne noch dazu! Wie kann ich genauer helfen?'; // Fallback message
        setTimeout(() => {
          setChatMessages((prevMessages) => [...prevMessages, { id: Date.now() + 1, sender: 'Bot', text: finalBotMessage }]);
        }, 500);
        return;
      }

      for (const answer of botAnswers!) {
        // Simulate bot typing/delay and add bot message
        setTimeout(() => {
          setChatMessages((prevMessages) => [...prevMessages, { id: Date.now() + 1, sender: 'Bot', text: answer }]);
        }, 500);
      }
    }
  };

  // Effect to scroll to the bottom of the chat whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]); // Dependency array: run when chatMessages changes

  useEffect(() => {
  setTimeout(() => {
    let randint = Math.floor(Math.random() * 3);
    let e = employees[randint];
    setChatInfo({name: e.name, imageUri: e.imageUri});
    setChatMessages((prevMessages) => {
      let i = chatInfo.name;
      if (prevMessages.length == 1) {
        return [...prevMessages, { id: Date.now() + 1, sender: 'Bot', text:`Hello, nice to meet you!`}];
      }
      return prevMessages;
    });

  }, 2500);
  }, []);


  return (
    <div className='flex flex-col h-screen'>
      <div className="flex justify-between items-center mx-8 py-4 rounded-sm">
      <Image
      className='rounded-sm'
        src={chatInfo.imageUri} // Pass the variable directly, no backticks needed if it's already a string
        alt={`Loading`}
        height={90}
        width={90}
 />
        <div className="text-4xl font-bold outfit-reg">
          {chatInfo.name}
        </div>
        <div className="flex justify-center outfit-reg" id="navbar">
          <div className="mx-4"><Link href={"/"}>Zurück</Link></div>
        </div>
      </div>
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Chat Messages Display Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {chatMessages.map((message) => (
          <div
            key={message.id}
            // Align messages to the right for 'User' and left for 'Bot'
            className={`flex ${message.sender === 'User' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              // Styling for message bubbles
              className={`max-w-[70%] p-3 rounded-xl shadow-sm break-words
                ${message.sender === 'User' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {/* An empty div used as a target for scrolling to the bottom */}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input Field at the Bottom */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message here..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            // Send message on Enter key press
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                sendMessage();
              }
            }}
          />
          <button
            className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors duration-200"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>

    </div>
    
  );
}