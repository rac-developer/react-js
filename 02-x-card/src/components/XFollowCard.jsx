import { useState, useEffect } from 'react'

export default function XFollowCard({children, userName, initialIsFollowing}) {
  const imageSrc = `https://unavatar.io/${userName}`
  
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'

  console.log('[TwitterFollowCard] render with userName: ', userName)

  const buttonClassName = isFollowing
  ? 'tw-followCard-button is-following'
  : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <div>
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img
          className='tw-followCard-avatar'
          src={imageSrc} alt={userName} />
          <div className='tw-followCard-info'>
            <strong>{children}</strong>
            <span className='tw-followCard-infoUserName'>@{userName}</span>
          </div>
        </header>

        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            <span className='tw-followCard-text'>{text}</span>
            <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
          </button>
        </aside>
      </article>
    </div>
  )
}
