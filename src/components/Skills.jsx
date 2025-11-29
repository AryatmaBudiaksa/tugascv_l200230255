import { Code } from "lucide-react";

const LEVEL = {
  advanced: 100,
  intermediate: 70,
  beginner: 30,
};

const ICONS = {
  ReactJS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Django REST Framework":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
};

const Skills = ({ skills }) => {
  if (!skills?.length)
    return (
      <Card title="Skills & Expertise" icon={Code}>
        <p className="text-center text-gray-400">No skill data available.</p>
      </Card>
    );

  return (
    <Card title="Skills & Expertise" icon={Code}>
      <div className="space-y-4">
        {skills.map((s) => (
          <div key={s.id} className="flex gap-4 p-4 border border-[#fcee0a]/40 rounded-lg bg-[#111]">
            
            {ICONS[s.name] && (
              <img
                src={ICONS[s.name]}
                alt={s.name}
                className="w-12 h-12 bg-[#222] p-2 rounded-lg border border-[#00eaff]/40"
              />
            )}

            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-semibold text-[#00eaff]">{s.name}</h3>
                <span className="text-sm text-[#fcee0a]">{s.level}</span>
              </div>

              {s.years_of_experience && (
                <p className="text-sm text-gray-400">
                  {s.years_of_experience} year(s)
                </p>
              )}

              <Progress value={LEVEL[s.level] ?? 50} />

              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>{LEVEL[s.level] ?? 50}%</span>
                {s.is_main && (
                  <span className="px-2 py-0.5 rounded bg-[#17ff3f]/20 text-[#17ff3f] border border-[#17ff3f]/40">
                    Main Skill
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

const Progress = ({ value }) => (
  <div className="w-full h-2 bg-[#222] rounded-full mt-2">
    <div
      className="h-2 bg-[#00eaff] rounded-full shadow-[0_0_10px_#00eaff]"
      style={{ width: value + "%" }}
    />
  </div>
);

const Card = ({ children, title, icon: Icon }) => (
  <div className="bg-[#0d0d0d] p-6 rounded-xl border border-[#ff00bb]/40 shadow-[0_0_20px_#ff00bb55] mb-6">
    <div className="flex items-center gap-2 mb-6">
      <Icon className="w-5 h-5 text-[#ff00bb]" />
      <h2 className="text-xl font-bold text-[#ff00bb]">{title}</h2>
    </div>
    {children}
  </div>
);

export default Skills;
