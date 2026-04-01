import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Text from './Text';
import DividerLine from './DividerLine';
import { Link, useParams } from 'react-router-dom';
import ExperienceItem from './ExperienceItem';
import { ArrowRight } from 'lucide-react';

export default function Experience({ isHome = false }) {
  const { t } = useTranslation();
  const rawJobs = t('experience.jobs', { returnObjects: true });
  const { lang } = useParams();

  const displayedJobs = useMemo(() => {
    if (isHome) {
      return rawJobs.slice(0, 1);
    }
    return rawJobs;
  }, [isHome, rawJobs]);

  return (
    <section className="flex flex-col gap-4">
      <Text as="h3" variant="heading-lg">
        {t('experience.heading')}
      </Text>
      <ul className="flex flex-col gap-4">
        {displayedJobs.map((job, index) => (
          <ExperienceItem key={index} job={job} />
        ))}
      </ul>
      {isHome && (
        <div className="max-w-32 mt-2">
          <Text
            as={Link}
            to={`/${lang}/experiencia`}
            variant="subHeading-sm"
            className="hover:text-primary transition-colors flex flex-row items-center cursor-pointer gap-1"
          >
            {t('projects.button')} <ArrowRight size={15} />
          </Text>
        </div>
      )}
      <DividerLine />
    </section>
  );
}
