import { useTranslation } from 'react-i18next';
import Text from './Text';

export default function FooterInc() {
  const { t } = useTranslation();
  return (
    <footer className="text-center py-15">
      <Text as="p" variant={'body-md-secundary'}>
        {t('connect.right')}
      </Text>
    </footer>
  );
}
