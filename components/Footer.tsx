import React from 'react'

interface FooterProps {}

export const REPORT_LINK = 'https://github.com/intrinsic-opensource/rcr-ui/issues'
export const RCR_UI_REPO_LINK = 'https://github.com/intrinsic-opensource/rcr-ui'

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-ros-blue flex flex-col items-center justify-center gap-2 h-18 mt-4 py-2.5">
      <div className="text-center text-white">
        Open source robotics tooling, powered by Intrinsic and the OSRF.
      </div>
      <div className="text-center text-white">
        To report an issue with one of the modules, see the{' '}
        <a
          href={REPORT_LINK}
          className="text-white hover:text-gray-300"
        >
          instructions here
        </a>
        .
      </div>
      <div className="text-center text-white">
        The source of this website can be found in{' '}
        <a
          href={RCR_UI_REPO_LINK}
          className="text-white hover:text-gray-300"
        >
          this repository
        </a>
        .
      </div>
    </footer>
  )
}
