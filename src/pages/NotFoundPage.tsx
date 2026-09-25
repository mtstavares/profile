import { Link } from 'react-router'
import { useI18n } from '../i18n/context'
import { Container, Eyebrow } from '../components/ui/Surface'
export default function NotFoundPage() {
  const { t } = useI18n()
  return (
    <Container className="not-found">
      <Eyebrow>404</Eyebrow>
      <h1>{t.missingTitle}</h1>
      <p>{t.missingBody}</p>
      <Link className="button button--primary" to="/">
        {t.backHome}
      </Link>
    </Container>
  )
}
