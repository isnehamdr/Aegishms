import {
  FaUsers,
  FaBuilding,
  FaMapMarkerAlt,
  FaUserFriends,
  FaWrench,
  FaVideo,
  FaHeadset
} from 'react-icons/fa';

export default function AegisSnapshot() {
  const StatCard = ({ title, items }) => (
    <div className="bg-white border-2 border-gray-300 rounded-2xl overflow-hidden">
      <div className="bg-[#307aa7] text-white py-2.5 px-4 text-center sm:text-left">
        <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
      </div>
      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 sm:gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex-shrink-0 flex items-center justify-center text-[#307aa7]mt-0.5">
                {item.icon}
              </div>
              <div>
                <p className="text-gray-600 text-xs sm:text-sm mb-1">{item.label}</p>
                <div className="border-t-2 border-gray-300 pt-1.5">
                  <p className="text-lg sm:text-xl font-bold">{item.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  const TwoStatCard = ({ title, items }) => (
    <div className="bg-white border-2 border-gray-300 rounded-2xl overflow-hidden">
      <div className="bg-[#307aa7] text-white py-2.5 px-4 text-center sm:text-left">
        <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
      </div>
      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 sm:gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex-shrink-0 flex items-center justify-center text-[#307aa7]mt-0.5">
                {item.icon}
              </div>
              <div>
                <p className="text-gray-600 text-xs sm:text-sm mb-1">{item.label}</p>
                <div className="border-t-2 border-gray-300 pt-1.5">
                  <p className="text-lg sm:text-xl font-bold">{item.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div 
      className=""
   
    >
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Left Column - Title */}
          <div className="lg:col-span-2 flex items-start">
            <div className="sticky top-6 lg:top-20">
              <h2 className="text-[#307aa7] sm:max-w-xs text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Aegis  Snapshot
              </h2>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="lg:col-span-4 space-y-8">
            <StatCard
              title="Our Customers"
              items={[
                { icon: <FaUsers size={24} />, label: "Our Customers", value: "400+" },
                { icon: <FaBuilding size={24} />, label: "Rooms From", value: "5 to 150+" },
                { icon: <FaMapMarkerAlt size={24} />, label: "Customer Locations", value: "475" },
              ]}
            />

            <StatCard
              title="Our Team"
              items={[
                { icon: <FaUserFriends size={24} />, label: "Team", value: "60+" },
                { icon: <FaWrench size={24} />, label: "Onsite Implementation", value: "7 provinces" },
                { icon: <FaWrench size={24} />, label: "Technical Support", value: "7 provinces" },
              ]}
            />

            <TwoStatCard
              title="Our Support"
              items={[
                { icon: <FaVideo size={24} />, label: "Self Help Videos", value: "50+" },
                { 
                  icon: <FaHeadset size={24} />, 
                  label: "Channels of Support", 
                  value: "Email, Chat, Call, Issue Submission, Ticketing Portal" 
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}