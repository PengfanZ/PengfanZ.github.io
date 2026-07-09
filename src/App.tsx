import { AppShell } from '@mantine/core'
import { useHashNavigation } from './hooks/useHashNavigation'
import { SiteFooter } from './layout/SiteFooter'
import { SiteHeader } from './layout/SiteHeader'
import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { EducationSection } from './sections/EducationSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { HeroSection } from './sections/HeroSection'
import { SkillsSection } from './sections/SkillsSection'
import { WorkSection } from './sections/WorkSection'
import classes from './App.module.css'

function App() {
  useHashNavigation()

  return (
    <>
      <a className={classes.skipLink} href="#main-content">
        Skip to content
      </a>
      <AppShell
        className={classes.shell}
        header={{ height: { base: 76, sm: 92 } }}
        padding={0}
      >
        <SiteHeader />
        <AppShell.Main id="main-content">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <WorkSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
          <SiteFooter />
        </AppShell.Main>
      </AppShell>
    </>
  )
}

export default App
