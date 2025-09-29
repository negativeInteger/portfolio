import { Briefcase } from "lucide-react"; // or any icon from lucide-react

export default function Experience({ experiences = [] }) {
  return (
    <section className="py-12 px-6">
      <div className="max-w-[58rem] mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <Briefcase className="text-cyan-400" />
          Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-gray-800/30 border border-gray-700 hover:border-cyan-400
                         rounded-lg p-6 transition-all duration-300"
            >
              {/* Top Row: Company + Duration */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-white">
                  {exp.role} <span className="text-cyan-400">@ {exp.company}</span>
                </h3>
                <span className="text-sm text-gray-400 mt-1 sm:mt-0">
                  {exp.duration}
                </span>
              </div>

              {/* Location */}
              {exp.location && (
                <p className="text-sm text-gray-400 mb-3">{exp.location}</p>
              )}

              {/* Responsibilities */}
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              {exp.tech && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-gray-700 text-cyan-400 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
