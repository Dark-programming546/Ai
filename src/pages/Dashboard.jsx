import { useState } from "react";
import ContentCard from "../components/ContentCard";

function Dashboard() {
  const [prompt, setPrompt] = useState("");          // input value
  const [contents, setContents] = useState([]);      // list of contents

  const handleGenerate = (e) => {
    e.preventDefault();

    if (prompt.trim() === "") return; // ignore empty input

    // For now, just mock AI-generated content
    const newContent = {
      title: `AI Result for: ${prompt}`,
      description: "This is a generated example response.",
    };

    // Add new content to the list
    setContents([newContent, ...contents]);
    setPrompt(""); // clear input field
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      {/* Input Form */}
      <form onSubmit={handleGenerate} className="mb-4 flex gap-2">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter a prompt (e.g. Write a blog intro...)"
          className="border p-2 flex-grow rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 rounded">
          Generate
        </button>
      </form>

      {/* Display all generated content */}
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
