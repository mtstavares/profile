import { Link } from 'react-router'
import { profile } from '../../content/profile'
import { Container } from '../ui/Surface'
import { SocialLink } from '../common/SocialLink'
export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <Link to="/" className="wordmark" aria-label={profile.name}>
          {profile.wordmark}
          <span>.</span>
        </Link>
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <div className="footer-socials">
          {profile.socials.map((social) => (
            <SocialLink key={social.id} social={social} />
          ))}
        </div>
      </Container>
    </footer>
  )
}
