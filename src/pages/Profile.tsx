import { currentUser } from '../data/mockData';
import { Mail, Shield, Bell, ChevronRight, LogOut } from 'lucide-react';
import { cn } from '../utils/cn';

export const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <header className="px-6 pt-6 pb-2 bg-white">
        <h1 className="text-2xl font-bold">Perfil</h1>
      </header>

      {/* Profile Card */}
      <div className="px-6 py-6 bg-white border-b border-gray-100">
        <div className="relative mb-8 pt-4">
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-blue-500/10 to-blue-500/30 rounded-3xl -z-10 blur-xl opacity-50"></div>
          
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-primary rounded-[2rem] flex items-center justify-center text-white text-3xl font-bold shadow-xl shadow-primary/30 mb-4 border-4 border-white">
              {currentUser.initials}
            </div>
            <h2 className="text-xl font-bold text-slate-800">{currentUser.name}</h2>
            <p className="text-gray-400 text-sm">{currentUser.email}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-slate-50 p-4 rounded-3xl flex flex-col items-center justify-center border border-slate-100">
            <span className="text-xl font-bold text-slate-800">{currentUser.stats.comunicados}</span>
            <span className="text-[10px] font-medium text-gray-500 uppercase tracking-tighter">Comunicados</span>
          </div>
          <div className="bg-slate-50 p-4 rounded-3xl flex flex-col items-center justify-center border border-slate-100">
            <span className="text-xl font-bold text-slate-800">{currentUser.stats.leidos}</span>
            <span className="text-[10px] font-medium text-gray-500 uppercase tracking-tighter">Leídos</span>
          </div>
          <div className="bg-slate-50 p-4 rounded-3xl flex flex-col items-center justify-center border border-slate-100">
            <span className="text-xl font-bold text-blue-600">{currentUser.stats.sinLeer}</span>
            <span className="text-[10px] font-medium text-gray-500 uppercase tracking-tighter">Sin leer</span>
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="p-6 flex flex-col gap-4">
        <div className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm">
          <MenuLink 
            icon={<Mail className="text-blue-500" size={20} />} 
            label="Correo" 
            value={currentUser.email} 
            iconBg="bg-blue-50"
          />
          <MenuLink 
            icon={<Shield className="text-emerald-500" size={20} />} 
            label="Rol" 
            value={currentUser.role}
            iconBg="bg-emerald-50"
          />
          <MenuLink 
            icon={<Bell className="text-amber-500" size={20} />} 
            label="Notificaciones" 
            value="Activas"
            iconBg="bg-amber-50"
            isLast
          />
        </div>

        <button className="w-full mt-2 py-4 bg-red-50 text-red-500 rounded-3xl font-bold flex items-center justify-center gap-2 border border-red-100 hover:bg-red-100 transition-colors">
          <LogOut size={20} />
          <span>Cerrar sesión</span>
        </button>
      </div>
    </div>
  );
};

const MenuLink = ({ icon, label, value, iconBg, isLast }: { icon: React.ReactNode, label: string, value: string, iconBg: string, isLast?: boolean }) => (
  <div className={cn(
    "flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors cursor-pointer",
    !isLast && "border-b border-gray-50"
  )}>
    <div className={cn("p-2.5 rounded-2xl", iconBg)}>
      {icon}
    </div>
    <div className="flex-1">
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">{label}</p>
      <p className="text-sm font-semibold text-slate-800 leading-none">{value}</p>
    </div>
    <ChevronRight size={18} className="text-gray-300" />
  </div>
);
