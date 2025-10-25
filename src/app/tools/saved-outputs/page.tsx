'use client';
import { useEffect, useState } from 'react';

export default function SavedOutputsPage() {
  const [outputs, setOutputs] = useState([]);

  useEffect(() => {
    fetch('/api/outputs')
      .then(res => res.json())
      .then(data => setOutputs(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Saved Outputs</h1>
      <div className="space-y-4">
        {outputs.map((output: any) => (
          <div key={output.id} className="border p-4 rounded">
            <h3 className="font-bold">{output.name}</h3>
            <p className="text-sm text-gray-500">
              {new Date(output.createdAt).toLocaleString()}
            </p>
            <pre className="mt-2 bg-gray-100 p-2 rounded overflow-x-auto">
              {output.htmlCode.substring(0, 100)}...
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
