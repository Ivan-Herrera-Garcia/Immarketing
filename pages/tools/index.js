import { useState } from 'react';
import dynamic from 'next/dynamic';
const TikTokDownloader = dynamic(() => import('@/components/down_tiktok'), { ssr: false });

const toolsList = [
  { id: 'crear-tarea', name: 'Crear Tarea', icon: 'fas fa-tasks', color: 'text-blue-400' },
  { id: 'descargar-facebook', name: 'Facebook Downloader', icon: 'fab fa-facebook', color: 'text-blue-500' },
  { id: 'descargar-tiktok', name: 'Tiktok Downloader', icon: 'fab fa-tiktok', color: 'text-blue-500' },
  { id: 'youtube-downloader', name: 'YouTube Downloader', icon: 'fab fa-youtube', color: 'text-red-500' },
  { id: 'pdf-merger', name: 'Unir PDF', icon: 'fas fa-file-pdf', color: 'text-rose-500' },
  { id: 'image-compressor', name: 'Comprimir Imagen', icon: 'fas fa-compress', color: 'text-green-400' },
  { id: 'qr-generator', name: 'Generar QR', icon: 'fas fa-qrcode', color: 'text-purple-400' },
  { id: 'icon-finder', name: 'Buscar Iconos', icon: 'fas fa-icons', color: 'text-yellow-400' },
  // Agrega más herramientas aquí fácilmente
];

export default function Tools() {
  const [selectedTool, setSelectedTool] = useState(toolsList[0].id);

  const renderContent = () => {
    const tool = toolsList.find(t => t.id === selectedTool);
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">{tool?.name}</h2>
        <p className="text-gray-600">Aquí iría la funcionalidad de {tool?.name}.</p>
        {
            tool.id == 'descargar-tiktok' ? (
                <div className="mt-4">
                    <h3 className="text-xl font-semibold">Descargar video de TikTok</h3>
                    <TikTokDownloader />
                </div>
                ) : (
                <p className="text-gray-600">Funcionalidad específica para {tool?.name}.</p>
                )
        }
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar / Navbar */}
      <aside className="bg-gray-900 text-white flex md:flex-col md:w-20 w-full overflow-x-auto md:overflow-x-hidden py-2 md:py-4 md:space-y-6 space-x-4 md:space-x-0 px-2 md:px-0">
        {toolsList.map(tool => (
          <button
            key={tool.id}
            onClick={() => setSelectedTool(tool.id)}
            className={`flex flex-col items-center md:justify-center md:items-center whitespace-nowrap ${
              selectedTool === tool.id ? 'text-white' : tool.color
            } hover:text-white transition`}
          >
            <i className={`${tool.icon} text-xl md:text-2xl`}></i>
            <span className="text-xs md:hidden">{tool.name}</span>
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        {renderContent()}
      </main>
    </div>
  );
}
