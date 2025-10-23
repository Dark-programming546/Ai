import ContentCard from "../components/ContentCard";

function Dashboard() {
  // For now, mock data
  const mockContents = [
    { title: "Sample Content 1", description: "This is a test content." },
    { title: "Sample Content 2", description: "Another example content." },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      {mockContents.map((content, index) => (
        <ContentCard 
          key={index} 
          title={content.title} 
          description={content.description} 
        />
      ))}
    </div>
  );
}

export default Dashboard;
