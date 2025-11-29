import { Briefcase, Calendar, Building } from "lucide-react";

const TYPE = {
  internship: ["bg-[#00eaff]/20 text-[#00eaff] border border-[#00eaff]/40", "Internship"],
  organization: ["bg-[#17ff3f]/20 text-[#17ff3f] border border-[#17ff3f]/40", "Organization"],
  project: ["bg-[#fcee0a]/20 text-[#fcee0a] border border-[#fcee0a]/40", "Project"],
  part_time: ["bg-[#ff003c]/20 text-[#ff003c] border border-[#ff003c]/40", "Part-time"],
  volunteer: ["bg-[#ff00bb]/20 text-[#ff00bb] border border-[#ff00bb]/40", "Volunteer"],
  competition: ["bg-[#ff7b00]/20 text-[#ff7b00] border border-[#ff7b00]/40", "Competition"],
};

const Experiences = ({ experiences }) => {
  if (!experiences?.length)
    return (
      <Card title="Experience" icon={Briefcase}>
        <p className="text-center text-gray-400">No experience data available.</p>
      </Card>
    );

  return (
    <Card title="Experience" icon={Briefcase}>
      <div className="space-y-6">
        {experiences.map((exp) => {
          const [badgeColor, label] = TYPE[exp.experience_type] ?? [
            "bg-gray-700 text-gray-300",
            exp.experience_type,
          ];

          return (
            <div key={exp.id} className="border-l-2 border-[#fcee0a] pl-4">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold text-[#00eaff] text-lg">{exp.title}</h3>
                <span className={`px-2 py-1 rounded text-xs ${badgeColor}`}>
                  {label}
                </span>
              </div>

              <Info icon={Building} text={exp.organization} />
              <Info
                icon={Calendar}
                text={`${format(exp.start_date)} - ${
                  exp.is_current ? "Present" : format(exp.end_date)
                }`}
              />

              <p className="text-gray-300 text-sm mt-2 mb-3">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {(exp.technologies ?? []).map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded text-xs bg-[#222] border border-[#fcee0a]/40 text-[#fcee0a]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

const Info = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-2 text-sm text-gray-400">
    <Icon className="w-3 h-3 text-[#fcee0a]" /> {text}
  </div>
);

const format = (d) =>
  !d
    ? "Present"
    : new Date(d).toLocaleDateString("en-US", { month: "short", year: "numeric" });

const Card = ({ title, icon: Icon, children }) => (
  <div className="bg-[#0d0d0d] p-6 rounded-xl border border-[#00eaff]/40 shadow-[0_0_20px_#00eaff55] mb-6">
    <div className="flex items-center gap-2 mb-6">
      <Icon className="w-5 h-5 text-[#00eaff]" />
      <h2 className="text-xl font-bold text-[#00eaff]">{title}</h2>
    </div>
    {children}
  </div>
);

export default Experiences;
