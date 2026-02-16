interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "150+", label: "Proyectos" },
  { value: "35", label: "Años Exp." },
  { value: "98%", label: "Satisfacción" },
];

const StatCounter = () => {
  return (
    <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-2xl font-bold text-white">{stat.value}</p>
          <p className="text-xs text-gray-300 uppercase tracking-wide">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatCounter;
