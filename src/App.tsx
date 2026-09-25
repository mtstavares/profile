import CredentialsPage from './pages/CredentialsPage'
import CareerPage from './pages/CareerPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectCasePage from './pages/ProjectCasePage'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion'
import { I18nProvider } from './i18n/I18nProvider'
import { AppLayout } from './layouts/AppLayout'
import HomePage from './pages/HomePage'
import ResumePage from './pages/ResumePage'
import NotFoundPage from './pages/NotFoundPage'
const DesignSystemPage = lazy(() => import('./pages/DesignSystemPage'))
export default function App() {
  return (
    <I18nProvider>
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domAnimation} strict>
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<HomePage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="projects/:slug" element={<ProjectCasePage />} />
                <Route path="credentials" element={<CredentialsPage />} />
                <Route path="resume" element={<ResumePage />} />
                <Route path="career" element={<CareerPage />} />
                <Route
                  path="design-system"
                  element={
                    <Suspense
                      fallback={
                        <div className="route-loading" aria-busy="true" />
                      }
                    >
                      <DesignSystemPage />
                    </Suspense>
                  }
                />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </LazyMotion>
      </MotionConfig>
    </I18nProvider>
  )
}
