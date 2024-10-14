import React, {createContext, useContext, useState} from 'react'

interface NotificationContextProps {
  showNotification: (message: string, severity: 'success' | 'error') => void
}

const NotificationContext = createContext<NotificationContextProps | undefined>(
  undefined,
)

export const NotificationProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [severity, setSeverity] = useState<'success' | 'error'>('success')

  const showNotification = (message: string, severity: 'success' | 'error') => {
    setMessage(message)
    setSeverity(severity)
    setOpen(true)

    setTimeout(() => {
      setOpen(false)
    }, 6000)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {open && (
        <div
          role="alert"
          className={`notification ${severity === 'success' ? 'success' : 'success'}`}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '.5rem',
            borderRadius: '5px',
            backgroundColor: severity === 'success' ? 'green' : 'red',
            color: 'white',
            zIndex: 1000,
          }}
        >
          <div>
            {message}
            <button
              style={{
                marginLeft: '1rem',
                background: 'transparent',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
              }}
              onClick={handleClose}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </NotificationContext.Provider>
  )
}

export const useNotification = (): NotificationContextProps => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error(
      'useNotification must be used within a NotificationProvider',
    )
  }
  return context
}
