import Text from './Text';

export default function ExperienceItem({ job }) {
  return (
    <li>
      <Text as="h1" variant="heading-lg">
        {job.company}
      </Text>
      <div className="flex justify-between py-4">
        <Text as="h3" variant="subHeading-sm">
          {job.role}
        </Text>
        <Text
          as="span"
          variant="subHeading-sm"
          className="relative inline-flex items-center rounded-xl bg-surface border border-non-interactive px-3"
        >
          {job.period}
        </Text>
      </div>
      <ul>
        {job.projects.map((project, pIndex) => (
          <li key={pIndex} className="flex flex-col">
            <Text as="h3" variant="body-md">
              {project.title}
            </Text>
            <ul className="flex flex-col px-2 py-2 gap-1 ">
              {project.bullets.map((bullet, bIndex) => (
                <li key={bIndex}>
                  <Text as="span" variant="subHeading-sm">
                    &#x2022; {bullet}
                  </Text>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </li>
  );
}
