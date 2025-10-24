import { useState } from "react";
import ContentCard from "../components/ContentCard";

function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const [contents, setContents] = useState([]);

  const handleGenerate = (e) => {
    e.preventDefault();
    if (prompt.trim() === "") return;

    const newContent = {
      title: `AI Result for: ${prompt}`,
      description: "This is a generated example response.",
    };

    setContents([newContent, ...contents]);
    setPrompt("");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      <form onSubmit={handleGenerate} className="mb-4 flex gap-2">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter a prompt..."
          className="border p-2 flex-grow rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded"
        >
          Generate
        </button>
      </form>

      {contents.length === 0 ? (
        <p className="text-gray-500">No content yet. Try generating one!</p>
      ) : (
        contents.map((content, index) => (
          <ContentCard
            key={index}
            title={content.title}
            description={content.description}
          />
        ))
      )}
    </div>
  );
}

export default Dashboard;
