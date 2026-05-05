import { useParams, useNavigate } from 'react-router-dom';
import { messages } from '../data/mockData';
import { ChevronLeft, Calendar, GraduationCap, AlertTriangle, Megaphone, Clock, User } from 'lucide-react';
import { cn } from '../utils/cn';

export const MessageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const message = messages.find(m => m.id === id);

  if (!message) {
    return (
      <div className="p-10 text-center">
        <p>Comunicado no encontrado</p>
        <button onClick={() => navigate('/')} className="mt-4 text-primary">Volver</button>
      </div>
    );
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'academic': return <GraduationCap size={20} />;
      case 'event': return <Calendar size={20} />;
      case 'urgent': return <AlertTriangle size={20} />;
      default: return <Megaphone size={20} />;
    }
  };

  const getBadgeStyles = (type: string) => {
    switch (type) {
      case 'academic': return 'bg-emerald-50 text-emerald-600';
      case 'event': return 'bg-amber-50 text-amber-600';
      case 'urgent': return 'bg-red-50 text-red-600';
      default: return 'bg-blue-50 text-blue-600';
    }
  };

  const getLabel = (type: string) => {
    switch (type) {
      case 'academic': return 'Académico';
      case 'event': return 'Evento';
      case 'urgent': return 'Urgente';
      default: return 'Comunicado';
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 flex items-center gap-4 sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-2xl text-gray-600 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-bold truncate">Detalle</h1>
      </div>

      <div className="px-6 py-4">
        <div className={cn(
          "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6",
          getBadgeStyles(message.type)
        )}>
          {getIcon(message.type)}
          <span>{getLabel(message.type)}</span>
        </div>

        <h2 className="text-2xl font-black text-slate-800 leading-tight mb-4">
          {message.title}
        </h2>

        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2 text-gray-400">
            <Clock size={16} />
            <span className="text-sm font-medium">{message.time} • {message.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <User size={16} />
            <span className="text-sm font-medium">{message.author}</span>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <div className="text-slate-600 leading-relaxed whitespace-pre-line text-base">
            {message.content}
          </div>
        </div>

        {/* Footer info/Action */}
        <div className="mt-12 p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100">
          <h4 className="font-bold text-slate-800 mb-4">Actividades relacionadas</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-slate-600">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
              <span>Revisar materiales en plataforma</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-600">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
              <span>Confirmar asistencia</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
