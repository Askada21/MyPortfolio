import { useEffect, useRef } from 'react'
import { returnHome } from '../hooks/usePageRoute'

export default function PageNotice({ title }: { title: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    dialog?.showModal()
    return () => dialog?.close()
  }, [])

  return (
    <dialog
      ref={dialogRef}
      className="page-notice"
      aria-labelledby="notice-title"
      aria-describedby="notice-description"
      onCancel={(event) => {
        event.preventDefault()
        returnHome()
      }}
    >
      <p className="notice-eyebrow">COMING SOON</p>
      <h2 id="notice-title">{title}</h2>
      <p id="notice-description">This page is on its way. Explore the home page for now.</p>
      <button className="action-link" type="button" onClick={returnHome}>
        Back to home
      </button>
    </dialog>
  )
}
