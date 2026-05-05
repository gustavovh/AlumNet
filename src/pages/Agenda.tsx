import { useState } from 'react';
import { events } from '../data/mockData';
import { cn } from '../utils/cn';
import { ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const days = [
  { name: 'DOM', date: 3 },
  { name: 'LUN', date: 4 },
  { name: 'MAR', date: 5 },
  { name: 'MIÉ', date: 6 },
  { name: 'JUE', date: 7 },
  { name: 'VIE', date: 8 },
  { name: 'SÁB', date: 9 },
];

export const Agenda = () => {
  const [selectedDate, setSelectedDate] = useState(5); // Default to May 5th

  const filteredEvents = events.filter(e => {
    const day = parseInt(e.date.split('-')[2]);
    return day === selectedDate;
  });

  const getEventColor = (type: string) => {
    switch (type) {
      case 'examen': return 'text-red-500 bg-red-50 border-red-100';
      case 'reunion': return 'text-blue-500 bg-blue-50 border-blue-100';
      case 'evento': return 'text-amber-500 bg-amber-50 border-amber-100';
      default: return 'text-gray-500 bg-gray-50 border-gray-100';
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-6 pt-6 pb-2">
        <h1 className="text-2xl font-bold">Agenda</h1>
      </header>

      {/* Date Navigation */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">MAYO 2026</span>
          <div className="flex gap-2">
            <button className="p-1 hover:bg-gray-100 rounded-full text-gray-400">
              <ChevronLeft size={20} />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded-full text-gray-400">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="flex justify-between">
          {days.map((day) => (
            <button
              key={day.date}
              onClick={() => setSelectedDate(day.date)}
              className={cn(
                "flex flex-col items-center gap-1.5 p-2 rounded-2xl transition-all duration-300 w-[48px]",
                selectedDate === day.date 
                  ? "bg-primary text-white shadow-lg shadow-primary/30 scale-110" 
                  : "bg-gray-50 text-gray-400 hover:bg-gray-100"
              )}
            >
              <span className="text-[10px] font-bold">{day.name}</span>
              <span className="text-lg font-bold leading-none">{day.date}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Events List */}
      <div className="px-6 flex flex-col gap-4 mt-2">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">PRÓXIMOS EVENTOS</h3>
        
        <AnimatePresence mode="popLayout">
          <motion.div 
            key={selectedDate}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3"
          >
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <div 
                  key={event.id}
                  className="bg-white border border-gray-100 p-4 rounded-3xl flex items-center gap-4 shadow-sm"
                >
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex flex-col items-center justify-center border",
                    getEventColor(event.type)
                  )}>
                    <span className="text-[9px] font-bold uppercase leading-none">{days.find(d => d.date === selectedDate)?.name}</span>
                    <span className="text-lg font-bold leading-none">{selectedDate}</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-slate-800">{event.label}</h4>
                      {selectedDate === 5 && (
                        <span className="text-[10px] font-bold bg-blue-50 text-primary px-2 py-0.5 rounded-full">Hoy</span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{event.room}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                  <Calendar size={28} className="text-slate-200" />
                </div>
                <p className="text-sm font-medium text-slate-400">No hay eventos para este día</p>
              </div>
            )}

            {/* Always show some future events for visual richness if selected day has few */}
            {selectedDate === 5 && (
               <div className="mt-4 flex flex-col gap-3">
                 <h4 className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-2">Mañana</h4>
                 {events.filter(e => parseInt(e.date.split('-')[2]) === 6).map(event => (
                    <div 
                      key={event.id}
                      className="bg-white/50 border border-gray-100 p-4 rounded-3xl flex items-center gap-4 opacity-60"
                    >
                      <div className={cn(
                        "w-12 h-12 rounded-2xl flex flex-col items-center justify-center border",
                        getEventColor(event.type)
                      )}>
                        <span className="text-[9px] font-bold uppercase leading-none">MIÉ</span>
                        <span className="text-lg font-bold leading-none">6</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800">{event.label}</h4>
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{event.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                 ))}
               </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const Calendar = ({ size, className }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);
