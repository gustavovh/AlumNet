import { useState } from 'react';
import { Bell, Search, GraduationCap, Calendar, AlertTriangle, Megaphone } from 'lucide-react';
import { messages } from '../data/mockData';
import { cn } from '../utils/cn';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'urgent', label: 'Urgentes' },
  { id: 'academic', label: 'Académico' },
  { id: 'event', label: 'Eventos' },
];

export const Home = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredMessages = activeTab === 'all' 
    ? messages 
    : messages.filter(m => m.type === activeTab);

  const getIcon = (type: string) => {
    switch (type) {
      case 'academic': return <GraduationCap className="text-academic" size={20} />;
      case 'event': return <Calendar className="text-event" size={20} />;
      case 'urgent': return <AlertTriangle className="text-urgent" size={20} />;
      default: return <Megaphone className="text-blue-500" size={20} />;
    }
  };

  const getIconBg = (type: string) => {
    switch (type) {
      case 'academic': return 'bg-emerald-50';
      case 'event': return 'bg-amber-50';
      case 'urgent': return 'bg-red-50';
      default: return 'bg-blue-50';
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <header className="px-6 pt-6 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-10 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <GraduationCap size={20} fill="white" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">AlumNet</h1>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
          <Bell size={24} className="text-gray-600" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </header>

      {/* Greeting */}
      <div className="px-6 py-2">
        <p className="text-gray-500 text-sm flex items-center gap-1">
          Todo al día <span className="text-primary">✓</span>
        </p>
      </div>

      {/* Categories */}
      <div className="overflow-x-auto no-scrollbar flex gap-2 px-6 pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200",
              activeTab === cat.id 
                ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105" 
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Feed */}
      <div className="flex flex-col px-6 gap-6 pt-2">
        {filteredMessages.map((msg, index) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link 
              to={`/message/${msg.id}`}
              className="flex items-start gap-4"
            >
              <div className={cn(
                "p-3 rounded-2xl flex-shrink-0 mt-1",
                getIconBg(msg.type)
              )}>
                {getIcon(msg.type)}
              </div>
              
              <div className="flex-1 border-b border-gray-100 pb-6">
                <div className="flex justify-between items-start gap-2 mb-1">
                  <h3 className="font-semibold text-[15px] leading-tight text-slate-800">
                    {msg.title}
                  </h3>
                  <span className="text-[11px] text-gray-400 whitespace-nowrap mt-0.5">
                    {msg.time}
                  </span>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2 mb-2 leading-snug">
                  {msg.description}
                </p>
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                  {msg.author}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
