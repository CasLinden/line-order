import { useEffect } from 'react';

function ClickShield({position}) {
    useEffect(() => {
            const clickShieldElement = document.querySelector(`.click-shield-${position}`);

            if(position === 'top') {
                const projectorScreenRect = document.querySelector('.projector-screen').getBoundingClientRect();
                clickShieldElement.style.setProperty('--topOffset', `${projectorScreenRect.top}px`);
            }

            if(position === 'bottom') {
                const slideControlsRect = document.querySelector('.slide-controls').getBoundingClientRect();
                clickShieldElement.style.setProperty('--bottomOffset', `${slideControlsRect.bottom}px`);
            }
        })

    return (
        <div className={`click-shield-${position}`}></div>
    );
}

export default ClickShield;