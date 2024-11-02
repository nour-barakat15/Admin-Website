import { FaBuilding, FaTools, FaUsers, FaClipboard, FaChartLine, FaCalendar } from 'react-icons/fa';

const Cards = () => {
    const cardData = [
        { title: "Total Departments", icon: <FaBuilding size={50} color="#4B3E88" />, total: 10, bgColor: "bg-custom-departments" },  // Darker shade of background
        { title: "Total Services", icon: <FaTools size={50} color="#A53C47" />, total: 25, bgColor: "bg-custom-services" },   // Darker shade of background
        { title: "Total Users", icon: <FaUsers size={50} color="#4C8DB3" />, total: 100, bgColor: "bg-custom-users" },       // Darker shade of background
        { title: "Total Requests", icon: <FaClipboard size={50} color="#A16B39" />, total: 50, bgColor: "bg-custom-requests" },    // Darker shade of background
        { title: "Total Reports", icon: <FaChartLine size={50} color="#A34DC7" />, total: 75, bgColor: "bg-custom-reports" },     // Darker shade of background
        { title: "Total Appointments", icon: <FaCalendar size={50} color="#2DAA57" />, total: 30, bgColor: "bg-custom-appointments" }, // Darker shade of background
    ];

    return (
        <div className="flex flex-wrap">
            <div className="flex p-5 gap-12">
                {cardData.map((card, index) => (
                    <div key={index} className={`flex flex-col justify-center items-center w-40 h-40 rounded-lg cursor-pointer shadow-md ${card.bgColor}`}>
                        <div className="mb-2"> {/* Adjust margin-bottom to space the icon from the title */}
                            {card.icon} {/* Use the relevant icon */}
                        </div>
                        <h2 className="text-black font-semibold">{card.title}</h2> {/* Changed text color to black */}
                        <p className="text-black text-lg mt-1">{card.total}</p> {/* Display total number */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards; // Export the component with the new name
