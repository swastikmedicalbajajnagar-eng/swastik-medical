type Props = {
    title: string;
    value: string | number;
    color?: string;
  };
  
  export default function DashboardCard({
    title,
    value,
    color = "text-green-600",
  }: Props) {
    return (
      <div className="bg-white rounded-2xl shadow border p-6 hover:shadow-lg transition">
  
        <h3 className="text-gray-500 text-sm font-medium">
          {title}
        </h3>
  
        <p className={`text-4xl font-bold mt-4 ${color}`}>
          {value}
        </p>
  
      </div>
    );
  }