import { notFound } from "next/navigation";

export default function HomePage() {
  return (
    <main className="bg-gray-50 font-sans">
      
      <header className="bg-white p-4 shadow-sm flex justify-beetwen items-center">
    <p className="text-xl font-bolt"></p>
    <nav className="text-sm flex gap-4">
      <a href="#steps"
      className="hover:text-blue-600 transition-colors">Услуги </a>
      <a href="#services"
      className="hover:text-blue-600 transition-colors">Услуги</a>
      </nav>
      </header>

      <section className="bg-[#1a2a52] p-10 text-white">
        <h1 className="text-3xl font-bold mb-4">Фулфилмент, который держит сроки и репутацию</h1>
        <p className="mb-6">Автоматизированная упаковка, видеоконтроль каждого заказа и отправки в 
          день поступления. Мы берём на себя 
          хранение, сборку, маркеровку и логистику.</p>
        <a href="#" className="bg-blue-500 px-6 py-2 rounded mb-8 inline-block">Оставить заявку</a>
        
        <div className="flex gap-8 mb-8 border-t border-blue-800 pt-4">
          <div><p className="font-bold">5000+ заказов в день</p></div>
          <div><p className="font-bold">99,8% точность сборки</p></div>
          <div><p className="font-bold">FBO/FBS все маркетплейсы</p></div>
        </div>
        
        <div className="bg-gray-300 h-48 w-full rounded flex items-center justify-center text-black">
          [Видео]
        </div>
      </section>

      <section id="steps" className="p-10">
        <h2 className="text-2xl font-bold text-center mb-6">Как начать работать с</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7].map((step) => (
            <div key={step} className="rounded-[10px] bg-[#f0f0f0] p-4">
              <p className="text-xs font-bold mb-2 text-blue-600">ШАГ {step}</p>
              <h3 className="font-bold">Заголовок шага</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="bg-white p-10">
        <h2 className="text-2xl font-bold text-center mb-6">Услуги</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1].map((service) => (
            <div key={service} className="border p-4 rounded-[10px]">
              <h3 className="font-bold">приёмка {service}</h3>
            </div>
            
          ))}
        </div>
      </section>

      <section id="why"
      className="bg-[#1a2a52] p-10 text-white">
        <h2 className="text-2xl font-bold text-centr mb-6">Почему выбирают BOXPACK</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[1,2,3,4].map((reason) => (<div key={reason} 
          className="border border-blue-800 p-4 rounded-lg bg-[#1e3061]">
             <h3 className="font-bold text-lg mb-2">Причина {reason}</h3>
             <p className="text-sm text-gray-300>">ОПИСАНИЕ ВАСИ</p> 
            constructor(parameters)
              </div>
              ))}
        </div>
      </section>
      </main>
            );
          }