import { Link } from 'react-router'
import { useI18n } from '../i18n/context'
import { Container, Eyebrow } from '../components/ui/Surface'
import { ResumeDocument } from '../components/common/ResumeDocument'
import { resumeFiles, resumeLabels } from '../content/resume'
export default function ResumePage() {
  const { t, locale } = useI18n()
  return (
    <Container className="resume-page">
      <div className="resume-actions">
        <Eyebrow>{t.resume}</Eyebrow>
        <a
          className="button button--primary"
          href={import.meta.env.BASE_URL + resumeFiles[locale]}
          download={resumeFiles[locale]}
        >
          {resumeLabels[locale].download}
        </a>
        <button
          type="button"
          className="button button--secondary"
          onClick={() => window.print()}
        >
          {resumeLabels[locale].print}
        </button>
        <Link to="/" className="button button--primary">
          {t.backHome}
        </Link>
      </div>
      <ResumeDocument locale={locale} />
    </Container>
  )
}
