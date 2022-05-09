function Moon({ className, style }) {
  return (
    <div
      className={className}
      style={{ overflow: 'initial!important', ...style }}
    >
      <svg
        viewBox='-100 0 1510 855'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g filter='url(#filter0_f_237_1644)'>
          <circle
            id='moonblur'
            cx='522'
            cy='415'
            r='374'
            fill='url(#paint0_radial_237_1644)'
          />
        </g>
        <circle
          id='moon'
          cx='522'
          cy='415'
          r='374'
          fill='url(#paint1_radial_237_1644)'
        />
        <circle
          id='mooninside'
          opacity='0.79'
          cx='521.558'
          cy='414.558'
          r='343.496'
          fill='url(#paint2_radial_237_1644)'
        />
        <circle
          id='moonborder'
          className='rotate-360'
          cx='522'
          cy='415'
          r='414'
          stroke='url(#paint3_radial_237_1644)'
          strokeWidth='2'
        />
        <g filter='url(#filter1_f_237_1644)'>
          <path
            id='moonring'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M637.264 648.541C947.029 521.774 1164.99 335.893 1124.1 233.366C1096.1 163.165 953.998 150.243 767.74 189.766C898.153 167.728 993.675 179.849 1013.51 229.588C1046.21 311.568 860.933 464.698 599.68 571.612C338.427 678.527 100.132 698.741 67.4334 616.76C50.6106 574.584 91.4835 513.575 170.715 449.716C45.9106 540.119 -22.0995 631.16 2.33975 692.432C43.2343 794.959 327.5 775.309 637.264 648.541Z'
            fill='url(#paint4_linear_237_1644)'
          />
        </g>
        <path
          id='moonringblur'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M637.264 648.541C947.029 521.774 1164.99 335.893 1124.1 233.366C1096.1 163.165 953.998 150.243 767.741 189.766C898.153 167.728 993.675 179.849 1013.51 229.588C1046.21 311.568 860.933 464.698 599.68 571.612C338.427 678.527 100.132 698.741 67.4334 616.76C50.6106 574.584 91.4836 513.575 170.715 449.715C45.9107 540.118 -22.0994 631.16 2.33982 692.432C43.2344 794.959 327.5 775.309 637.264 648.541Z'
          fill='url(#paint5_linear_237_1644)'
        />
        <defs>
          <filter
            id='filter0_f_237_1644'
            x='108'
            y='1'
            width='828'
            height='828'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              stdDeviation='20'
              result='effect1_foregroundBlur_237_1644'
            />
          </filter>
          <filter
            id='filter1_f_237_1644'
            x='-82.5913'
            y='87.6795'
            width='1291.62'
            height='750.439'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              stdDeviation='40'
              result='effect1_foregroundBlur_237_1644'
            />
          </filter>
          <radialGradient
            id='paint0_radial_237_1644'
            cx='0'
            cy='0'
            r='1'
            gradientUnits='userSpaceOnUse'
            gradientTransform='translate(412.364 127.206) rotate(67.6306) scale(770.145)'
          >
            <stop stopColor='#B790C2' />
            <stop offset='0.429506' stopColor='#E5D3DA' />
            <stop offset='1' stopColor='#B4BDE6' />
            <stop offset='1' stopColor='#B4BDE6' />
          </radialGradient>
          <radialGradient
            id='paint1_radial_237_1644'
            cx='0'
            cy='0'
            r='1'
            gradientUnits='userSpaceOnUse'
            gradientTransform='translate(412.364 127.206) rotate(67.6306) scale(770.145)'
          >
            <stop stopColor='#C290B1' />
            <stop offset='0.429506' stopColor='#E5D3DA' />
            <stop offset='1' stopColor='#B4BDE6' />
            <stop offset='1' stopColor='#B4BDE6' />
          </radialGradient>
          <radialGradient
            id='paint2_radial_237_1644'
            cx='0'
            cy='0'
            r='1'
            gradientUnits='userSpaceOnUse'
            gradientTransform='translate(543 465) rotate(77.9509) scale(299.656)'
          >
            <stop stopColor='#B9A8CE' />
            <stop offset='1' stopColor='#BA9FC0' stopOpacity='0' />
          </radialGradient>
          <radialGradient
            id='paint3_radial_237_1644'
            cx='0'
            cy='0'
            r='1'
            gradientUnits='userSpaceOnUse'
            gradientTransform='translate(818.5 223.5) rotate(124.957) scale(740.012)'
          >
            <stop stopColor='#393478' />
            <stop offset='0.570901' stopColor='#8DA4C7' stopOpacity='0' />
            <stop offset='0.8045' stopColor='#FFEFDE' />
            <stop offset='1' stopColor='#B592BF' stopOpacity='0' />
          </radialGradient>
          <linearGradient
            id='paint4_linear_237_1644'
            x1='1121.97'
            y1='138.881'
            x2='-76.9099'
            y2='622.909'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#C6D4EB' />
            <stop offset='0.50727' stopColor='#CCE1E1' />
            <stop offset='1' stopColor='#E6C4D1' />
          </linearGradient>
          <linearGradient
            id='paint5_linear_237_1644'
            x1='1121.97'
            y1='138.881'
            x2='-76.9099'
            y2='622.909'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#C6D4EB' />
            <stop offset='0.50727' stopColor='#CCE1E1' />
            <stop offset='1' stopColor='#E6C4D1' />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Moon;
