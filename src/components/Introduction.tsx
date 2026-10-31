import CanvaArtwork from './CanvaArtwork'

/** Shared copy keeps the desktop sidebar and centred mobile introduction in sync. */
export default function Introduction({ echo = false }: { echo?: boolean }) {
  return (
    <div className="introduction">
      <div className="name-composition">
        <CanvaArtwork file="PHOTO-5.png" className="name-violet" eager />
        <CanvaArtwork file="PHOTO-4.png" className="name-peach" eager />
        <h1>
          <span>Daria</span> <span>Osypova</span>
        </h1>
        {echo && (
          <span className="name-echo" aria-hidden="true">
            Daria
            <br />
            Osypova
          </span>
        )}
      </div>
      <p className="intro-greeting">
        Hi, I’m Daria. <span>Dublin, Ireland</span>
      </p>
      <p className="intro-role">Data Science &amp; AI Student</p>
      <p className="intro-university">at Technological University Dublin</p>
      <p className="intro-description">
        I build software, work with data, and turn ideas into practical solutions.
      </p>
      <span className="intro-discipline">Software Engineer &amp; Data Science Student</span>
    </div>
  )
}

export function IntroActions() {
  return (
    <div className="intro-actions">
      <CanvaArtwork file="PHOTO-2.png" className="button-glow button-glow-one" eager />
      <CanvaArtwork file="PHOTO-3.png" className="button-glow button-glow-two" eager />
      <a className="button" href="#projects">
        View Projects
      </a>
      <a
        className="button"
        href="https://github.com/Askada21"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  )
}
