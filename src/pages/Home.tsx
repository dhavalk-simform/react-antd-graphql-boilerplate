import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()
  return <h1>{t('welcome_to_simform')}</h1>
}

export default Home
