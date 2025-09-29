import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectCard({
  title='Project',
  description="a good project",
  image='https://avatars.githubusercontent.com/u/139580532?s=400&u=071ec49c6eb4a608ae159594eb7114d7be34f7d8&v=4',
  githubUrl='github.com/negativeInteger',
  liveUrl='github.com/negativeInteger',
  tech = ["React", "Tailwind", "Node.js"],
  highlighted = false,
}) {
  const borderClass = highlighted ? "border-cyan-400" : "border-gray-700";

  return (
    <div
      className={`flex flex-col bg-gray-800/30 rounded-lg p-6 border ${borderClass}
                  transition-all duration-300 hover:border-cyan-400`}
    >
      {/* Project Image */}
      <div className="mb-4">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-md"
          />
        ) : (
          <div className="w-full h-48 bg-gray-700 rounded-md flex items-center justify-center text-gray-400">
            Image Placeholder
          </div>
        )}
      </div>

      {/* Title & Description */}
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm flex-grow">{description}</p>

      {/* Icon Links */}
      <div className="mt-4 flex gap-4">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-2xl transition"
            aria-label="GitHub Repository"
          >
            <FaGithub />
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 text-2xl transition"
            aria-label="Live Demo"
          >
            <FiExternalLink />
          </a>
        )}
      </div>
      {/* Tech Stack */}
      {tech && tech.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((item, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs bg-gray-700 text-cyan-400 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
