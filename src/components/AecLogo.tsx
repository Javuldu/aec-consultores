import React, { useState } from 'react';

interface AecLogoProps {
  className?: string;
  variant?: 'color' | 'white' | 'dark';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
}

export const AecLogo: React.FC<AecLogoProps> = ({
  className = '',
  variant = 'color',
  showText = true,
  size = 'md',
}) => {
  const [imgError, setImgError] = useState(false);

  // Sizing presets
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-10 sm:h-11 w-auto',
    lg: 'h-14 w-auto',
    xl: 'h-20 w-auto',
    custom: '',
  };

  const activeSizeClass = size !== 'custom' ? sizeClasses[size] : '';
  const combinedClasses = `${activeSizeClass} ${className}`.trim();

  // Resolve SVG paths
  const logoSrc = variant === 'white' ? '/logo-blanco.svg' : '/logo azul.svg';

  // Primary rendering using <img> for maximum browser & iframe compatibility (avoids SVG flexbox collapse)
  if (showText && !imgError) {
    return (
      <img
        src={logoSrc}
        alt="AEC Consultores"
        className={`${combinedClasses} block select-none object-contain shrink-0`}
        style={{ aspectRatio: '360/215' }}
        onError={() => setImgError(true)}
      />
    );
  }

  // Fallback inline SVG matching the exact uploaded files
  const isWhiteVariant = variant === 'white';
  const boxFill = isWhiteVariant ? '#ffffff' : '#006AB4';
  const letterFill = isWhiteVariant ? '#000000' : '#ffffff';
  const textFill = isWhiteVariant ? '#ffffff' : '#006AB4';
  const viewBox = showText ? '0 0 360 215' : '0 0 360 140';
  const aspectRatio = showText ? '360/215' : '360/140';

  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 select-none ${combinedClasses}`}
      style={{ aspectRatio }}
    >
      <svg
        viewBox={viewBox}
        className="w-full h-full block"
        style={{ width: '100%', height: '100%', display: 'block' }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="AEC Consultores Logo"
        role="img"
      >
        {/* Background matching exact uploaded file for white variant */}
        {isWhiteVariant && (
          <rect width="360" height="215" rx="16" fill="#000000" />
        )}

        {/* === BOX 1: A (Signature AEC Cutout) === */}
        <g id="box-a">
          <rect x="8" y="8" width="104" height="126" rx="22" fill={boxFill} />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M58 24 L96 88 H44 L26 134 H9 L58 24 Z M58 48 L77 72 H49 L58 48 Z"
            fill={letterFill}
          />
        </g>

        {/* === BOX 2: E === */}
        <g id="box-e">
          <rect x="128" y="8" width="104" height="126" rx="22" fill={boxFill} />
          <path
            d="M150 28 H212 V44 H168 V63 H204 V79 H168 V98 H212 V114 H150 V28 Z"
            fill={letterFill}
          />
        </g>

        {/* === BOX 3: C === */}
        <g id="box-c">
          <rect x="248" y="8" width="104" height="126" rx="22" fill={boxFill} />
          <path
            d="M341 48 C333 34.5 318.5 26 300 26 C274.5 26 254 46 254 71 C254 96 274.5 116 300 116 C318.5 116 333 107.5 341 94 H321 C315.5 101.5 308.5 105.5 300 105.5 C280.5 105.5 267 89.5 267 71 C267 52.5 280.5 36.5 300 36.5 C308.5 36.5 315.5 40.5 321 48 H341 Z"
            fill={letterFill}
          />
        </g>

        {/* === BOTTOM WORD: consultores === */}
        {showText && (
          <text
            x="180"
            y="198"
            textAnchor="middle"
            fill={textFill}
            fontSize="64"
            fontStyle="italic"
            fontFamily="'Playfair Display', 'Times New Roman', 'Liberation Serif', 'Nimbus Roman', Georgia, serif"
            fontWeight="700"
            letterSpacing="-0.5px"
          >
            consultores
          </text>
        )}
      </svg>
    </div>
  );
};
