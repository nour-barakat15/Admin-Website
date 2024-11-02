import React from 'react';

// Define a type for news data including imageUrl
type NewsItemProps = {
    title: string;
    department: string;
    imageUrl: string; // Add imageUrl to props
};

const newsData: NewsItemProps[] = [
    {
        title: "Famagusta Municipality is issuing a new statement regarding the bus services.",
        department: "Traffic Department",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },
    {
        title: "Famagusta Municipality is issuing a new statement regarding the bus services.",
        department: "Traffic Department",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },
    {
        title: "Famagusta Municipality is issuing a new statement regarding the bus services.",
        department: "Traffic Department",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },

];

// News item component to improve readability
const NewsItem: React.FC<NewsItemProps> = ({ title, department, imageUrl }) => (
    <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm">
        <img src={imageUrl} alt={title} className="w-12 h-12 rounded-lg mr-4" />
        <div className="flex-grow">
            <p className="text-black font-medium">{title}</p>
            <p className="text-gray-500 text-sm">- By {department}</p>
        </div>
        <button className="ml-4 px-6 py-2 text-md font-medium text-orange-600 bg-orange-100 rounded-full"> {/* Increased padding and font size */}
    Edit
</button>

    </div>
);

const TenderNews: React.FC = () => (
    <div className="p-4 bg-white rounded-lg shadow-md w-140 h-96 overflow-hidden"> {/* Set a fixed height and prevent scrolling */}
        <h2 className="text-Secondary font-semibold text-lg mb-4">Tender news</h2>
        <div className="space-y-4 overflow-y-auto max-h-full"> {/* Allow scrolling for the content */}
            {newsData.map((news, index) => (
                <NewsItem 
                    key={index} 
                    title={news.title} 
                    department={news.department} 
                    imageUrl={news.imageUrl}
                />
            ))}
        </div>
    </div>
);

export default TenderNews;