import { useTranslation } from "react-i18next";
import Text from "./Text";
import DividerLine from "./DividerLine";

export default function Experience() {
  const { t } = useTranslation();
  const jobs = t("experience.jobs", { returnObjects: true });
  return (
    <section className="flex flex-col gap-4">
      <Text as="h3" variant="heading-lg">
        {t("experience.heading")}
      </Text>
      <ul className="flex flex-col">
        {jobs.map((job) => (
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
              {job.projects.map((item) => (
                <li key={item.bullets} className="flex flex-col">
                  <Text as="h3" variant="body-md">
                    {item.title}
                  </Text>
                  <ul className="flex flex-col px-2 py-2 gap-1 ">
                    {item.bullets.map((item) => (
                      <li>
                        <Text as="span" variant="subHeading-sm">
                          &#x2022; {item}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <DividerLine />
    </section>
  );
}
