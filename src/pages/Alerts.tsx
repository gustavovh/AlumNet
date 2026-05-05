import { messages } from '../data/mockData';
import { cn } from '../utils/cn';
import { Bell, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Alerts = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-6 pt-6 pb-4">
        <h1 className="text-2xl font-bold">Alertas</h1>
      </header>

      <div className="flex flex-col px-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Recientes</span>
          <button className="text-xs font-medium text-primary">Marcar todo como leído</button>
        </div>

        <div className="flex flex-col gap-3">
          {messages.map((msg) => (
            <Link 
              key={msg.id}
              to={`/message/${msg.id}`}
              className={cn(
                "p-4 rounded-2xl border transition-all duration-200 flex items-start gap-4",
                msg.read 
                  ? "bg-white border-gray-100 opacity-70" 
                  : "bg-blue-50/30 border-blue-100 shadow-sm"
              )}
            >
              <div className={cn(
                "p-2 rounded-xl",
                msg.read ? "bg-gray-100 text-gray-400" : "bg-primary text-white"
              )}>
                {msg.read ? <CheckCircle size={18} /> : <Bell size={18} className="animate-pulse" />}
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start gap-2 mb-1">
                  <h3 className={cn(
                    "text-sm font-semibold leading-tight",
                    msg.read ? "text-gray-600" : "text-slate-900"
                  )}>
                    {msg.title}
                  </h3>
                  {!msg.read && (
                    <div className="w-2 h-2 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                  <Clock size={12} />
                  <span>Hace 2 horas</span>
                  <span>•</span>
                  <span>{msg.author}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <Bell size={32} className="text-gray-300" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Sin alertas</h3>
            <p className="text-sm text-gray-500 max-w-[200px]">Te avisaremos cuando haya novedades importantes.</p>
          </div>
        )}
      </div>
    </div>
  );
};
