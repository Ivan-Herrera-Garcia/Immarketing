import { useState } from 'react';

export default function TikTokDownloader() {
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleDownload = async () => {
    setMessage('Descargando...');
    try {
      const res = await fetch('/api/descargar-tiktok', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Error al procesar la solicitud');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Descargar video de TikTok</h1>
      <input
        type="text"
        placeholder="URL del video"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />
      <button
        onClick={handleDownload}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Descargar
      </button>
      <p className="mt-4">{message}</p>
    </div>
  );
}
